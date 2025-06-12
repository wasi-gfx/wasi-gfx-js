import * as gfx from 'wasi:webgpu/webgpu@0.0.1';
import * as wasiSurface from 'wasi:surface/surface@0.0.1';
import * as wasiGraphicsContext from 'wasi:graphics-context/graphics-context@0.0.1';

export function createCanvas(): HTMLCanvasElement {
    return new HTMLCanvasElement(key);
}

// types

// https://webidl.spec.whatwg.org/#ArrayBufferView
type ArrayBufferView = Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | BigInt64Array | BigUint64Array | Float32Array | Float64Array | DataView;

// https://dom.spec.whatwg.org/#interface-eventtarget
class EventTarget {
    addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void {
        throw new Todo;
    }
    dispatchEvent(event: Event): boolean {
        throw new Todo;
    }
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void {
        throw new Todo;
    }
}

class Todo extends Error {
    constructor() {
        super("TODO: not yet implemented");
    }
}

class Unimplemented extends Error {
    constructor() {
        super("Unimplemented.");
    }
}

class Unreachable extends Error {
    constructor() {
        super("Unreachable code reached.");
    }
}

const inner = Symbol("inner");
const key = Symbol("key");
function privateConstructorCalled(k: symbol) {
    if (k !== key) throw new TypeError("Illegal constructor.");
}

// converters

function numToBigIntOptional(n: number | undefined): bigint | undefined {
    if (n === undefined) return undefined;
    return BigInt(n);
}

function convertFeatureNameWebToWasi(name: GPUFeatureName): gfx.GpuFeatureName {
    if (name === "texture-compression-bc-sliced-3d")
        return "texture-compression-bc-sliced3d";
    if (name === "texture-compression-astc-sliced-3d" || name === "float32-blendable")
        throw new Todo;
    return name;
}

function convertTextureFormatWebToWasi(name: GPUTextureFormat): gfx.GpuTextureFormat {
    switch (name) {
        case "astc-4x4-unorm":
            return "astc4x4-unorm";
        case "astc-4x4-unorm-srgb":
            return "astc4x4-unorm-srgb";
        case "astc-5x4-unorm":
            return "astc5x4-unorm";
        case "astc-5x4-unorm-srgb":
            return "astc5x4-unorm-srgb";
        case "astc-5x5-unorm":
            return "astc5x5-unorm";
        case "astc-5x5-unorm-srgb":
            return "astc5x5-unorm-srgb";
        case "astc-6x5-unorm":
            return "astc6x5-unorm";
        case "astc-6x5-unorm-srgb":
            return "astc6x5-unorm-srgb";
        case "astc-6x6-unorm":
            return "astc6x6-unorm";
        case "astc-6x6-unorm-srgb":
            return "astc6x6-unorm-srgb";
        case "astc-8x5-unorm":
            return "astc8x5-unorm";
        case "astc-8x5-unorm-srgb":
            return "astc8x5-unorm-srgb";
        case "astc-8x6-unorm":
            return "astc8x6-unorm";
        case "astc-8x6-unorm-srgb":
            return "astc8x6-unorm-srgb";
        case "astc-8x8-unorm":
            return "astc8x8-unorm";
        case "astc-8x8-unorm-srgb":
            return "astc8x8-unorm-srgb";
        case "astc-10x5-unorm":
            return "astc10x5-unorm";
        case "astc-10x5-unorm-srgb":
            return "astc10x5-unorm-srgb";
        case "astc-10x6-unorm":
            return "astc10x6-unorm";
        case "astc-10x6-unorm-srgb":
            return "astc10x6-unorm-srgb";
        case "astc-10x8-unorm":
            return "astc10x8-unorm";
        case "astc-10x8-unorm-srgb":
            return "astc10x8-unorm-srgb";
        case "astc-10x10-unorm":
            return "astc10x10-unorm";
        case "astc-10x10-unorm-srgb":
            return "astc10x10-unorm-srgb";
        case "astc-12x10-unorm":
            return "astc12x10-unorm";
        case "astc-12x10-unorm-srgb":
            return "astc12x10-unorm-srgb";
        case "astc-12x12-unorm":
            return "astc12x12-unorm";
        case "astc-12x12-unorm-srgb":
            return "astc12x12-unorm-srgb";
        default:
            return name;
    }
}

function convertTextureFormatWasiToWeb(name: gfx.GpuTextureFormat): GPUTextureFormat {
    switch (name) {
        case "astc4x4-unorm":
            return "astc-4x4-unorm"
        case "astc4x4-unorm-srgb":
            return "astc-4x4-unorm-srgb"
        case "astc5x4-unorm":
            return "astc-5x4-unorm"
        case "astc5x4-unorm-srgb":
            return "astc-5x4-unorm-srgb"
        case "astc5x5-unorm":
            return "astc-5x5-unorm"
        case "astc5x5-unorm-srgb":
            return "astc-5x5-unorm-srgb"
        case "astc6x5-unorm":
            return "astc-6x5-unorm"
        case "astc6x5-unorm-srgb":
            return "astc-6x5-unorm-srgb"
        case "astc6x6-unorm":
            return "astc-6x6-unorm"
        case "astc6x6-unorm-srgb":
            return "astc-6x6-unorm-srgb"
        case "astc8x5-unorm":
            return "astc-8x5-unorm"
        case "astc8x5-unorm-srgb":
            return "astc-8x5-unorm-srgb"
        case "astc8x6-unorm":
            return "astc-8x6-unorm"
        case "astc8x6-unorm-srgb":
            return "astc-8x6-unorm-srgb"
        case "astc8x8-unorm":
            return "astc-8x8-unorm"
        case "astc8x8-unorm-srgb":
            return "astc-8x8-unorm-srgb"
        case "astc10x5-unorm":
            return "astc-10x5-unorm"
        case "astc10x5-unorm-srgb":
            return "astc-10x5-unorm-srgb"
        case "astc10x6-unorm":
            return "astc-10x6-unorm"
        case "astc10x6-unorm-srgb":
            return "astc-10x6-unorm-srgb"
        case "astc10x8-unorm":
            return "astc-10x8-unorm"
        case "astc10x8-unorm-srgb":
            return "astc-10x8-unorm-srgb"
        case "astc10x10-unorm":
            return "astc-10x10-unorm"
        case "astc10x10-unorm-srgb":
            return "astc-10x10-unorm-srgb"
        case "astc12x10-unorm":
            return "astc-12x10-unorm"
        case "astc12x10-unorm-srgb":
            return "astc-12x10-unorm-srgb"
        case "astc12x12-unorm":
            return "astc-12x12-unorm";
        case "astc12x12-unorm-srgb":
            return "astc-12x12-unorm-srgb";
        default:
            return name;
    }
}

function convertVertexFormatWebToWasi(name: GPUVertexFormat): gfx.GpuVertexFormat {
    switch (name) {
        case "unorm10-10-10-2":
            return "unorm1010102"
        case "uint8":
        case "sint8":
        case "unorm8":
        case "snorm8":
        case "uint16":
        case "sint16":
        case "unorm16":
        case "snorm16":
        case "float16":
        case "unorm8x4-bgra":
            throw new Todo;
        default:
            return name;
    }
}

function convertVertexFormatWasiToWeb(name: gfx.GpuVertexFormat): GPUVertexFormat {
    switch (name) {
        case "unorm1010102":
            return "unorm10-10-10-2";
        default:
            return name;
    }
}

function convertTextureDimensionWebToWasi(name: GPUTextureDimension): gfx.GpuTextureDimension {
    name = name.toLowerCase() as GPUTextureDimension;
    switch (name) {
        case "1d":
            return "d1";
        case "2d":
            return "d2";
        case "3d":
            return "d3";
    }
}

function convertTextureDimensionWasiToWeb(name: gfx.GpuTextureDimension): GPUTextureDimension {
    switch (name) {
        case "d1":
            return "1d";
        case "d2":
            return "2d";
        case "d3":
            return "3d";
    }
}

function convertTextureViewDimensionWebToWasi(name: GPUTextureViewDimension): gfx.GpuTextureViewDimension {
    name = name.toLowerCase() as GPUTextureViewDimension;
    switch (name) {
        case "1d":
            return "d1";
        case "2d":
            return "d2";
        case "3d":
            return "d3";
        case "2d-array":
            return "d2-array";
        default:
            return name;
    }
}

function convertTextureViewDimensionWasiToWeb(name: gfx.GpuTextureViewDimension): GPUTextureViewDimension {
    switch (name) {
        case "d1":
            return "1d";
        case "d2":
            return "2d";
        case "d3":
            return "3d";
        case "d2-array":
            return "2d-array";
        default:
            return name;
    }
}

function convertGpuLayoutWebToWasi(layout: GPUAutoLayoutMode | globalThis.GPUPipelineLayout): gfx.GpuLayoutMode {
    if (layout instanceof GPUPipelineLayout) {
        return {
            tag: 'specific',
            val: layout[inner],
        }
    } else if (layout === 'auto') {
        return {
            tag: 'auto',
        }
    } else {
        throw new Unreachable;
    }
}

function convertGpuLayoutWasiToWeb(layout: gfx.GpuLayoutMode): GPUPipelineLayout | GPUAutoLayoutMode {
    throw new Todo;
}

function convertColorWebToWasi(color: globalThis.GPUColor): gfx.GpuColor {
    // https://www.w3.org/TR/webgpu/#colors-and-vectors
    if (Symbol.iterator in color) {
        const iter = color[Symbol.iterator]();
        const r = iter.next().value;
        const g = iter.next().value;
        const b = iter.next().value;
        const a = iter.next().value;
        if (r === undefined || g === undefined || b === undefined || a === undefined || !iter.next().done)
            throw new TypeError("color must have exactly 4 items");
        return {
            r, g, b, a,
        }
    } else {
        return color;
    }
}

function convertExtent3DWebToWasi(extent: GPUExtent3D): gfx.GpuExtent3D {
    // TODO: add correct link https://www.w3.org/TR/webgpu/#colors-and-vectors
    if (Symbol.iterator in extent) {
        const iter = extent[Symbol.iterator]();
        const width = iter.next().value;
        const height = iter.next().value;
        const depthOrArrayLayers = iter.next().value;
        if (width === undefined || !iter.next().done)
            throw new TypeError("extent must have 1-3 items");
        return {
            width,
            height,
            depthOrArrayLayers,
        }
    } else {
        return extent;
    }
}

function convertOrigin3DWebToWasi(origin: GPUOrigin3D): gfx.GpuOrigin3D {
    // TODO: add correct link https://www.w3.org/TR/webgpu/#colors-and-vectors
    if (Symbol.iterator in origin) {
        const iter = origin[Symbol.iterator]();
        const x = iter.next().value;
        const y = iter.next().value;
        const z = iter.next().value;
        if (x === undefined || y === undefined || z === undefined || !iter.next().done)
            throw new TypeError("origin must have exactly 3 items");
        return {
            x,
            y,
            z,
        };
    } else {
        return origin;
    }
}

function convertGpuBindingResourceWebToWasi(resource: GPUBindingResource): gfx.GpuBindingResource {
    if (resource instanceof GPUSampler) {
        return {
            tag: 'gpu-sampler',
            val: (resource as GPUSampler)[inner],
        };
    } else if (resource instanceof GPUTextureView) {
        throw new Todo;
    } else if ((resource as GPUBufferBinding).buffer) {
        let bufferBinding = resource as GPUBufferBinding;
        let offsetBitInt: bigint | undefined;
        if (typeof bufferBinding.offset === "number")
            offsetBitInt = BigInt(bufferBinding.offset);
        let sizeBitInt: bigint | undefined;
        if (typeof bufferBinding.size === "number")
            sizeBitInt = BigInt(bufferBinding.size);
        return {
            tag: 'gpu-buffer-binding',
            val: {
                ...resource,
                size: sizeBitInt,
                offset: offsetBitInt,
                buffer: (bufferBinding.buffer as GPUBuffer)[inner],
            }
        };
    } else {
        throw new Unreachable;
    }
}

function convertBufferToUint8Array(buffer: ArrayBufferView | ArrayBuffer | SharedArrayBuffer): Uint8Array {
    if (
        buffer instanceof Int8Array
        || buffer instanceof Int16Array
        || buffer instanceof Int32Array
        || buffer instanceof Uint8Array
        || buffer instanceof Uint16Array
        || buffer instanceof Uint32Array
        || buffer instanceof Uint8ClampedArray
        || buffer instanceof BigInt64Array
        || buffer instanceof BigUint64Array
        || buffer instanceof Float32Array
        || buffer instanceof Float64Array
    ) {
        return new Uint8Array(buffer.buffer);
    } else if (buffer instanceof DataView) {
        throw new Todo();
    } else if (buffer instanceof ArrayBuffer) {
        throw new Todo();
    } else if (buffer instanceof SharedArrayBuffer) {
        throw new Todo();
    } else {
        throw new Unreachable;
    }
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

export class GPU implements globalThis.GPU {
    [inner]: gfx.Gpu;

    constructor(k: symbol, i: gfx.Gpu) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand(): 'GPU' {
        return "GPU";
    }

    get wgslLanguageFeatures(): WGSLLanguageFeatures {
        throw new Todo;
    }

    async requestAdapter(descriptor: GPURequestAdapterOptions = {}): Promise<GPUAdapter | null> {
        const adapter = await this[inner].requestAdapter(descriptor);
        if (adapter)
            return new GPUAdapter(key, adapter);
        return null;
    }

    getPreferredCanvasFormat(): GPUTextureFormat {
        return convertTextureFormatWasiToWeb(this[inner].getPreferredCanvasFormat());
    }
}

export class GPUAdapter implements globalThis.GPUAdapter {
    [inner]: gfx.GpuAdapter;

    constructor(k: symbol, i: gfx.GpuAdapter) {
        privateConstructorCalled(k);
        this[inner] = i;
    }

    async requestDevice(descriptor: GPUDeviceDescriptor = {}): Promise<GPUDevice> {
        let requiredFeatures: gfx.GpuFeatureName[] | undefined;
        if (descriptor.requiredFeatures)
            requiredFeatures = Array.from(descriptor.requiredFeatures).map(convertFeatureNameWebToWasi);

        return new GPUDevice(key, this[inner].requestDevice({
            ...descriptor,
            requiredFeatures,
            requiredLimits: undefined, // TODO:
        }));
    }

    requestAdapterInfo() {
        throw new Todo();
    }

    get __brand(): 'GPUAdapter' {
        return "GPUAdapter";
    }

    get info(): GPUAdapterInfo {
        throw new Todo();
    }

    get features(): GPUSupportedFeatures {
        throw new Todo();
    }

    get limits(): GPUSupportedLimits {
        throw new Todo();
    }

    get isFallbackAdapter(): boolean {
        return this[inner].isFallbackAdapter();
    }
}

export class GPUDevice extends EventTarget implements globalThis.GPUDevice {
    [inner]: gfx.GpuDevice;

    constructor(k: symbol, i: gfx.GpuDevice) {
        privateConstructorCalled(k);
        super();
        this[inner] = i;
    }
    get __brand(): 'GPUDevice' {
        return "GPUDevice";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }
    get lost(): Promise<GPUDeviceLostInfo> {
        throw new Todo();
    }
    get features(): GPUSupportedFeatures {
        throw new Todo();
    }
    get limits(): GPUSupportedLimits {
        throw new Todo();
    }
    get queue(): GPUQueue {
        return new GPUQueue(key, this[inner].queue());
    }
    get adapterInfo(): GPUAdapterInfo {
        throw new Todo();
    }

    destroy(): undefined {
        this[inner].destroy();
    }

    createBuffer(descriptor: GPUBufferDescriptor): GPUBuffer {
        return new GPUBuffer(key, this[inner].createBuffer({
            ...descriptor,
            size: BigInt(descriptor.size),
        }));
    }

    createTexture(descriptor: GPUTextureDescriptor): GPUTexture {
        let dimension: gfx.GpuTextureDimension | undefined;
        if(descriptor.dimension)
            dimension = convertTextureDimensionWebToWasi(descriptor.dimension);
        let viewFormats: gfx.GpuTextureFormat[] | undefined;
        if(descriptor.viewFormats)
            viewFormats = Array.from(descriptor.viewFormats).map(f => convertTextureFormatWebToWasi(f));
        return new GPUTexture(key, this[inner].createTexture({
            ...descriptor,
            size: convertExtent3DWebToWasi(descriptor.size),
            format: convertTextureFormatWebToWasi(descriptor.format),
            dimension,
            viewFormats,
        }));
    }

    createSampler(descriptor?: GPUSamplerDescriptor): GPUSampler {
        return new GPUSampler(key, this[inner].createSampler(descriptor));
    }

    createBindGroupLayout(descriptor: GPUBindGroupLayoutDescriptor): GPUBindGroupLayout {
        return new GPUBindGroupLayout(key, this[inner].createBindGroupLayout({
            ...descriptor,
            entries: Array.from(descriptor.entries).map(entry => {
                let buffer: gfx.GpuBufferBindingLayout | undefined;
                if (entry.buffer) {
                    buffer = {
                        ...entry.buffer,
                        minBindingSize: numToBigIntOptional(entry.buffer.minBindingSize),
                    }
                }
                let texture: gfx.GpuTextureBindingLayout | undefined;
                if (entry.texture) {
                    let viewDimension: gfx.GpuTextureViewDimension | undefined;
                    if(entry.texture.viewDimension)
                        viewDimension = convertTextureViewDimensionWebToWasi(entry.texture.viewDimension)
                    texture = {
                        ...entry.texture,
                        viewDimension,
                    }
                }
                let storageTexture: gfx.GpuStorageTextureBindingLayout | undefined;
                if (entry.storageTexture) {
                    let viewDimension: gfx.GpuTextureViewDimension | undefined;
                    if(entry.storageTexture.viewDimension)
                        viewDimension = convertTextureViewDimensionWebToWasi(entry.storageTexture.viewDimension)
                    storageTexture = {
                        ...entry.storageTexture,
                        viewDimension,
                        format: convertTextureFormatWebToWasi(entry.storageTexture.format),
                    }
                }
                return {
                    ...entry,
                    buffer,
                    texture,
                    storageTexture,
                };
            }),
        }));
    }

    createPipelineLayout(descriptor: GPUPipelineLayoutDescriptor): GPUPipelineLayout {
        return new GPUPipelineLayout(key, this[inner].createPipelineLayout({
            ...descriptor,
            bindGroupLayouts: Array.from(descriptor.bindGroupLayouts).map(b => (b as GPUBindGroupLayout)[inner])
        }));
    }

    createBindGroup(descriptor: GPUBindGroupDescriptor): GPUBindGroup {
        return new GPUBindGroup(key, this[inner].createBindGroup({
            ...descriptor,
            entries: Array.from(descriptor.entries).map(entry => {
                return {
                    ...entry,
                    resource: convertGpuBindingResourceWebToWasi(entry.resource),
                }
            }),
            layout: (descriptor.layout as GPUBindGroupLayout)[inner],
        }));
    }

    createShaderModule(descriptor: GPUShaderModuleDescriptor) {
        let compilationHints: gfx.GpuShaderModuleCompilationHint[] | undefined;
        if (descriptor.compilationHints) {
            compilationHints = descriptor.compilationHints.map(hint => {
                let layout: gfx.GpuLayoutMode | undefined;
                if (hint.layout) {
                    layout = convertGpuLayoutWebToWasi(hint.layout);
                }
                return {
                    ...hint,
                    layout,
                }
            });
        }

        return new GPUShaderModule(key, this[inner].createShaderModule({
            ...descriptor,
            compilationHints,
        }));
    }

    createComputePipeline(descriptor: GPUComputePipelineDescriptor) {
        let compute: gfx.GpuProgrammableStage = {
            module: (descriptor.compute.module as GPUShaderModule)[inner],
            entryPoint: descriptor.compute.entryPoint,
            constants: undefined, // TODO:
        };

        return new GPUComputePipeline(key, this[inner].createComputePipeline({
            ...descriptor,
            compute,
            layout: convertGpuLayoutWebToWasi(descriptor.layout),
        }));
    }

    createRenderPipeline(descriptor: GPURenderPipelineDescriptor): GPURenderPipeline {
        let buffers: (gfx.GpuVertexBufferLayout | undefined)[] | undefined = undefined;
        if (descriptor.vertex.buffers) {
            buffers = Array.from(descriptor.vertex.buffers).map(vbl => {
                if (vbl) {
                    return {
                        ...vbl,
                        arrayStride: BigInt(vbl.arrayStride),
                        attributes: Array.from(vbl.attributes).map(attribute => {
                            return {
                                ...attribute,
                                offset: BigInt(attribute.offset),
                                format: convertVertexFormatWebToWasi(attribute.format),
                            }
                        }),
                    }
                } else {
                    return undefined;
                }
            });
        }
        const vertex: gfx.GpuVertexState = {
            ...descriptor.vertex,
            constants: undefined, // TODO: 
            module: (descriptor.vertex.module as GPUShaderModule)[inner],
            buffers,
        };
        let depthStencil: gfx.GpuDepthStencilState | undefined;
        if (descriptor.depthStencil) {
            depthStencil = {
                ...descriptor.depthStencil,
                format: convertTextureFormatWebToWasi(descriptor.depthStencil.format),
            }
        }
        let fragment: gfx.GpuFragmentState | undefined;
        if (descriptor.fragment) {
            fragment = {
                ...descriptor.fragment,
                constants: undefined, // TODO:
                module: (descriptor.fragment.module as GPUShaderModule)[inner],
                targets: Array.from(descriptor.fragment.targets).map(target => {
                    if (target) {
                        return {
                            ...target,
                            format: convertTextureFormatWebToWasi(target.format),
                        };
                    } else {
                        return undefined;
                    }
                }),
            }
        }

        return new GPURenderPipeline(key, this[inner].createRenderPipeline({
            ...descriptor,
            vertex,
            depthStencil,
            fragment,
            layout: convertGpuLayoutWebToWasi(descriptor.layout),
        }));
    }

    async createComputePipelineAsync(_descriptor: GPUComputePipelineDescriptor): Promise<GPUComputePipeline> {
        throw new Todo();
    }

    async createRenderPipelineAsync(descriptor: GPURenderPipelineDescriptor): Promise<GPURenderPipeline> {
        throw new Todo();
    }

    createCommandEncoder(descriptor: GPUCommandEncoderDescriptor = {}): GPUCommandEncoder {
        return new GPUCommandEncoder(key, this[inner].createCommandEncoder(descriptor));
    }

    createRenderBundleEncoder(descriptor: GPURenderBundleEncoderDescriptor): GPURenderBundleEncoder {
        let depthStencilFormat: gfx.GpuTextureFormat | undefined;
        if(descriptor.depthStencilFormat)
            depthStencilFormat = convertTextureFormatWebToWasi(descriptor.depthStencilFormat);
        return new GPURenderBundleEncoder(key, this[inner].createRenderBundleEncoder({
            ...descriptor,
            colorFormats: Array.from(descriptor.colorFormats).map(colorFormat => {
                if(colorFormat) {
                    return convertTextureFormatWebToWasi(colorFormat)
                } {
                    return undefined;
                }
            }),
            depthStencilFormat,
        }));
    }

    createQuerySet(descriptor: GPUQuerySetDescriptor): GPUQuerySet {
        return new GPUQuerySet(key, this[inner].createQuerySet(descriptor));
    }

    pushErrorScope(filter: GPUErrorFilter): undefined {
        this[inner].pushErrorScope(filter);
    }

    async popErrorScope(): Promise<GPUError | null> {
        throw new Todo();
    }

    importExternalTexture(descriptor: GPUExternalTextureDescriptor): GPUExternalTexture {
        throw new Todo;
    }
    onuncapturederror: ((this: globalThis.GPUDevice, ev: GPUUncapturedErrorEvent) => any) | null = null;
}

export class GPURenderBundleEncoder implements globalThis.GPURenderBundleEncoder {
    [inner]: gfx.GpuRenderBundleEncoder;

    constructor(k: symbol, i: gfx.GpuRenderBundleEncoder) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand(): 'GPURenderBundleEncoder' {
        return "GPURenderBundleEncoder";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }
    finish(descriptor?: GPURenderBundleDescriptor): GPURenderBundle {
        return new GPURenderBundle(key, this[inner].finish(descriptor));
    }
    pushDebugGroup(groupLabel: string): undefined {
        this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup(): undefined {
        this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel: string): undefined {
        this[inner].insertDebugMarker(markerLabel);
    }
    setBindGroup(index: unknown, bindGroup: unknown, dynamicOffsetsData?: unknown, dynamicOffsetsDataStart?: unknown, dynamicOffsetsDataLength?: unknown): undefined {
        throw new Todo;
    }
    setPipeline(pipeline: globalThis.GPURenderPipeline): undefined {
        this[inner].setPipeline((pipeline as GPURenderPipeline)[inner]);
    }
    setIndexBuffer(buffer: globalThis.GPUBuffer, indexFormat: GPUIndexFormat, offset?: GPUSize64, size?: GPUSize64): undefined {
        this[inner].setIndexBuffer((buffer as GPUBuffer)[inner], indexFormat, numToBigIntOptional(offset), numToBigIntOptional(size));
    }
    setVertexBuffer(slot: GPUIndex32, buffer: globalThis.GPUBuffer | null | undefined, offset?: GPUSize64, size?: GPUSize64): undefined {
        this[inner].setVertexBuffer(slot, (buffer as GPUBuffer)[inner], numToBigIntOptional(offset), numToBigIntOptional(size));
    }
    draw(vertexCount: GPUSize32, instanceCount?: GPUSize32, firstVertex?: GPUSize32, firstInstance?: GPUSize32): undefined {
        this[inner].draw(vertexCount, instanceCount, firstVertex, firstInstance);
    }
    drawIndexed(indexCount: GPUSize32, instanceCount?: GPUSize32, firstIndex?: GPUSize32, baseVertex?: GPUSignedOffset32, firstInstance?: GPUSize32): undefined {
        this[inner].drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance);
    }
    drawIndirect(indirectBuffer: globalThis.GPUBuffer, indirectOffset: GPUSize64): undefined {
        this[inner].drawIndirect((indirectBuffer as GPUBuffer)[inner], BigInt(indirectOffset));
    }
    drawIndexedIndirect(indirectBuffer: globalThis.GPUBuffer, indirectOffset: GPUSize64): undefined {
        this[inner].drawIndexedIndirect((indirectBuffer as GPUBuffer)[inner], BigInt(indirectOffset));
    }
}

export class GPURenderBundle implements globalThis.GPURenderBundle {
    [inner]: gfx.GpuRenderBundle;
    constructor(k: symbol, i: gfx.GpuRenderBundle) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand(): 'GPURenderBundle' {
        return "GPURenderBundle";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }
}

export class GPUShaderModule implements globalThis.GPUShaderModule {
    [inner]: gfx.GpuShaderModule;

    constructor(k: symbol, i: gfx.GpuShaderModule) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand(): 'GPUShaderModule' {
        return "GPUShaderModule";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }

    getCompilationInfo(): Promise<GPUCompilationInfo> {
        throw new Todo();
    }
}

export class GPUComputePipeline implements globalThis.GPUComputePipeline {
    [inner]: gfx.GpuComputePipeline;

    constructor(k: symbol, i: gfx.GpuComputePipeline) {
        privateConstructorCalled(k);
        this[inner] = i;
    }

    get __brand(): 'GPUComputePipeline' {
        return "GPUComputePipeline";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }

    getBindGroupLayout(index: number): GPUBindGroupLayout {
        return new GPUBindGroupLayout(key, this[inner].getBindGroupLayout(index));
    }
}

export class GPUPipelineLayout implements globalThis.GPUPipelineLayout {
    [inner]: gfx.GpuPipelineLayout;

    constructor(k: symbol, i: gfx.GpuPipelineLayout) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand(): 'GPUPipelineLayout' {
        return "GPUPipelineLayout";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }
}

export class GPURenderPipeline implements globalThis.GPURenderPipeline {
    [inner]: gfx.GpuRenderPipeline;

    constructor(k: symbol, i: gfx.GpuRenderPipeline) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand(): 'GPURenderPipeline' {
        return "GPURenderPipeline";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }
    getBindGroupLayout(index: number): GPUBindGroupLayout {
        return new GPUBindGroupLayout(key, this[inner].getBindGroupLayout(index));
    }
}

export class GPUBuffer implements globalThis.GPUBuffer {
    [inner]: gfx.GpuBuffer;
    _mappedRangeBuffer: Uint8Array | undefined;
    _mappedRangeOffset: bigint | undefined;
    _mappedRangeSize: bigint | undefined;

    constructor(k: symbol, i: gfx.GpuBuffer) {
        privateConstructorCalled(k);
        this[inner] = i;
    }

    get __brand(): 'GPUBuffer' {
        return "GPUBuffer";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }

    get size(): GPUSize64Out {
        return Number(this[inner].size());
    }

    get usage(): GPUFlagsConstant {
        return this[inner].usage();
    }

    get mapState(): GPUBufferMapState {
        return this[inner].mapState();
    }

    async mapAsync(
        mode: GPUMapModeFlags,
        offset?: GPUSize64,
        size?: GPUSize64
    ): Promise<undefined> {
        this[inner].mapAsync(mode, numToBigIntOptional(offset), numToBigIntOptional(size));
    }

    getMappedRange(
        offset?: GPUSize64,
        size?: GPUSize64
    ): ArrayBuffer {
        this._mappedRangeBuffer = this[inner].getMappedRangeGetWithCopy(numToBigIntOptional(offset), numToBigIntOptional(size));
        this._mappedRangeOffset = numToBigIntOptional(offset);
        this._mappedRangeSize = numToBigIntOptional(size);
        return this._mappedRangeBuffer.buffer;
    }

    unmap(): undefined {
        if (!this._mappedRangeBuffer) {
            throw new Todo();
        }
        this[inner].getMappedRangeSetWithCopy(this._mappedRangeBuffer, this._mappedRangeOffset, this._mappedRangeSize);
        this._mappedRangeBuffer = undefined;
        this._mappedRangeOffset = undefined;
        this._mappedRangeSize = undefined;
        this[inner].unmap();
    }

    destroy(): undefined {
        this[inner].destroy();
    }
}

export class GPUQueue implements globalThis.GPUQueue {
    [inner]: gfx.GpuQueue;

    constructor(k: symbol, i: gfx.GpuQueue) {
        privateConstructorCalled(k);
        this[inner] = i;
    }

    get __brand(): 'GPUQueue' {
        return "GPUQueue";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }

    submit(commandBuffers: Iterable<GPUCommandBuffer>): undefined {
        this[inner].submit(Array.from(commandBuffers).map((cb) => cb[inner]));
    }

    onSubmittedWorkDone(): Promise<undefined> {
        throw new Todo();
    }

    writeBuffer(
        buffer: GPUBuffer,
        bufferOffset: GPUSize64,
        data: ArrayBufferView | ArrayBuffer | SharedArrayBuffer,
        dataOffset?: GPUSize64,
        size?: GPUSize64
    ): undefined {
        this[inner].writeBufferWithCopy(
            buffer[inner],
            BigInt(bufferOffset),
            convertBufferToUint8Array(data),
            numToBigIntOptional(dataOffset),
            numToBigIntOptional(size)
        );
    }

    writeTexture(
        destination: GPUTexelCopyTextureInfo,
        data: ArrayBufferView | ArrayBuffer | SharedArrayBuffer,
        dataLayout: GPUTexelCopyBufferLayout,
        size: GPUExtent3D
    ): undefined {
        let destinationTexture = (destination.texture as GPUTexture)[inner];
        let destinationOrigin: gfx.GpuOrigin3D | undefined;
        if(destination.origin) {
            destinationOrigin = convertOrigin3DWebToWasi(destination.origin);
        }
        this[inner].writeTextureWithCopy(
            {
                ...destination,
                texture: destinationTexture,
                origin: destinationOrigin,
            },
            convertBufferToUint8Array(data),
            {
                ...dataLayout,
                offset: numToBigIntOptional(dataLayout.offset)
            },
            convertExtent3DWebToWasi(size)
        );
    }

    copyExternalImageToTexture(
        source: GPUCopyExternalImageSourceInfo,
        destination: GPUCopyExternalImageDestInfo,
        copySize: GPUExtent3D
    ): undefined {
        throw new Todo();
    }
}

export class GPUBindGroupLayout implements globalThis.GPUBindGroupLayout {
    [inner]: gfx.GpuBindGroupLayout;

    constructor(k: symbol, i: gfx.GpuBindGroupLayout) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand(): 'GPUBindGroupLayout' {
        return "GPUBindGroupLayout";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }
}

export class GPUBindGroup implements globalThis.GPUBindGroup {
    [inner]: gfx.GpuBindGroup;

    constructor(k: symbol, i: gfx.GpuBindGroup) {
        privateConstructorCalled(k);
        this[inner] = i;
    }

    get __brand(): 'GPUBindGroup' {
        return "GPUBindGroup";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }
}

export class GPUSampler implements globalThis.GPUSampler {
    [inner]: gfx.GpuSampler;

    constructor(k: symbol, i: gfx.GpuSampler) {
        privateConstructorCalled(k);
        this[inner] = i;
    }

    get __brand(): 'GPUSampler' {
        return "GPUSampler";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }
}

export class GPUTextureView implements globalThis.GPUTextureView {
    [inner]: gfx.GpuTextureView;

    constructor(k: symbol, i: gfx.GpuTextureView) {
        privateConstructorCalled(k);
        this[inner] = i;
    }

    get __brand(): 'GPUTextureView' {
        return "GPUTextureView";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }
}

export class GPUTexture implements globalThis.GPUTexture {
    [inner]: gfx.GpuTexture;

    constructor(k: symbol, i: gfx.GpuTexture) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand(): 'GPUTexture' {
        return "GPUTexture";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }
    get width(): number {
        return this[inner].width();
    }
    get height(): number {
        return this[inner].height();
    }
    get depthOrArrayLayers(): number {
        return this[inner].depthOrArrayLayers();
    }
    get mipLevelCount(): number {
        return this[inner].mipLevelCount();
    }
    get sampleCount(): number {
        return this[inner].sampleCount();
    }
    get dimension(): GPUTextureDimension {
        return convertTextureDimensionWasiToWeb(this[inner].dimension());
    }
    get format(): GPUTextureFormat {
        return convertTextureFormatWasiToWeb(this[inner].format());
    }
    get usage(): number {
        return this[inner].usage();
    }
    createView(descriptor?: GPUTextureViewDescriptor): globalThis.GPUTextureView {
        let gfxDescriptor: gfx.GpuTextureViewDescriptor | undefined;
        if (descriptor) {
            let format: gfx.GpuTextureFormat | undefined;
            if (descriptor.format)
                format = convertTextureFormatWebToWasi(descriptor.format);
            let dimension: gfx.GpuTextureViewDimension | undefined;
            if (descriptor.dimension)
                dimension = convertTextureViewDimensionWebToWasi(descriptor.dimension);
            gfxDescriptor = {
                ...descriptor,
                dimension,
                format,
            };
        }
        return new GPUTextureView(key, this[inner].createView(gfxDescriptor));
    }
    destroy(): undefined {
        this[inner].destroy();
    }
}

export class GPUCommandEncoder implements globalThis.GPUCommandEncoder {
    [inner]: gfx.GpuCommandEncoder;

    constructor(k: symbol, i: gfx.GpuCommandEncoder) {
        privateConstructorCalled(k);
        this[inner] = i;
    }

    get __brand(): 'GPUCommandEncoder' {
        return "GPUCommandEncoder";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }
    beginRenderPass(descriptor: GPURenderPassDescriptor): GPURenderPassEncoder {
        let colorAttachments: (gfx.GpuRenderPassColorAttachment | undefined)[] = Array.from(descriptor.colorAttachments).map(colorAttachment => {
            let resolveTarget: gfx.GpuTextureView | undefined;
            if (colorAttachment?.resolveTarget)
                resolveTarget = (colorAttachment.resolveTarget as GPUTextureView)[inner];
            let clearValue: gfx.GpuColor | undefined;
            if (colorAttachment?.clearValue)
                clearValue = convertColorWebToWasi(colorAttachment.clearValue);
            if (colorAttachment) {
                return {
                    ...colorAttachment,
                    view: (colorAttachment.view as GPUTextureView)[inner],
                    resolveTarget,
                    clearValue,
                }
            } else {
                return undefined;
            }
        });
        return new GPURenderPassEncoder(key, this[inner].beginRenderPass({
            colorAttachments
        }));
    }
    beginComputePass(descriptor?: GPUComputePassDescriptor): GPUComputePassEncoder {
        let timestampWrites: gfx.GpuComputePassTimestampWrites | undefined;
        if (descriptor?.timestampWrites) {
            timestampWrites = {
                ...timestampWrites,
                querySet: (descriptor.timestampWrites.querySet as GPUQuerySet)[inner],
            }
        }
        return new GPUComputePassEncoder(key, this[inner].beginComputePass({
            ...descriptor,
            timestampWrites,
        }));
    }
    copyBufferToBuffer(source: GPUBuffer, sourceOffset: GPUSize64, destination: GPUBuffer, destinationOffset: GPUSize64, size: GPUSize64): undefined {
        this[inner].copyBufferToBuffer(source[inner], BigInt(sourceOffset), destination[inner], BigInt(destinationOffset), BigInt(size));
    }
    copyBufferToTexture(source: GPUTexelCopyBufferInfo, destination: GPUTexelCopyTextureInfo, copySize: GPUExtent3D): undefined {
        let destinationOrigin: gfx.GpuOrigin3D | undefined;
        if(destination.origin)
            destinationOrigin = convertOrigin3DWebToWasi(destination.origin);
        this[inner].copyBufferToTexture(
            {
                ...source,
                buffer: (source.buffer as GPUBuffer)[inner],
                offset: numToBigIntOptional(source.offset)
            },
            {
                ...destination,
                texture: (destination.texture as GPUTexture)[inner],
                origin: destinationOrigin,
            },
            convertExtent3DWebToWasi(copySize)
        );
    }
    copyTextureToBuffer(source: GPUTexelCopyTextureInfo, destination: GPUTexelCopyBufferInfo, copySize: GPUExtent3D): undefined {
        let sourceOrigin: gfx.GpuOrigin3D | undefined;
        if(source.origin)
            sourceOrigin = convertOrigin3DWebToWasi(source.origin);
        this[inner].copyTextureToBuffer(
            {
                ...source,
                texture: (source.texture as GPUTexture)[inner],
                origin: sourceOrigin
            },
            {
                ...destination,
                buffer: (destination.buffer as GPUBuffer)[inner],
                offset: numToBigIntOptional(destination.offset),
            },
            convertExtent3DWebToWasi(copySize)
        );
    }
    copyTextureToTexture(source: GPUTexelCopyTextureInfo, destination: GPUTexelCopyTextureInfo, copySize: GPUExtent3D): undefined {
        let sourceOrigin: gfx.GpuOrigin3D | undefined;
        if(source.origin)
            sourceOrigin = convertOrigin3DWebToWasi(source.origin);
        let destinationOrigin: gfx.GpuOrigin3D | undefined;
        if(destination.origin)
            destinationOrigin = convertOrigin3DWebToWasi(destination.origin);
        this[inner].copyTextureToTexture(
            {
                ...source,
                texture: (source.texture as GPUTexture)[inner],
                origin: sourceOrigin
            },
            {
                ...destination,
                texture: (destination.texture as GPUTexture)[inner],
                origin: destinationOrigin,
            },
            convertExtent3DWebToWasi(copySize)
        );
    }
    clearBuffer(buffer: GPUBuffer, offset?: GPUSize64, size?: GPUSize64): undefined {
        this[inner].clearBuffer(
            buffer[inner],
            numToBigIntOptional(offset),
            numToBigIntOptional(size),
        );
    }
    resolveQuerySet(querySet: GPUQuerySet, firstQuery: GPUSize32, queryCount: GPUSize32, destination: globalThis.GPUBuffer, destinationOffset: GPUSize64): undefined {
        this[inner].resolveQuerySet((querySet as GPUQuerySet)[inner], firstQuery, queryCount, (destination as GPUBuffer)[inner], BigInt(destinationOffset));
    }
    finish(descriptor?: GPUCommandBufferDescriptor): GPUCommandBuffer {
        return new GPUCommandBuffer(key, this[inner].finish(descriptor));
    }
    pushDebugGroup(groupLabel: string): undefined {
        this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup(): undefined {
        this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel: string): undefined {
        this[inner].insertDebugMarker(markerLabel);
    }
}

export class GPUComputePassEncoder implements globalThis.GPUComputePassEncoder {
    [inner]: gfx.GpuComputePassEncoder;

    constructor(k: symbol, i: gfx.GpuComputePassEncoder) {
        privateConstructorCalled(k);
        this[inner] = i;
    }

    get __brand(): 'GPUComputePassEncoder' {
        return "GPUComputePassEncoder";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }
    setPipeline(pipeline: GPUComputePipeline): undefined {
        this[inner].setPipeline(pipeline[inner]);
    }
    dispatchWorkgroups(workgroupCountX: GPUSize32, workgroupCountY?: GPUSize32, workgroupCountZ?: GPUSize32): undefined {
        this[inner].dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ);
    }
    dispatchWorkgroupsIndirect(indirectBuffer: GPUBuffer, indirectOffset: GPUSize64): undefined {
        this[inner].dispatchWorkgroupsIndirect(indirectBuffer[inner], BigInt(indirectOffset));
    }
    end(): undefined {
        this[inner].end();
    }
    pushDebugGroup(groupLabel: string): undefined {
        this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup(): undefined {
        this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel: string): undefined {
        this[inner].insertDebugMarker(markerLabel);
    }

    setBindGroup(index: GPUIndex32, bindGroup: GPUBindGroup | null, dynamicOffsetsData?: Iterable<GPUBufferDynamicOffset> | Uint32Array, dynamicOffsetsDataStart?: GPUSize64, dynamicOffsetsDataLength?: GPUSize32): undefined {
        let bindGroupGfx: gfx.GpuBindGroup | undefined;
        if (bindGroup)
            bindGroupGfx = bindGroup[inner];
        if ((dynamicOffsetsData === undefined || dynamicOffsetsData[Symbol.iterator]) && dynamicOffsetsDataStart === undefined && dynamicOffsetsDataLength === undefined) {
            let dynamicOffsetsDataGfx: Uint32Array | undefined;
            if (dynamicOffsetsData) {
                if (dynamicOffsetsData instanceof Uint32Array) {
                    dynamicOffsetsDataGfx = dynamicOffsetsData;
                } else {
                    dynamicOffsetsDataGfx = new Uint32Array(dynamicOffsetsData);
                }
            }
            this[inner].setBindGroup(index, bindGroupGfx, dynamicOffsetsDataGfx, dynamicOffsetsDataStart, dynamicOffsetsDataLength);
        } else if (dynamicOffsetsData instanceof Uint32Array && typeof dynamicOffsetsDataStart === "number" && typeof dynamicOffsetsDataLength === "number") {
            this[inner].setBindGroup(index, bindGroupGfx, dynamicOffsetsData, BigInt(dynamicOffsetsDataStart), dynamicOffsetsDataLength);
        } else {
            throw new Todo;
        }
    }
}

export class GPURenderPassEncoder implements globalThis.GPURenderPassEncoder {
    [inner]: gfx.GpuRenderPassEncoder;

    constructor(k: symbol, i: gfx.GpuRenderPassEncoder) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand(): 'GPURenderPassEncoder' {
        return "GPURenderPassEncoder";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }
    setViewport(x: number, y: number, width: number, height: number, minDepth: number, maxDepth: number): undefined {
        this[inner].setViewport(x, y, width, height, minDepth, maxDepth);
    }
    setScissorRect(x: GPUIntegerCoordinate, y: GPUIntegerCoordinate, width: GPUIntegerCoordinate, height: GPUIntegerCoordinate): undefined {
        this[inner].setScissorRect(x, y, width, height);
    }
    setBlendConstant(color: GPUColor): undefined {
        this[inner].setBlendConstant(convertColorWebToWasi(color));
    }
    setStencilReference(reference: GPUStencilValue): undefined {
        this[inner].setStencilReference(reference);
    }
    beginOcclusionQuery(queryIndex: GPUSize32): undefined {
        this[inner].beginOcclusionQuery(queryIndex);
    }
    endOcclusionQuery(): undefined {
        this[inner].endOcclusionQuery();
    }
    executeBundles(bundles: Iterable<GPURenderBundle>): undefined {
        this[inner].executeBundles(Array.from(bundles).map(bundle => (bundle as GPURenderBundle)[inner]));
    }
    end(): undefined {
        this[inner].end();
    }
    pushDebugGroup(groupLabel: string): undefined {
        this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup(): undefined {
        this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel: string): undefined {
        this[inner].insertDebugMarker(markerLabel);
    }
    setBindGroup(index: unknown, bindGroup: unknown, dynamicOffsetsData?: unknown, dynamicOffsetsDataStart?: unknown, dynamicOffsetsDataLength?: unknown): undefined {
        throw new Todo;
    }
    setPipeline(pipeline: GPURenderPipeline): undefined {
        this[inner].setPipeline((pipeline as GPURenderPipeline)[inner]);
    }
    setIndexBuffer(buffer: GPUBuffer, indexFormat: GPUIndexFormat, offset?: GPUSize64, size?: GPUSize64): undefined {
        this[inner].setIndexBuffer(
            buffer[inner],
            indexFormat,
            numToBigIntOptional(offset),
            numToBigIntOptional(size),
        );
    }
    setVertexBuffer(slot: GPUIndex32, buffer: GPUBuffer | null, offset?: GPUSize64, size?: GPUSize64): undefined {
        let gfxBuffer: gfx.GpuBuffer | undefined;
        if (buffer)
            gfxBuffer = buffer[inner];
        this[inner].setVertexBuffer(
            slot,
            gfxBuffer,
            numToBigIntOptional(offset),
            numToBigIntOptional(size)
        );
    }
    draw(vertexCount: GPUSize32, instanceCount?: GPUSize32, firstVertex?: GPUSize32, firstInstance?: GPUSize32): undefined {
        this[inner].draw(vertexCount, instanceCount, firstVertex, firstInstance);
    }
    drawIndexed(indexCount: GPUSize32, instanceCount?: GPUSize32, firstIndex?: GPUSize32, baseVertex?: GPUSignedOffset32, firstInstance?: GPUSize32): undefined {
        this[inner].drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance);
    }
    drawIndirect(indirectBuffer: GPUBuffer, indirectOffset: GPUSize64): undefined {
        this[inner].drawIndirect(indirectBuffer[inner], BigInt(indirectOffset));
    }
    drawIndexedIndirect(indirectBuffer: GPUBuffer, indirectOffset: GPUSize64): undefined {
        this[inner].drawIndexedIndirect(indirectBuffer[inner], BigInt(indirectOffset));
    }
}

export class GPUQuerySet implements globalThis.GPUQuerySet {
    [inner]: gfx.GpuQuerySet;

    constructor(k: symbol, i: gfx.GpuQuerySet) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    destroy(): undefined {
        this[inner].destroy();
    }
    get __brand(): 'GPUQuerySet' {
        return "GPUQuerySet";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }

    get type(): GPUQueryType {
        return this[inner].type();
    }
    get count(): number {
        return this[inner].count();
    }
}

export class GPUCommandBuffer implements globalThis.GPUCommandBuffer {
    [inner]: gfx.GpuCommandBuffer;

    constructor(k: symbol, i: gfx.GpuCommandBuffer) {
        privateConstructorCalled(k);
        this[inner] = i;
    }

    get __brand(): 'GPUCommandBuffer' {
        return "GPUCommandBuffer";
    }
    get label(): string {
        return this[inner].label();
    }
    set label(value: string) {
        this[inner].setLabel(value);
    }
}

export function getGpu() {
    return new GPU(key, gfx.getGpu());
}

// constants
export const GPUBufferUsage = {
    MAP_READ: 0x0001,
    MAP_WRITE: 0x0002,
    COPY_SRC: 0x0004,
    COPY_DST: 0x0008,
    INDEX: 0x0010,
    VERTEX: 0x0020,
    UNIFORM: 0x0040,
    STORAGE: 0x0080,
    INDIRECT: 0x0100,
    QUERY_RESOLVE: 0x0200,
};

export const GPUMapMode = {
    READ: 0x0001,
    WRITE: 0x0002,
};

export const GPUTextureUsage = {
    COPY_SRC: 0x01,
    COPY_DST: 0x02,
    TEXTURE_BINDING: 0x04,
    STORAGE_BINDING: 0x08,
    RENDER_ATTACHMENT: 0x10,
};

export const GPUShaderStage = {
    VERTEX: 0x1,
    FRAGMENT: 0x2,
    COMPUTE: 0x4,
};

export const GPUColorWrite = {
    RED: 0x1,
    GREEN: 0x2,
    BLUE: 0x4,
    ALPHA: 0x8,
    ALL: 0xF,
};
