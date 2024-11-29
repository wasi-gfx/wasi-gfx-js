import * as gfx from 'wasi:webgpu/webgpu';
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
function convertGpuBindingResourceWebToWasi(resource) {
    if (resource instanceof GPUSampler) {
        return {
            tag: 'gpu-sampler',
            val: resource[inner],
        };
    }
    else if (resource instanceof GPUTextureView) {
        throw new Todo;
        // } else if(resource instanceof GPUExternalTexture) {
        //   throw new Todo;
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
// When forwarding a method to gfx.[type].[method], always pass down objects (like `...descriptor`) so that if new fields are added tsc can catch it.
export class GPU {
    [inner];
    constructor(k, i) {
        privateConstructorCalled(k);
        this[inner] = i;
    }
    async requestAdapter(descriptor = {}) {
        const adapter = await this[inner].requestAdapter(descriptor);
        if (adapter)
            return new GPUAdapter(key, adapter);
        return undefined;
    }
    getPreferredCanvasFormat() {
        throw new Todo();
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
    createRenderPipeline(_descriptor) {
        throw new Todo();
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
class GPUPipelineLayout {
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
class GPUBuffer {
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
class GPUQueue {
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
    // @ts-ignore
    writeBuffer(buffer, bufferOffset, data, dataOffset, size) {
        let dataOffsetBigInt; // = typeof dataOffset === "number" ? BigInt(dataOffset) : undefined;
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
class GPUBindGroupLayout {
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
class GPUBindGroup {
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
class GPUSampler {
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
class GPUTextureView {
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
class GPUCommandEncoder {
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
        throw new Todo;
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
class GPUComputePassEncoder {
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
class GPUQuerySet {
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
class GPUCommandBuffer {
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
