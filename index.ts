import * as gfx from 'wasi:webgpu/webgpu';

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

function convertGpuLayoutWebToWasi(layout: GPUAutoLayoutMode | GPUPipelineLayout): gfx.GpuLayout {
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
        // } else if(resource instanceof GPUExternalTexture) {
        //   throw new Todo;
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

export class GPU {
    [inner]: gfx.Gpu;

    constructor(k: symbol, i: gfx.Gpu) {
        privateConstructorCalled(k);
        this[inner] = i;
    }

    async requestAdapter(descriptor: GPURequestAdapterOptions = {}): Promise<GPUAdapter | undefined> {
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
                    layout = convertGpuLayoutWebToWasi(hint.layout as GPUPipelineLayout | "auto");
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
            module: (descriptor.compute.module as any)[inner] as gfx.GpuShaderModule,
            entryPoint: descriptor.compute.entryPoint,
            constants: undefined, // TODO:
        };

        return new GPUComputePipeline(key, this[inner].createComputePipeline({
            ...descriptor,
            compute,
            layout: convertGpuLayoutWebToWasi(descriptor.layout as GPUPipelineLayout | "auto"),
        }));
    }

    createRenderPipeline(_descriptor: GPURenderPipelineDescriptor): GPURenderPipeline {
        throw new Todo();
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

class GPUPipelineLayout implements globalThis.GPUPipelineLayout {
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

class GPUBuffer implements globalThis.GPUBuffer {
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

class GPUQueue implements globalThis.GPUQueue {
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

    // @ts-ignore
    writeBuffer(
        buffer: GPUBuffer,
        bufferOffset: GPUSize64,
        data: ArrayBufferView | ArrayBuffer | SharedArrayBuffer,
        dataOffset?: GPUSize64,
        size?: GPUSize64
    ): undefined {
        let dataOffsetBigInt: bigint | undefined; // = typeof dataOffset === "number" ? BigInt(dataOffset) : undefined;
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

class GPUBindGroupLayout implements globalThis.GPUBindGroupLayout {
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

class GPUBindGroup implements globalThis.GPUBindGroup {
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

class GPUSampler implements globalThis.GPUSampler {
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

class GPUTextureView implements globalThis.GPUTextureView {
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

class GPUCommandEncoder implements globalThis.GPUCommandEncoder {
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
        throw new Todo;
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

class GPUComputePassEncoder implements globalThis.GPUComputePassEncoder {
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

class GPUQuerySet implements globalThis.GPUQuerySet {
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

class GPUCommandBuffer implements globalThis.GPUCommandBuffer {
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
