import * as gfx from 'wasi:webgpu/webgpu';
import * as wasiSurface from 'wasi:webgpu/surface';
import * as wasiGraphicsContext from 'wasi:webgpu/graphics-context';
export function createCanvas() {
    return new HTMLCanvasElement(key);
}
// https://dom.spec.whatwg.org/#interface-eventtarget
class EventTarget {
    addEventListener(type, callback, options) {
        throw new Todo;
    }
    dispatchEvent(event) {
        throw new Todo;
    }
    removeEventListener(type, callback, options) {
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
function privateConstructorCalled(k) {
    if (k !== key)
        throw new TypeError("Illegal constructor.");
}
// converters
function numToBigIntOptional(n) {
    if (n === undefined)
        return undefined;
    return BigInt(n);
}
function convertFeatureNameWebToWasi(name) {
    if (name === "texture-compression-bc-sliced-3d")
        return "texture-compression-bc-sliced3d";
    if (name === "texture-compression-astc-sliced-3d" || name === "float32-blendable")
        throw new Todo;
    return name;
}
function convertTextureFormatWebToWasi(name) {
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
function convertTextureFormatWasiToWeb(name) {
    switch (name) {
        case "astc4x4-unorm":
            return "astc-4x4-unorm";
        case "astc4x4-unorm-srgb":
            return "astc-4x4-unorm-srgb";
        case "astc5x4-unorm":
            return "astc-5x4-unorm";
        case "astc5x4-unorm-srgb":
            return "astc-5x4-unorm-srgb";
        case "astc5x5-unorm":
            return "astc-5x5-unorm";
        case "astc5x5-unorm-srgb":
            return "astc-5x5-unorm-srgb";
        case "astc6x5-unorm":
            return "astc-6x5-unorm";
        case "astc6x5-unorm-srgb":
            return "astc-6x5-unorm-srgb";
        case "astc6x6-unorm":
            return "astc-6x6-unorm";
        case "astc6x6-unorm-srgb":
            return "astc-6x6-unorm-srgb";
        case "astc8x5-unorm":
            return "astc-8x5-unorm";
        case "astc8x5-unorm-srgb":
            return "astc-8x5-unorm-srgb";
        case "astc8x6-unorm":
            return "astc-8x6-unorm";
        case "astc8x6-unorm-srgb":
            return "astc-8x6-unorm-srgb";
        case "astc8x8-unorm":
            return "astc-8x8-unorm";
        case "astc8x8-unorm-srgb":
            return "astc-8x8-unorm-srgb";
        case "astc10x5-unorm":
            return "astc-10x5-unorm";
        case "astc10x5-unorm-srgb":
            return "astc-10x5-unorm-srgb";
        case "astc10x6-unorm":
            return "astc-10x6-unorm";
        case "astc10x6-unorm-srgb":
            return "astc-10x6-unorm-srgb";
        case "astc10x8-unorm":
            return "astc-10x8-unorm";
        case "astc10x8-unorm-srgb":
            return "astc-10x8-unorm-srgb";
        case "astc10x10-unorm":
            return "astc-10x10-unorm";
        case "astc10x10-unorm-srgb":
            return "astc-10x10-unorm-srgb";
        case "astc12x10-unorm":
            return "astc-12x10-unorm";
        case "astc12x10-unorm-srgb":
            return "astc-12x10-unorm-srgb";
        case "astc12x12-unorm":
            return "astc-12x12-unorm";
        case "astc12x12-unorm-srgb":
            return "astc-12x12-unorm-srgb";
        default:
            return name;
    }
}
function convertVertexFormatWebToWasi(name) {
    switch (name) {
        case "unorm10-10-10-2":
            return "unorm1010102";
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
function convertVertexFormatWasiToWeb(name) {
    switch (name) {
        case "unorm1010102":
            return "unorm10-10-10-2";
        default:
            return name;
    }
}
function convertTextureViewDimensionWebToWasi(name) {
    name = name.toLowerCase();
    switch (name) {
        case "1d":
            return "d1";
        case "2d":
            return "d3";
        case "3d":
            return "d3";
        case "2d-array":
            return "d2-array";
        default:
            return name;
    }
}
function convertTextureViewDimensionWasiToWeb(name) {
    switch (name) {
        case "d1":
            return "1d";
        case "d2":
            return "3d";
        case "d3":
            return "3d";
        case "d2-array":
            return "2d-array";
        default:
            return name;
    }
}
function convertGpuLayoutWebToWasi(layout) {
    if (layout instanceof GPUPipelineLayout) {
        return {
            tag: 'gpu-pipeline-layout',
            val: layout[inner],
        };
    }
    else if (typeof layout === 'string') {
        return {
            tag: 'gpu-auto-layout-mode',
            val: layout,
        };
    }
    else {
        throw new Unreachable;
    }
}
function convertColorWebToWasi(color) {
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
        };
    }
    else {
        return color;
    }
}
function convertGpuLayoutWasiToWeb(layout) {
    throw new Todo;
}
function convertGpuBindingResourceWebToWasi(resource) {
    if (resource instanceof GPUSampler) {
        return {
            tag: 'gpu-sampler',
            val: resource[inner],
        };
    }
    else if (resource instanceof GPUTextureView) {
        throw new Todo;
    }
    else if (resource.buffer) {
        let bufferBinding = resource;
        let offsetBitInt;
        if (typeof bufferBinding.offset === "number")
            offsetBitInt = BigInt(bufferBinding.offset);
        let sizeBitInt;
        if (typeof bufferBinding.size === "number")
            sizeBitInt = BigInt(bufferBinding.size);
        return {
            tag: 'gpu-buffer-binding',
            val: {
                ...resource,
                size: sizeBitInt,
                offset: offsetBitInt,
                buffer: bufferBinding.buffer[inner],
            }
        };
    }
    else {
        throw new Unreachable;
    }
}
export class HTMLCanvasElement {
    _surface;
    _graphicsContext;
    #framePollable;
    get height() {
        return this._surface.height();
    }
    set height(value) {
        this._surface.requestSetSize(value, undefined);
    }
    get width() {
        return this._surface.width();
    }
    set width(value) {
        this._surface.requestSetSize(undefined, value);
    }
    constructor(k) {
        privateConstructorCalled(k);
        this._surface = new wasiSurface.Surface({});
        this._graphicsContext = new wasiGraphicsContext.Context();
        this._surface.connectGraphicsContext(this._graphicsContext);
    }
    getContext(contextId, options) {
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
    transferControlToOffscreen() {
        throw new Todo;
    }
    addEventListener(type, listener, options) {
        throw new Todo;
    }
    removeEventListener(type, listener, options) {
        throw new Todo;
    }
    dispatchEvent(event) {
        throw new Todo;
    }
    onclick = null;
    ondblclick = null;
    oninput = null;
    onkeydown = null;
    onkeyup = null;
    onpointerdown = null;
    onpointermove = null;
    onpointerup = null;
    cancelAnimationFrame(handle) {
        throw new Todo;
    }
    requestAnimationFrame(callback) {
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
export class GPUCanvasContext {
    #canvas;
    constructor(k, canvas) {
        privateConstructorCalled(k);
        this.#canvas = canvas;
    }
    __brand = "GPUCanvasContext";
    get canvas() {
        throw new Todo;
    }
    configure(configuration) {
        let device = configuration.device[inner];
        let context = this.#canvas._graphicsContext;
        device.connectGraphicsContext(context);
    }
    unconfigure() {
        throw new Todo;
    }
    getConfiguration() {
        throw new Todo;
    }
    getCurrentTexture() {
        const buffer = this.#canvas._graphicsContext.getCurrentBuffer();
        let texture = gfx.GpuTexture.fromGraphicsBuffer(buffer);
        return new GPUTexture(key, texture);
    }
}
export class GPU {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPU";
    }
    get wgslLanguageFeatures() {
        throw new Todo;
    }
    async requestAdapter(descriptor = {}) {
        const adapter = await this[inner].requestAdapter(descriptor);
        if (adapter)
            return new GPUAdapter(key, adapter);
        return null;
    }
    getPreferredCanvasFormat() {
        return convertTextureFormatWasiToWeb(this[inner].getPreferredCanvasFormat());
    }
}
export class GPUAdapter {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    async requestDevice(descriptor = {}) {
        let requiredFeatures;
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
    get __brand() {
        return "GPUAdapter";
    }
    get info() {
        throw new Todo();
    }
    get features() {
        throw new Todo();
    }
    get limits() {
        throw new Todo();
    }
    get isFallbackAdapter() {
        throw new Todo();
    }
}
export class GPUDevice extends EventTarget {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        super();
        this[inner] = i;
    }
    get __brand() {
        return "GPUDevice";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
    get lost() {
        throw new Todo();
    }
    get features() {
        throw new Todo();
    }
    get limits() {
        throw new Todo();
    }
    get queue() {
        return new GPUQueue(key, this[inner].queue());
    }
    get adapterInfo() {
        throw new Todo();
    }
    destroy() {
        throw new Todo();
    }
    createBuffer(descriptor) {
        return new GPUBuffer(key, this[inner].createBuffer({
            ...descriptor,
            size: BigInt(descriptor.size),
        }));
    }
    createTexture(_descriptor) {
        throw new Todo();
    }
    createSampler(_descriptor = {}) {
        throw new Todo();
    }
    createBindGroupLayout(_descriptor) {
        throw new Todo();
    }
    createPipelineLayout(_descriptor) {
        throw new Todo();
    }
    createBindGroup(descriptor) {
        return new GPUBindGroup(key, this[inner].createBindGroup({
            ...descriptor,
            entries: Array.from(descriptor.entries).map(entry => {
                resource: return {
                    ...entry,
                    resource: convertGpuBindingResourceWebToWasi(entry.resource),
                };
            }),
            layout: descriptor.layout[inner],
        }));
    }
    createShaderModule(descriptor) {
        let compilationHints;
        if (descriptor.compilationHints) {
            compilationHints = descriptor.compilationHints.map(hint => {
                let layout;
                if (hint.layout) {
                    layout = convertGpuLayoutWebToWasi(hint.layout);
                }
                return {
                    ...hint,
                    layout,
                };
            });
        }
        return new GPUShaderModule(key, this[inner].createShaderModule({
            ...descriptor,
            compilationHints,
        }));
    }
    createComputePipeline(descriptor) {
        let compute = {
            module: descriptor.compute.module[inner],
            entryPoint: descriptor.compute.entryPoint,
            constants: undefined, // TODO:
        };
        return new GPUComputePipeline(key, this[inner].createComputePipeline({
            ...descriptor,
            compute,
            layout: convertGpuLayoutWebToWasi(descriptor.layout),
        }));
    }
    createRenderPipeline(descriptor) {
        let buffers = undefined;
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
                            };
                        }),
                    };
                }
                else {
                    return undefined;
                }
            });
        }
        const vertex = {
            ...descriptor.vertex,
            constants: undefined, // TODO: 
            module: descriptor.vertex.module[inner],
            buffers,
        };
        let depthStencil;
        if (descriptor.depthStencil) {
            depthStencil = {
                ...descriptor.depthStencil,
                format: convertTextureFormatWebToWasi(descriptor.depthStencil.format),
            };
        }
        let fragment;
        if (descriptor.fragment) {
            fragment = {
                ...descriptor.fragment,
                constants: undefined, // TODO:
                module: descriptor.fragment.module[inner],
                targets: Array.from(descriptor.fragment.targets).map(target => {
                    if (target) {
                        return {
                            ...target,
                            format: convertTextureFormatWebToWasi(target.format),
                        };
                    }
                    else {
                        return undefined;
                    }
                }),
            };
        }
        return new GPURenderPipeline(key, this[inner].createRenderPipeline({
            ...descriptor,
            vertex,
            depthStencil,
            fragment,
            layout: convertGpuLayoutWebToWasi(descriptor.layout),
        }));
    }
    async createComputePipelineAsync(_descriptor) {
        throw new Todo();
    }
    async createRenderPipelineAsync(descriptor) {
        throw new Todo();
    }
    createCommandEncoder(descriptor = {}) {
        return new GPUCommandEncoder(key, this[inner].createCommandEncoder(descriptor));
    }
    createRenderBundleEncoder(descriptor) {
        throw new Todo();
    }
    createQuerySet(descriptor) {
        throw new Todo();
    }
    pushErrorScope(filter) {
        throw new Todo();
    }
    async popErrorScope() {
        throw new Todo();
    }
    importExternalTexture(descriptor) {
        throw new Todo;
    }
    onuncapturederror = null;
}
export class GPUShaderModule {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPUShaderModule";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
    getCompilationInfo() {
        throw new Todo();
    }
}
export class GPUComputePipeline {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPUComputePipeline";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
    getBindGroupLayout(index) {
        return new GPUBindGroupLayout(key, this[inner].getBindGroupLayout(index));
    }
}
export class GPUPipelineLayout {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPUPipelineLayout";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
}
export class GPURenderPipeline {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPURenderPipeline";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
    getBindGroupLayout(index) {
        throw new Todo;
    }
}
export class GPUBuffer {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPUBuffer";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
    get size() {
        return Number(this[inner].size());
    }
    get usage() {
        throw new Todo();
    }
    get mapState() {
        throw new Todo();
    }
    async mapAsync(mode, offset, size) {
        this[inner].mapAsync(mode, numToBigIntOptional(offset), numToBigIntOptional(size));
    }
    getMappedRange(offset, size) {
        const buffer = this[inner].getMappedRange(numToBigIntOptional(offset), numToBigIntOptional(size));
        // TODO: do we need to proxy the ArrayBuffer for setters?
        return buffer.get().buffer;
    }
    unmap() {
        this[inner].unmap();
    }
    destroy() {
        throw new Todo();
    }
}
export class GPUQueue {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPUQueue";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
    submit(commandBuffers) {
        this[inner].submit(Array.from(commandBuffers).map((cb) => cb[inner]));
    }
    onSubmittedWorkDone() {
        throw new Todo();
    }
    writeBuffer(buffer, bufferOffset, data, dataOffset, size) {
        let dataOffsetBigInt;
        if (typeof dataOffset === "number") {
            dataOffsetBigInt = BigInt(dataOffset);
        }
        let sizeBigInt;
        if (typeof size === "number") {
            sizeBigInt = BigInt(size);
        }
        let dataArray;
        if (data instanceof Int8Array
            || data instanceof Int16Array
            || data instanceof Int32Array
            || data instanceof Uint8Array
            || data instanceof Uint16Array
            || data instanceof Uint32Array
            || data instanceof Uint8ClampedArray
            || data instanceof BigInt64Array
            || data instanceof BigUint64Array
            || data instanceof Float32Array
            || data instanceof Float64Array) {
            dataArray = new Uint8Array(data.buffer);
        }
        else if (data instanceof DataView) {
            throw new Todo();
        }
        else if (data instanceof ArrayBuffer) {
            throw new Todo();
        }
        else if (data instanceof SharedArrayBuffer) {
            throw new Todo();
        }
        else {
            throw new Unreachable;
        }
        this[inner].writeBuffer(buffer[inner], BigInt(bufferOffset), dataOffsetBigInt, dataArray, sizeBigInt);
    }
    writeTexture(destination, data, dataLayout, size) {
        throw new Todo();
    }
    copyExternalImageToTexture(source, destination, copySize) {
        throw new Todo();
    }
}
export class GPUBindGroupLayout {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPUBindGroupLayout";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
}
export class GPUBindGroup {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPUBindGroup";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
}
export class GPUSampler {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPUSampler";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
}
export class GPUTextureView {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPUTextureView";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
}
export class GPUTexture {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPUTexture";
    }
    get label() {
        throw new Todo;
    }
    set label(value) {
        throw new Todo;
    }
    get width() {
        throw new Todo;
    }
    get height() {
        throw new Todo;
    }
    get depthOrArrayLayers() {
        throw new Todo;
    }
    get mipLevelCount() {
        throw new Todo;
    }
    get sampleCount() {
        throw new Todo;
    }
    get dimension() {
        throw new Todo;
    }
    get format() {
        throw new Todo;
    }
    get usage() {
        throw new Todo;
    }
    createView(descriptor) {
        let gfxDescriptor;
        if (descriptor) {
            let format;
            if (descriptor.format)
                format = convertTextureFormatWebToWasi(descriptor.format);
            let dimension;
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
    destroy() {
        throw new Todo;
    }
}
export class GPUCommandEncoder {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPUCommandEncoder";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
    beginRenderPass(descriptor) {
        let colorAttachments = Array.from(descriptor.colorAttachments).map(colorAttachment => {
            let resolveTarget;
            if (colorAttachment?.resolveTarget)
                resolveTarget = colorAttachment.resolveTarget[inner];
            let clearValue;
            if (colorAttachment?.clearValue)
                clearValue = convertColorWebToWasi(colorAttachment.clearValue);
            if (colorAttachment) {
                return {
                    ...colorAttachment,
                    view: colorAttachment.view[inner],
                    resolveTarget,
                    clearValue,
                };
            }
            else {
                return undefined;
            }
        });
        return new GPURenderPassEncoder(key, this[inner].beginRenderPass({
            colorAttachments
        }));
    }
    beginComputePass(descriptor) {
        let timestampWrites;
        if (descriptor?.timestampWrites) {
            timestampWrites = {
                ...timestampWrites,
                querySet: descriptor.timestampWrites.querySet[inner],
            };
        }
        return new GPUComputePassEncoder(key, this[inner].beginComputePass({
            ...descriptor,
            timestampWrites,
        }));
    }
    copyBufferToBuffer(source, sourceOffset, destination, destinationOffset, size) {
        this[inner].copyBufferToBuffer(source[inner], BigInt(sourceOffset), destination[inner], BigInt(destinationOffset), BigInt(size));
    }
    copyBufferToTexture(source, destination, copySize) {
        throw new Todo;
    }
    copyTextureToBuffer(source, destination, copySize) {
        throw new Todo;
    }
    copyTextureToTexture(source, destination, copySize) {
        throw new Todo;
    }
    clearBuffer(buffer, offset, size) {
        throw new Todo;
    }
    resolveQuerySet(querySet, firstQuery, queryCount, destination, destinationOffset) {
        throw new Todo;
    }
    finish(descriptor) {
        return new GPUCommandBuffer(key, this[inner].finish(descriptor));
    }
    pushDebugGroup(groupLabel) {
        throw new Todo;
    }
    popDebugGroup() {
        throw new Todo;
    }
    insertDebugMarker(markerLabel) {
        throw new Todo;
    }
}
export class GPUComputePassEncoder {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPUComputePassEncoder";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
    setPipeline(pipeline) {
        this[inner].setPipeline(pipeline[inner]);
    }
    dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ) {
        this[inner].dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ);
    }
    dispatchWorkgroupsIndirect(indirectBuffer, indirectOffset) {
        throw new Todo;
    }
    end() {
        this[inner].end();
    }
    pushDebugGroup(groupLabel) {
        throw new Todo;
    }
    popDebugGroup() {
        throw new Todo;
    }
    insertDebugMarker(markerLabel) {
        throw new Todo;
    }
    // function overloading:
    // setBindGroup(index: GPUIndex32, bindGroup: GPUBindGroup | null, dynamicOffsets?: Iterable<GPUBufferDynamicOffset>): undefined;
    // setBindGroup(index: GPUIndex32, bindGroup: GPUBindGroup | null, dynamicOffsetsData: Uint32Array, dynamicOffsetsDataStart: GPUSize64, dynamicOffsetsDataLength: GPUSize32): undefined;
    setBindGroup(index, bindGroup, dynamicOffsetsData, dynamicOffsetsDataStart, dynamicOffsetsDataLength) {
        let bindGroupGfx;
        if (bindGroup)
            bindGroupGfx = bindGroup[inner];
        if ((dynamicOffsetsData === undefined || dynamicOffsetsData[Symbol.iterator]) && dynamicOffsetsDataStart === undefined && dynamicOffsetsDataLength === undefined) {
            let dynamicOffsetsDataGfx;
            if (dynamicOffsetsData)
                throw new Todo;
            this[inner].setBindGroup(index, bindGroupGfx, dynamicOffsetsDataGfx);
        }
        else if (dynamicOffsetsData instanceof Uint32Array && typeof dynamicOffsetsDataStart === "number" && typeof dynamicOffsetsDataLength === "number") {
            this[inner].setBindGroup(index, bindGroupGfx, dynamicOffsetsData);
        }
        else {
            throw new Error("Invalid functions arguments passed to setBindGroup");
        }
    }
}
export class GPURenderPassEncoder {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPURenderPassEncoder";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
    setViewport(x, y, width, height, minDepth, maxDepth) {
        throw new Todo;
    }
    setScissorRect(x, y, width, height) {
        throw new Todo;
    }
    setBlendConstant(color) {
        throw new Todo;
    }
    setStencilReference(reference) {
        throw new Todo;
    }
    beginOcclusionQuery(queryIndex) {
        throw new Todo;
    }
    endOcclusionQuery() {
        throw new Todo;
    }
    executeBundles(bundles) {
        throw new Todo;
    }
    end() {
        this[inner].end();
    }
    pushDebugGroup(groupLabel) {
        throw new Todo;
    }
    popDebugGroup() {
        throw new Todo;
    }
    insertDebugMarker(markerLabel) {
        throw new Todo;
    }
    setBindGroup(index, bindGroup, dynamicOffsetsData, dynamicOffsetsDataStart, dynamicOffsetsDataLength) {
        throw new Todo;
    }
    setPipeline(pipeline) {
        this[inner].setPipeline(pipeline[inner]);
    }
    setIndexBuffer(buffer, indexFormat, offset, size) {
        throw new Todo;
    }
    setVertexBuffer(slot, buffer, offset, size) {
        throw new Todo;
    }
    draw(vertexCount, instanceCount, firstVertex, firstInstance) {
        this[inner].draw(vertexCount, instanceCount, firstVertex, firstInstance);
    }
    drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance) {
        throw new Todo;
    }
    drawIndirect(indirectBuffer, indirectOffset) {
        throw new Todo;
    }
    drawIndexedIndirect(indirectBuffer, indirectOffset) {
        throw new Todo;
    }
}
export class GPUQuerySet {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    destroy() {
        throw new Todo();
    }
    get __brand() {
        return "GPUQuerySet";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
        throw new Todo();
    }
    get type() {
        throw new Todo();
    }
    get count() {
        throw new Todo();
    }
}
export class GPUCommandBuffer {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPUCommandBuffer";
    }
    get label() {
        throw new Todo();
    }
    set label(value) {
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
