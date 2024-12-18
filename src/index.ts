import * as gfx from 'wasi:webgpu/webgpu';
import * as wasiSurface from 'wasi:webgpu/surface';
import * as wasiGraphicsContext from 'wasi:webgpu/graphics-context';

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

function convertTextureViewDimensionWebToWasi(name: GPUTextureViewDimension): gfx.GpuTextureViewDimension {
    name = name.toLowerCase() as GPUTextureViewDimension;
    switch (name) {
        case "1d":
            return "d1"
        case "2d":
            return "d3"
        case "3d":
            return "d3"
        case "2d-array":
            return "d2-array"
        default:
            return name;
    }
}

function convertTextureViewDimensionWasiToWeb(name: gfx.GpuTextureViewDimension): GPUTextureViewDimension {
    switch (name) {
        case "d1":
            return "1d"
        case "d2":
            return "3d"
        case "d3":
            return "3d"
        case "d2-array":
            return "2d-array"
        default:
            return name;
    }
}

function convertGpuLayoutWebToWasi(layout: GPUAutoLayoutMode | globalThis.GPUPipelineLayout): gfx.GpuLayout {
    if (layout instanceof GPUPipelineLayout) {
        return {
            tag: 'gpu-pipeline-layout',
            val: layout[inner],
        }
    } else if (typeof layout === 'string') {
        return {
            tag: 'gpu-auto-layout-mode',
            val: layout,
        }
    } else {
        throw new Unreachable;
    }
}

function convertColorWebToWasi(color: globalThis.GPUColor): gfx.GpuColor {
    // https://www.w3.org/TR/webgpu/#colors-and-vectors
    if (Symbol.iterator in color) {
        const iter = color[Symbol.iterator]();
        const r = iter.next().value;
        const g = iter.next().value;
        const b = iter.next().value;
        const a = iter.next().value;
        if (r === undefined || g === undefined || b === undefined || a === undefined)
            throw new TypeError("color must have exactly 4 items");
        return {
            r, g, b, a,
        }
    } else {
        return color;
    }
}

function convertGpuLayoutWasiToWeb(layout: gfx.GpuLayout): GPUPipelineLayout | GPUAutoLayoutMode {
    throw new Todo;
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

// When forwarding a method to gfx.[type].[method], always pass down objects (like `...descriptor`) so that if new fields are added tsc can catch it.

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

        // giving the even loop a chance to do other work before blocking.
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
        throw new Todo();
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
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
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
        throw new Todo();
    }

    createBuffer(descriptor: GPUBufferDescriptor): GPUBuffer {
        return new GPUBuffer(key, this[inner].createBuffer({
            ...descriptor,
            size: BigInt(descriptor.size),
        }));
    }

    createTexture(_descriptor: GPUTextureDescriptor): GPUTexture {
        throw new Todo();
    }

    createSampler(_descriptor: any = {}): GPUSampler {
        throw new Todo();
    }

    createBindGroupLayout(_descriptor: GPUBindGroupLayoutDescriptor): GPUBindGroupLayout {
        throw new Todo();
    }

    createPipelineLayout(_descriptor: GPUPipelineLayoutDescriptor): GPUPipelineLayout {
        throw new Todo();
    }

    createBindGroup(descriptor: GPUBindGroupDescriptor): GPUBindGroup {
        return new GPUBindGroup(key, this[inner].createBindGroup({
            ...descriptor,
            entries: Array.from(descriptor.entries).map(entry => {
                resource:
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
                let layout: gfx.GpuLayout | undefined;
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
        throw new Todo();
    }

    createQuerySet(descriptor: GPUQuerySetDescriptor): GPUQuerySet {
        throw new Todo();
    }

    pushErrorScope(filter: GPUErrorFilter): undefined {
        throw new Todo();
    }

    async popErrorScope(): Promise<GPUError | null> {
        throw new Todo();
    }

    importExternalTexture(descriptor: GPUExternalTextureDescriptor): GPUExternalTexture {
        throw new Todo;
    }
    onuncapturederror: ((this: globalThis.GPUDevice, ev: GPUUncapturedErrorEvent) => any) | null = null;
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
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
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
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
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
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
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
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
    }
    getBindGroupLayout(index: number): globalThis.GPUBindGroupLayout {
        throw new Todo;
    }
}

export class GPUBuffer implements globalThis.GPUBuffer {
    [inner]: gfx.GpuBuffer;

    constructor(k: symbol, i: gfx.GpuBuffer) {
        privateConstructorCalled(k);
        this[inner] = i;
    }

    get __brand(): 'GPUBuffer' {
        return "GPUBuffer";
    }
    get label(): string {
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
    }

    get size(): GPUSize64Out {
        return Number(this[inner].size());
    }

    get usage(): GPUFlagsConstant {
        throw new Todo();
    }

    get mapState(): GPUBufferMapState {
        throw new Todo();
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
        const buffer = this[inner].getMappedRange(numToBigIntOptional(offset), numToBigIntOptional(size));
        // TODO: do we need to proxy the ArrayBuffer for setters?
        return buffer.get().buffer;
    }

    unmap(): undefined {
        this[inner].unmap();
    }

    destroy(): undefined {
        throw new Todo();
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
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
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
        let dataOffsetBigInt: bigint | undefined;
        if (typeof dataOffset === "number") {
            dataOffsetBigInt = BigInt(dataOffset);
        }
        let sizeBigInt: bigint | undefined;
        if (typeof size === "number") {
            sizeBigInt = BigInt(size);
        }
        let dataArray: Uint8Array;
        if (
            data instanceof Int8Array
            || data instanceof Int16Array
            || data instanceof Int32Array
            || data instanceof Uint8Array
            || data instanceof Uint16Array
            || data instanceof Uint32Array
            || data instanceof Uint8ClampedArray
            || data instanceof BigInt64Array
            || data instanceof BigUint64Array
            || data instanceof Float32Array
            || data instanceof Float64Array
        ) {
            dataArray = new Uint8Array(data.buffer);
        } else if (data instanceof DataView) {
            throw new Todo();
        } else if (data instanceof ArrayBuffer) {
            throw new Todo();
        } else if (data instanceof SharedArrayBuffer) {
            throw new Todo();
        } else {
            throw new Unreachable;
        }

        this[inner].writeBuffer(buffer[inner], BigInt(bufferOffset), dataOffsetBigInt, dataArray, sizeBigInt);
    }

    writeTexture(
        destination: GPUTexelCopyTextureInfo,
        data: BufferSource | SharedArrayBuffer,
        dataLayout: GPUTexelCopyBufferLayout,
        size: GPUExtent3DStrict
    ): undefined {
        throw new Todo();
    }

    copyExternalImageToTexture(
        source: GPUCopyExternalImageSourceInfo,
        destination: GPUCopyExternalImageDestInfo,
        copySize: GPUExtent3DStrict
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
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
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
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
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
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
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
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
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
        throw new Todo;
    }
    set label(value: string) {
        throw new Todo;
    }
    get width(): number {
        throw new Todo;
    }
    get height(): number {
        throw new Todo;
    }
    get depthOrArrayLayers(): number {
        throw new Todo;
    }
    get mipLevelCount(): number {
        throw new Todo;
    }
    get sampleCount(): number {
        throw new Todo;
    }
    get dimension(): GPUTextureDimension {
        throw new Todo;
    }
    get format(): GPUTextureFormat {
        throw new Todo;
    }
    get usage(): number {
        throw new Todo;
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
        throw new Todo;
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
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
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
    copyBufferToTexture(source: GPUTexelCopyBufferInfo, destination: GPUTexelCopyTextureInfo, copySize: GPUExtent3DStrict): undefined {
        throw new Todo;
    }
    copyTextureToBuffer(source: GPUTexelCopyTextureInfo, destination: GPUTexelCopyBufferInfo, copySize: GPUExtent3DStrict): undefined {
        throw new Todo;
    }
    copyTextureToTexture(source: GPUTexelCopyTextureInfo, destination: GPUTexelCopyTextureInfo, copySize: GPUExtent3DStrict): undefined {
        throw new Todo;
    }
    clearBuffer(buffer: globalThis.GPUBuffer, offset?: GPUSize64, size?: GPUSize64): undefined {
        throw new Todo;
    }
    resolveQuerySet(querySet: GPUQuerySet, firstQuery: GPUSize32, queryCount: GPUSize32, destination: globalThis.GPUBuffer, destinationOffset: GPUSize64): undefined {
        throw new Todo;
    }
    finish(descriptor?: GPUCommandBufferDescriptor): GPUCommandBuffer {
        return new GPUCommandBuffer(key, this[inner].finish(descriptor));
    }
    pushDebugGroup(groupLabel: string): undefined {
        throw new Todo;
    }
    popDebugGroup(): undefined {
        throw new Todo;
    }
    insertDebugMarker(markerLabel: string): undefined {
        throw new Todo;
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
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
    }
    setPipeline(pipeline: globalThis.GPUComputePipeline): undefined {
        this[inner].setPipeline((pipeline as GPUComputePipeline)[inner]);
    }
    dispatchWorkgroups(workgroupCountX: GPUSize32, workgroupCountY?: GPUSize32, workgroupCountZ?: GPUSize32): undefined {
        this[inner].dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ);
    }
    dispatchWorkgroupsIndirect(indirectBuffer: globalThis.GPUBuffer, indirectOffset: GPUSize64): undefined {
        throw new Todo;
    }
    end(): undefined {
        this[inner].end();
    }
    pushDebugGroup(groupLabel: string): undefined {
        throw new Todo;
    }
    popDebugGroup(): undefined {
        throw new Todo;
    }
    insertDebugMarker(markerLabel: string): undefined {
        throw new Todo;
    }

    // function overloading:
    // setBindGroup(index: GPUIndex32, bindGroup: GPUBindGroup | null, dynamicOffsets?: Iterable<GPUBufferDynamicOffset>): undefined;
    // setBindGroup(index: GPUIndex32, bindGroup: GPUBindGroup | null, dynamicOffsetsData: Uint32Array, dynamicOffsetsDataStart: GPUSize64, dynamicOffsetsDataLength: GPUSize32): undefined;
    setBindGroup(index: GPUIndex32, bindGroup: GPUBindGroup | null, dynamicOffsetsData?: Iterable<GPUBufferDynamicOffset> | Uint32Array, dynamicOffsetsDataStart?: GPUSize64, dynamicOffsetsDataLength?: GPUSize32): undefined {
        let bindGroupGfx: gfx.GpuBindGroup | undefined;
        if (bindGroup)
            bindGroupGfx = bindGroup[inner];
        if ((dynamicOffsetsData === undefined || dynamicOffsetsData[Symbol.iterator]) && dynamicOffsetsDataStart === undefined && dynamicOffsetsDataLength === undefined) {
            let dynamicOffsetsDataGfx: Uint32Array | undefined;
            if (dynamicOffsetsData)
                throw new Todo;
            this[inner].setBindGroup(index, bindGroupGfx, dynamicOffsetsDataGfx);
        } else if (dynamicOffsetsData instanceof Uint32Array && typeof dynamicOffsetsDataStart === "number" && typeof dynamicOffsetsDataLength === "number") {
            this[inner].setBindGroup(index, bindGroupGfx, dynamicOffsetsData);
        } else {
            throw new Error("Invalid functions arguments passed to setBindGroup");
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
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
    }
    setViewport(x: number, y: number, width: number, height: number, minDepth: number, maxDepth: number): undefined {
        throw new Todo;
    }
    setScissorRect(x: GPUIntegerCoordinate, y: GPUIntegerCoordinate, width: GPUIntegerCoordinate, height: GPUIntegerCoordinate): undefined {
        throw new Todo;
    }
    setBlendConstant(color: GPUColor): undefined {
        throw new Todo;
    }
    setStencilReference(reference: GPUStencilValue): undefined {
        throw new Todo;
    }
    beginOcclusionQuery(queryIndex: GPUSize32): undefined {
        throw new Todo;
    }
    endOcclusionQuery(): undefined {
        throw new Todo;
    }
    executeBundles(bundles: Iterable<GPURenderBundle>): undefined {
        throw new Todo;
    }
    end(): undefined {
        this[inner].end();
    }
    pushDebugGroup(groupLabel: string): undefined {
        throw new Todo;
    }
    popDebugGroup(): undefined {
        throw new Todo;
    }
    insertDebugMarker(markerLabel: string): undefined {
        throw new Todo;
    }
    setBindGroup(index: unknown, bindGroup: unknown, dynamicOffsetsData?: unknown, dynamicOffsetsDataStart?: unknown, dynamicOffsetsDataLength?: unknown): undefined {
        throw new Todo;
    }
    setPipeline(pipeline: globalThis.GPURenderPipeline): undefined {
        this[inner].setPipeline((pipeline as GPURenderPipeline)[inner]);
    }
    setIndexBuffer(buffer: globalThis.GPUBuffer, indexFormat: GPUIndexFormat, offset?: GPUSize64, size?: GPUSize64): undefined {
        throw new Todo;
    }
    setVertexBuffer(slot: GPUIndex32, buffer: globalThis.GPUBuffer | null, offset?: GPUSize64, size?: GPUSize64): undefined {
        throw new Todo;
    }
    draw(vertexCount: GPUSize32, instanceCount?: GPUSize32, firstVertex?: GPUSize32, firstInstance?: GPUSize32): undefined {
        this[inner].draw(vertexCount, instanceCount, firstVertex, firstInstance);
    }
    drawIndexed(indexCount: GPUSize32, instanceCount?: GPUSize32, firstIndex?: GPUSize32, baseVertex?: GPUSignedOffset32, firstInstance?: GPUSize32): undefined {
        throw new Todo;
    }
    drawIndirect(indirectBuffer: globalThis.GPUBuffer, indirectOffset: GPUSize64): undefined {
        throw new Todo;
    }
    drawIndexedIndirect(indirectBuffer: globalThis.GPUBuffer, indirectOffset: GPUSize64): undefined {
        throw new Todo;
    }
}

export class GPUQuerySet implements globalThis.GPUQuerySet {
    [inner]: gfx.GpuQuerySet;

    constructor(k: symbol, i: gfx.GpuQuerySet) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    destroy(): undefined {
        throw new Todo();
    }
    get __brand(): 'GPUQuerySet' {
        return "GPUQuerySet";
    }
    get label(): string {
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
    }

    get type(): GPUQueryType {
        throw new Todo();
    }
    get count(): number {
        throw new Todo();
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
        throw new Todo();
    }
    set label(value: string) {
        throw new Todo();
    }
}

export function getGpu() {
    // @ts-ignore - TODO: figure out why TypeScript doesn't recognize gfx.getGpu
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
