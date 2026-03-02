import * as gfx from 'wasi:webgpu/webgpu@0.0.1';
import * as wasiSurface from 'wasi:surface/surface@0.0.1';
import * as wasiGraphicsContext from 'wasi:graphics-context/graphics-context@0.0.1';

import { inner, key, privateConstructorCalled, Todo, Unreachable, Unimplemented } from './common';
import { GPUDevice, GPUTexture } from './webgpu';

export function createCanvas(): HTMLCanvasElement {
    return new HTMLCanvasElement(key);
}

// When forwarding a method to gfx.[type].[method], always pass down objects (like `...descriptor`) so that if new fields are added and tsc can catch it.

type LimitedCanvas = Pick<globalThis.HTMLCanvasElement, "height" | "width" | "getContext" | "transferControlToOffscreen" | "addEventListener" | "removeEventListener" | "dispatchEvent" | "onclick" | "ondblclick" | "oninput" | "onkeydown" | "onkeyup" | "onpointerdown" | "onpointermove" | "onpointerup">;
export class HTMLCanvasElement implements LimitedCanvas, AnimationFrameProvider {
    _surface: wasiSurface.Surface;
    _graphicsContext: wasiGraphicsContext.Context;
    #framePollable: wasiSurface.Pollable | undefined;
    get height(): number {
        return this._surface.height();
    }
    set height(value: number) {
        this._surface.requestSetSize(value, undefined);
    }
    get width(): number {
        return this._surface.width();
    }
    set width(value: number) {
        this._surface.requestSetSize(undefined, value);
    }

    constructor(k: symbol) {
        privateConstructorCalled(k);
        this._surface = new wasiSurface.Surface({});
        this._graphicsContext = new wasiGraphicsContext.Context();
        this._surface.connectGraphicsContext(this._graphicsContext);
    }

    getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings | undefined): CanvasRenderingContext2D | null;
    getContext(contextId: "bitmaprenderer", options?: ImageBitmapRenderingContextSettings | undefined): ImageBitmapRenderingContext | null;
    getContext(contextId: "webgl", options?: WebGLContextAttributes | undefined): WebGLRenderingContext | null;
    getContext(contextId: "webgl2", options?: WebGLContextAttributes | undefined): WebGL2RenderingContext | null;
    getContext(contextId: "webgpu"): GPUCanvasContext;
    getContext(
        contextId: "2d" | "bitmaprenderer" | "webgl" | "webgl2" | "webgpu",
        options?: CanvasRenderingContext2DSettings | ImageBitmapRenderingContextSettings | WebGLContextAttributes | WebGLContextAttributes
    ): CanvasRenderingContext2D | ImageBitmapRenderingContext | WebGLRenderingContext | WebGL2RenderingContext | GPUCanvasContext | null {
        switch (contextId.toLowerCase()) {
            case "2d":
                throw new Unimplemented;
            case "bitmaprenderer":
                throw new Todo;
            case "webgl":
                throw new Unimplemented;
            case "webgl2":
                throw new Unimplemented;
            case "webgpu":
                return new GPUCanvasContext(key, this);
            default:
                throw new Unreachable;
        }
    }

    transferControlToOffscreen(): OffscreenCanvas {
        throw new Todo;
    }
    addEventListener(type: unknown, listener: unknown, options?: unknown): void {
        throw new Todo;
    }
    removeEventListener(type: unknown, listener: unknown, options?: unknown): void {
        throw new Todo;
    }
    dispatchEvent(event: Event): boolean {
        throw new Todo;
    }
    onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null = null;
    ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null = null;
    oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null = null;
    onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null = null;
    onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null = null;
    onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null = null;
    onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null = null;
    onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null = null;
    cancelAnimationFrame(handle: number): void {
        throw new Todo;
    }
    requestAnimationFrame(callback: FrameRequestCallback): number {
        if (!this.#framePollable)
            this.#framePollable = this._surface.subscribeFrame();
        const pollable = this.#framePollable;

        // giving the event loop a chance to do other work before blocking.
        Promise.resolve().then(() => {
            pollable.block();
            this._surface.getFrame();
            // TODO: this number should be real
            callback(0);
            this._graphicsContext.present();
        });
        // TODO: this number should be real
        return 0;
    }
}

export class GPUCanvasContext implements globalThis.GPUCanvasContext {
    #canvas: HTMLCanvasElement;
    constructor(k: symbol, canvas: HTMLCanvasElement) {
        privateConstructorCalled(k);
        this.#canvas = canvas;
    }
    readonly __brand: 'GPUCanvasContext' = "GPUCanvasContext";
    get canvas(): globalThis.HTMLCanvasElement {
        throw new Todo;
    }
    configure(configuration: GPUCanvasConfiguration): undefined {
        let device = (configuration.device as GPUDevice)[inner];
        let context = this.#canvas._graphicsContext;
        device.connectGraphicsContext(context);
    }
    unconfigure(): undefined {
        throw new Todo;
    }
    getConfiguration(): GPUCanvasConfigurationOut | null {
        throw new Todo;
    }
    getCurrentTexture(): GPUTexture {
        const buffer = this.#canvas._graphicsContext.getCurrentBuffer();
        let texture = gfx.GpuTexture.fromGraphicsBuffer(buffer);
        return new GPUTexture(key, texture);
    }
}
