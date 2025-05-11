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
function convertTextureDimensionWebToWasi(name) {
    name = name.toLowerCase();
    switch (name) {
        case "1d":
            return "d1";
        case "2d":
            return "d3";
        case "3d":
            return "d3";
    }
}
function convertTextureDimensionWasiToWeb(name) {
    switch (name) {
        case "d1":
            return "1d";
        case "d2":
            return "3d";
        case "d3":
            return "3d";
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
function convertGpuLayoutWasiToWeb(layout) {
    throw new Todo;
}
function convertColorWebToWasi(color) {
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
        };
    }
    else {
        return color;
    }
}
function convertExtent3DWebToWasi(extent) {
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
        };
    }
    else {
        return extent;
    }
}
function convertOrigin3DWebToWasi(origin) {
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
    }
    else {
        return origin;
    }
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
function convertBufferToUint8Array(buffer) {
    if (buffer instanceof Int8Array
        || buffer instanceof Int16Array
        || buffer instanceof Int32Array
        || buffer instanceof Uint8Array
        || buffer instanceof Uint16Array
        || buffer instanceof Uint32Array
        || buffer instanceof Uint8ClampedArray
        || buffer instanceof BigInt64Array
        || buffer instanceof BigUint64Array
        || buffer instanceof Float32Array
        || buffer instanceof Float64Array) {
        return new Uint8Array(buffer.buffer);
    }
    else if (buffer instanceof DataView) {
        throw new Todo();
    }
    else if (buffer instanceof ArrayBuffer) {
        throw new Todo();
    }
    else if (buffer instanceof SharedArrayBuffer) {
        throw new Todo();
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
        return this[inner].isFallbackAdapter();
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
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
        this[inner].destroy();
    }
    createBuffer(descriptor) {
        return new GPUBuffer(key, this[inner].createBuffer({
            ...descriptor,
            size: BigInt(descriptor.size),
        }));
    }
    createTexture(descriptor) {
        let dimension;
        if (descriptor.dimension)
            dimension = convertTextureDimensionWebToWasi(descriptor.dimension);
        let viewFormats;
        if (descriptor.viewFormats)
            viewFormats = Array.from(descriptor.viewFormats).map(f => convertTextureFormatWebToWasi(f));
        return new GPUTexture(key, this[inner].createTexture({
            ...descriptor,
            size: convertExtent3DWebToWasi(descriptor.size),
            format: convertTextureFormatWebToWasi(descriptor.format),
            dimension,
            viewFormats,
        }));
    }
    createSampler(descriptor) {
        return new GPUSampler(key, this[inner].createSampler(descriptor));
    }
    createBindGroupLayout(descriptor) {
        return new GPUBindGroupLayout(key, this[inner].createBindGroupLayout({
            ...descriptor,
            entries: Array.from(descriptor.entries).map(entry => {
                let buffer;
                if (entry.buffer) {
                    buffer = {
                        ...entry.buffer,
                        minBindingSize: numToBigIntOptional(entry.buffer.minBindingSize),
                    };
                }
                let texture;
                if (entry.texture) {
                    let viewDimension;
                    if (entry.texture.viewDimension)
                        viewDimension = convertTextureViewDimensionWebToWasi(entry.texture.viewDimension);
                    texture = {
                        ...entry.texture,
                        viewDimension,
                    };
                }
                let storageTexture;
                if (entry.storageTexture) {
                    let viewDimension;
                    if (entry.storageTexture.viewDimension)
                        viewDimension = convertTextureViewDimensionWebToWasi(entry.storageTexture.viewDimension);
                    storageTexture = {
                        ...entry.storageTexture,
                        viewDimension,
                        format: convertTextureFormatWebToWasi(entry.storageTexture.format),
                    };
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
    createPipelineLayout(descriptor) {
        return new GPUPipelineLayout(key, this[inner].createPipelineLayout({
            ...descriptor,
            bindGroupLayouts: Array.from(descriptor.bindGroupLayouts).map(b => b[inner])
        }));
    }
    createBindGroup(descriptor) {
        return new GPUBindGroup(key, this[inner].createBindGroup({
            ...descriptor,
            entries: Array.from(descriptor.entries).map(entry => {
                return {
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
        let depthStencilFormat;
        if (descriptor.depthStencilFormat)
            depthStencilFormat = convertTextureFormatWebToWasi(descriptor.depthStencilFormat);
        return new GPURenderBundleEncoder(key, this[inner].createRenderBundleEncoder({
            ...descriptor,
            colorFormats: Array.from(descriptor.colorFormats).map(colorFormat => {
                if (colorFormat) {
                    return convertTextureFormatWebToWasi(colorFormat);
                }
                {
                    return undefined;
                }
            }),
            depthStencilFormat,
        }));
    }
    createQuerySet(descriptor) {
        return new GPUQuerySet(key, this[inner].createQuerySet(descriptor));
    }
    pushErrorScope(filter) {
        this[inner].pushErrorScope(filter);
    }
    async popErrorScope() {
        throw new Todo();
    }
    importExternalTexture(descriptor) {
        throw new Todo;
    }
    onuncapturederror = null;
}
export class GPURenderBundleEncoder {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPURenderBundleEncoder";
    }
    get label() {
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
    }
    finish(descriptor) {
        return new GPURenderBundle(key, this[inner].finish(descriptor));
    }
    pushDebugGroup(groupLabel) {
        this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup() {
        this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel) {
        this[inner].insertDebugMarker(markerLabel);
    }
    setBindGroup(index, bindGroup, dynamicOffsetsData, dynamicOffsetsDataStart, dynamicOffsetsDataLength) {
        throw new Todo;
    }
    setPipeline(pipeline) {
        this[inner].setPipeline(pipeline[inner]);
    }
    setIndexBuffer(buffer, indexFormat, offset, size) {
        this[inner].setIndexBuffer(buffer[inner], indexFormat, numToBigIntOptional(offset), numToBigIntOptional(size));
    }
    setVertexBuffer(slot, buffer, offset, size) {
        this[inner].setVertexBuffer(slot, buffer[inner], numToBigIntOptional(offset), numToBigIntOptional(size));
    }
    draw(vertexCount, instanceCount, firstVertex, firstInstance) {
        this[inner].draw(vertexCount, instanceCount, firstVertex, firstInstance);
    }
    drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance) {
        this[inner].drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance);
    }
    drawIndirect(indirectBuffer, indirectOffset) {
        this[inner].drawIndirect(indirectBuffer[inner], BigInt(indirectOffset));
    }
    drawIndexedIndirect(indirectBuffer, indirectOffset) {
        this[inner].drawIndexedIndirect(indirectBuffer[inner], BigInt(indirectOffset));
    }
}
export class GPURenderBundle {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    get __brand() {
        return "GPURenderBundle";
    }
    get label() {
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
    }
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
    }
    getBindGroupLayout(index) {
        return new GPUBindGroupLayout(key, this[inner].getBindGroupLayout(index));
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
    }
    get size() {
        return Number(this[inner].size());
    }
    get usage() {
        return this[inner].usage();
    }
    get mapState() {
        return this[inner].mapState();
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
        this[inner].destroy();
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
    }
    submit(commandBuffers) {
        this[inner].submit(Array.from(commandBuffers).map((cb) => cb[inner]));
    }
    onSubmittedWorkDone() {
        throw new Todo();
    }
    writeBuffer(buffer, bufferOffset, data, dataOffset, size) {
        this[inner].writeBuffer(buffer[inner], BigInt(bufferOffset), numToBigIntOptional(dataOffset), convertBufferToUint8Array(data), numToBigIntOptional(size));
    }
    writeTexture(destination, data, dataLayout, size) {
        let destinationTexture = destination.texture[inner];
        let destinationOrigin;
        if (destination.origin) {
            destinationOrigin = convertOrigin3DWebToWasi(destination.origin);
        }
        this[inner].writeTexture({
            ...destination,
            texture: destinationTexture,
            origin: destinationOrigin,
        }, convertBufferToUint8Array(data), {
            ...dataLayout,
            offset: numToBigIntOptional(dataLayout.offset)
        }, convertExtent3DWebToWasi(size));
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
    }
    get width() {
        return this[inner].width();
    }
    get height() {
        return this[inner].height();
    }
    get depthOrArrayLayers() {
        return this[inner].depthOrArrayLayers();
    }
    get mipLevelCount() {
        return this[inner].mipLevelCount();
    }
    get sampleCount() {
        return this[inner].sampleCount();
    }
    get dimension() {
        return convertTextureDimensionWasiToWeb(this[inner].dimension());
    }
    get format() {
        return convertTextureFormatWasiToWeb(this[inner].format());
    }
    get usage() {
        return this[inner].usage();
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
        this[inner].destroy();
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
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
        let destinationOrigin;
        if (destination.origin)
            destinationOrigin = convertOrigin3DWebToWasi(destination.origin);
        this[inner].copyBufferToTexture({
            ...source,
            buffer: source.buffer[inner],
            offset: numToBigIntOptional(source.offset)
        }, {
            ...destination,
            texture: destination.texture[inner],
            origin: destinationOrigin,
        }, convertExtent3DWebToWasi(copySize));
    }
    copyTextureToBuffer(source, destination, copySize) {
        let sourceOrigin;
        if (source.origin)
            sourceOrigin = convertOrigin3DWebToWasi(source.origin);
        this[inner].copyTextureToBuffer({
            ...source,
            texture: source.texture[inner],
            origin: sourceOrigin
        }, {
            ...destination,
            buffer: destination.buffer[inner],
            offset: numToBigIntOptional(destination.offset),
        }, convertExtent3DWebToWasi(copySize));
    }
    copyTextureToTexture(source, destination, copySize) {
        let sourceOrigin;
        if (source.origin)
            sourceOrigin = convertOrigin3DWebToWasi(source.origin);
        let destinationOrigin;
        if (destination.origin)
            destinationOrigin = convertOrigin3DWebToWasi(destination.origin);
        this[inner].copyTextureToTexture({
            ...source,
            texture: source.texture[inner],
            origin: sourceOrigin
        }, {
            ...destination,
            texture: destination.texture[inner],
            origin: destinationOrigin,
        }, convertExtent3DWebToWasi(copySize));
    }
    clearBuffer(buffer, offset, size) {
        this[inner].clearBuffer(buffer[inner], numToBigIntOptional(offset), numToBigIntOptional(size));
    }
    resolveQuerySet(querySet, firstQuery, queryCount, destination, destinationOffset) {
        this[inner].resolveQuerySet(querySet[inner], firstQuery, queryCount, destination[inner], BigInt(destinationOffset));
    }
    finish(descriptor) {
        return new GPUCommandBuffer(key, this[inner].finish(descriptor));
    }
    pushDebugGroup(groupLabel) {
        this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup() {
        this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel) {
        this[inner].insertDebugMarker(markerLabel);
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
    }
    setPipeline(pipeline) {
        this[inner].setPipeline(pipeline[inner]);
    }
    dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ) {
        this[inner].dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ);
    }
    dispatchWorkgroupsIndirect(indirectBuffer, indirectOffset) {
        this[inner].dispatchWorkgroupsIndirect(indirectBuffer[inner], BigInt(indirectOffset));
    }
    end() {
        this[inner].end();
    }
    pushDebugGroup(groupLabel) {
        this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup() {
        this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel) {
        this[inner].insertDebugMarker(markerLabel);
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
    }
    setViewport(x, y, width, height, minDepth, maxDepth) {
        this[inner].setViewport(x, y, width, height, minDepth, maxDepth);
    }
    setScissorRect(x, y, width, height) {
        this[inner].setScissorRect(x, y, width, height);
    }
    setBlendConstant(color) {
        this[inner].setBlendConstant(convertColorWebToWasi(color));
    }
    setStencilReference(reference) {
        this[inner].setStencilReference(reference);
    }
    beginOcclusionQuery(queryIndex) {
        this[inner].beginOcclusionQuery(queryIndex);
    }
    endOcclusionQuery() {
        this[inner].endOcclusionQuery();
    }
    executeBundles(bundles) {
        this[inner].executeBundles(Array.from(bundles).map(bundle => bundle[inner]));
    }
    end() {
        this[inner].end();
    }
    pushDebugGroup(groupLabel) {
        this[inner].pushDebugGroup(groupLabel);
    }
    popDebugGroup() {
        this[inner].popDebugGroup();
    }
    insertDebugMarker(markerLabel) {
        this[inner].insertDebugMarker(markerLabel);
    }
    setBindGroup(index, bindGroup, dynamicOffsetsData, dynamicOffsetsDataStart, dynamicOffsetsDataLength) {
        throw new Todo;
    }
    setPipeline(pipeline) {
        this[inner].setPipeline(pipeline[inner]);
    }
    setIndexBuffer(buffer, indexFormat, offset, size) {
        this[inner].setIndexBuffer(buffer[inner], indexFormat, numToBigIntOptional(offset), numToBigIntOptional(size));
    }
    setVertexBuffer(slot, buffer, offset, size) {
        let gfxBuffer;
        if (buffer)
            gfxBuffer = buffer[inner];
        this[inner].setVertexBuffer(slot, gfxBuffer, numToBigIntOptional(offset), numToBigIntOptional(size));
    }
    draw(vertexCount, instanceCount, firstVertex, firstInstance) {
        this[inner].draw(vertexCount, instanceCount, firstVertex, firstInstance);
    }
    drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance) {
        this[inner].drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance);
    }
    drawIndirect(indirectBuffer, indirectOffset) {
        this[inner].drawIndirect(indirectBuffer[inner], BigInt(indirectOffset));
    }
    drawIndexedIndirect(indirectBuffer, indirectOffset) {
        this[inner].drawIndexedIndirect(indirectBuffer[inner], BigInt(indirectOffset));
    }
}
export class GPUQuerySet {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    destroy() {
        this[inner].destroy();
    }
    get __brand() {
        return "GPUQuerySet";
    }
    get label() {
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
    }
    get type() {
        return this[inner].type();
    }
    get count() {
        return this[inner].count();
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
        return this[inner].label();
    }
    set label(value) {
        this[inner].setLabel(value);
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
