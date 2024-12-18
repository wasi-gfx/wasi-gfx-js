export namespace WasiWebgpuWebgpu {
  export function getGpu(): Gpu;
  export { GpuSupportedLimits };
  export { GpuSupportedFeatures };
  export { WgslLanguageFeatures };
  export { GpuAdapterInfo };
  export { Gpu };
  export { GpuAdapter };
  export { RecordGpuSize64 };
  export { GpuDevice };
  export { GpuBuffer };
  export { GpuBufferUsage };
  export { GpuMapMode };
  export { GpuTexture };
  export { GpuTextureUsage };
  export { GpuTextureView };
  export { GpuSampler };
  export { GpuBindGroupLayout };
  export { GpuShaderStage };
  export { GpuBindGroup };
  export { GpuPipelineLayout };
  export { GpuShaderModule };
  export { GpuCompilationMessage };
  export { GpuCompilationInfo };
  export { GpuPipelineError };
  export { RecordGpuPipelineConstantValue };
  export { GpuComputePipeline };
  export { GpuRenderPipeline };
  export { GpuColorWrite };
  export { GpuCommandBuffer };
  export { GpuCommandEncoder };
  export { GpuComputePassEncoder };
  export { GpuRenderPassEncoder };
  export { GpuRenderBundle };
  export { GpuRenderBundleEncoder };
  export { GpuQueue };
  export { GpuQuerySet };
  export { GpuCanvasContext };
  export { GpuDeviceLostInfo };
  export { GpuError };
  export { GpuValidationError };
  export { GpuOutOfMemoryError };
  export { GpuInternalError };
  export { GpuUncapturedErrorEvent };
  export { NonStandardBuffer };
}
import type { Context } from './wasi-webgpu-graphics-context.js';
export { Context };
import type { AbstractBuffer } from './wasi-webgpu-graphics-context.js';
export { AbstractBuffer };
/**
 * # Variants
 * 
 * ## `"low-power"`
 * 
 * ## `"high-performance"`
 */
export type GpuPowerPreference = 'low-power' | 'high-performance';
export interface GpuRequestAdapterOptions {
  powerPreference?: GpuPowerPreference,
  forceFallbackAdapter?: boolean,
}
/**
 * # Variants
 * 
 * ## `"depth-clip-control"`
 * 
 * ## `"depth32float-stencil8"`
 * 
 * ## `"texture-compression-bc"`
 * 
 * ## `"texture-compression-bc-sliced3d"`
 * 
 * ## `"texture-compression-etc2"`
 * 
 * ## `"texture-compression-astc"`
 * 
 * ## `"timestamp-query"`
 * 
 * ## `"indirect-first-instance"`
 * 
 * ## `"shader-f16"`
 * 
 * ## `"rg11b10ufloat-renderable"`
 * 
 * ## `"bgra8unorm-storage"`
 * 
 * ## `"float32-filterable"`
 * 
 * ## `"clip-distances"`
 * 
 * ## `"dual-source-blending"`
 */
export type GpuFeatureName = 'depth-clip-control' | 'depth32float-stencil8' | 'texture-compression-bc' | 'texture-compression-bc-sliced3d' | 'texture-compression-etc2' | 'texture-compression-astc' | 'timestamp-query' | 'indirect-first-instance' | 'shader-f16' | 'rg11b10ufloat-renderable' | 'bgra8unorm-storage' | 'float32-filterable' | 'clip-distances' | 'dual-source-blending';
/**
 * # Variants
 * 
 * ## `"unmapped"`
 * 
 * ## `"pending"`
 * 
 * ## `"mapped"`
 */
export type GpuBufferMapState = 'unmapped' | 'pending' | 'mapped';
export type GpuBufferUsageFlags = number;
export type GpuMapModeFlags = number;
/**
 * # Variants
 * 
 * ## `"d1"`
 * 
 * ## `"d2"`
 * 
 * ## `"d3"`
 */
export type GpuTextureDimension = 'd1' | 'd2' | 'd3';
export type GpuTextureUsageFlags = number;
/**
 * # Variants
 * 
 * ## `"d1"`
 * 
 * ## `"d2"`
 * 
 * ## `"d2-array"`
 * 
 * ## `"cube"`
 * 
 * ## `"cube-array"`
 * 
 * ## `"d3"`
 */
export type GpuTextureViewDimension = 'd1' | 'd2' | 'd2-array' | 'cube' | 'cube-array' | 'd3';
/**
 * # Variants
 * 
 * ## `"all"`
 * 
 * ## `"stencil-only"`
 * 
 * ## `"depth-only"`
 */
export type GpuTextureAspect = 'all' | 'stencil-only' | 'depth-only';
/**
 * # Variants
 * 
 * ## `"r8unorm"`
 * 
 * ## `"r8snorm"`
 * 
 * ## `"r8uint"`
 * 
 * ## `"r8sint"`
 * 
 * ## `"r16uint"`
 * 
 * ## `"r16sint"`
 * 
 * ## `"r16float"`
 * 
 * ## `"rg8unorm"`
 * 
 * ## `"rg8snorm"`
 * 
 * ## `"rg8uint"`
 * 
 * ## `"rg8sint"`
 * 
 * ## `"r32uint"`
 * 
 * ## `"r32sint"`
 * 
 * ## `"r32float"`
 * 
 * ## `"rg16uint"`
 * 
 * ## `"rg16sint"`
 * 
 * ## `"rg16float"`
 * 
 * ## `"rgba8unorm"`
 * 
 * ## `"rgba8unorm-srgb"`
 * 
 * ## `"rgba8snorm"`
 * 
 * ## `"rgba8uint"`
 * 
 * ## `"rgba8sint"`
 * 
 * ## `"bgra8unorm"`
 * 
 * ## `"bgra8unorm-srgb"`
 * 
 * ## `"rgb9e5ufloat"`
 * 
 * ## `"rgb10a2uint"`
 * 
 * ## `"rgb10a2unorm"`
 * 
 * ## `"rg11b10ufloat"`
 * 
 * ## `"rg32uint"`
 * 
 * ## `"rg32sint"`
 * 
 * ## `"rg32float"`
 * 
 * ## `"rgba16uint"`
 * 
 * ## `"rgba16sint"`
 * 
 * ## `"rgba16float"`
 * 
 * ## `"rgba32uint"`
 * 
 * ## `"rgba32sint"`
 * 
 * ## `"rgba32float"`
 * 
 * ## `"stencil8"`
 * 
 * ## `"depth16unorm"`
 * 
 * ## `"depth24plus"`
 * 
 * ## `"depth24plus-stencil8"`
 * 
 * ## `"depth32float"`
 * 
 * ## `"depth32float-stencil8"`
 * 
 * ## `"bc1-rgba-unorm"`
 * 
 * ## `"bc1-rgba-unorm-srgb"`
 * 
 * ## `"bc2-rgba-unorm"`
 * 
 * ## `"bc2-rgba-unorm-srgb"`
 * 
 * ## `"bc3-rgba-unorm"`
 * 
 * ## `"bc3-rgba-unorm-srgb"`
 * 
 * ## `"bc4-r-unorm"`
 * 
 * ## `"bc4-r-snorm"`
 * 
 * ## `"bc5-rg-unorm"`
 * 
 * ## `"bc5-rg-snorm"`
 * 
 * ## `"bc6h-rgb-ufloat"`
 * 
 * ## `"bc6h-rgb-float"`
 * 
 * ## `"bc7-rgba-unorm"`
 * 
 * ## `"bc7-rgba-unorm-srgb"`
 * 
 * ## `"etc2-rgb8unorm"`
 * 
 * ## `"etc2-rgb8unorm-srgb"`
 * 
 * ## `"etc2-rgb8a1unorm"`
 * 
 * ## `"etc2-rgb8a1unorm-srgb"`
 * 
 * ## `"etc2-rgba8unorm"`
 * 
 * ## `"etc2-rgba8unorm-srgb"`
 * 
 * ## `"eac-r11unorm"`
 * 
 * ## `"eac-r11snorm"`
 * 
 * ## `"eac-rg11unorm"`
 * 
 * ## `"eac-rg11snorm"`
 * 
 * ## `"astc4x4-unorm"`
 * 
 * ## `"astc4x4-unorm-srgb"`
 * 
 * ## `"astc5x4-unorm"`
 * 
 * ## `"astc5x4-unorm-srgb"`
 * 
 * ## `"astc5x5-unorm"`
 * 
 * ## `"astc5x5-unorm-srgb"`
 * 
 * ## `"astc6x5-unorm"`
 * 
 * ## `"astc6x5-unorm-srgb"`
 * 
 * ## `"astc6x6-unorm"`
 * 
 * ## `"astc6x6-unorm-srgb"`
 * 
 * ## `"astc8x5-unorm"`
 * 
 * ## `"astc8x5-unorm-srgb"`
 * 
 * ## `"astc8x6-unorm"`
 * 
 * ## `"astc8x6-unorm-srgb"`
 * 
 * ## `"astc8x8-unorm"`
 * 
 * ## `"astc8x8-unorm-srgb"`
 * 
 * ## `"astc10x5-unorm"`
 * 
 * ## `"astc10x5-unorm-srgb"`
 * 
 * ## `"astc10x6-unorm"`
 * 
 * ## `"astc10x6-unorm-srgb"`
 * 
 * ## `"astc10x8-unorm"`
 * 
 * ## `"astc10x8-unorm-srgb"`
 * 
 * ## `"astc10x10-unorm"`
 * 
 * ## `"astc10x10-unorm-srgb"`
 * 
 * ## `"astc12x10-unorm"`
 * 
 * ## `"astc12x10-unorm-srgb"`
 * 
 * ## `"astc12x12-unorm"`
 * 
 * ## `"astc12x12-unorm-srgb"`
 */
export type GpuTextureFormat = 'r8unorm' | 'r8snorm' | 'r8uint' | 'r8sint' | 'r16uint' | 'r16sint' | 'r16float' | 'rg8unorm' | 'rg8snorm' | 'rg8uint' | 'rg8sint' | 'r32uint' | 'r32sint' | 'r32float' | 'rg16uint' | 'rg16sint' | 'rg16float' | 'rgba8unorm' | 'rgba8unorm-srgb' | 'rgba8snorm' | 'rgba8uint' | 'rgba8sint' | 'bgra8unorm' | 'bgra8unorm-srgb' | 'rgb9e5ufloat' | 'rgb10a2uint' | 'rgb10a2unorm' | 'rg11b10ufloat' | 'rg32uint' | 'rg32sint' | 'rg32float' | 'rgba16uint' | 'rgba16sint' | 'rgba16float' | 'rgba32uint' | 'rgba32sint' | 'rgba32float' | 'stencil8' | 'depth16unorm' | 'depth24plus' | 'depth24plus-stencil8' | 'depth32float' | 'depth32float-stencil8' | 'bc1-rgba-unorm' | 'bc1-rgba-unorm-srgb' | 'bc2-rgba-unorm' | 'bc2-rgba-unorm-srgb' | 'bc3-rgba-unorm' | 'bc3-rgba-unorm-srgb' | 'bc4-r-unorm' | 'bc4-r-snorm' | 'bc5-rg-unorm' | 'bc5-rg-snorm' | 'bc6h-rgb-ufloat' | 'bc6h-rgb-float' | 'bc7-rgba-unorm' | 'bc7-rgba-unorm-srgb' | 'etc2-rgb8unorm' | 'etc2-rgb8unorm-srgb' | 'etc2-rgb8a1unorm' | 'etc2-rgb8a1unorm-srgb' | 'etc2-rgba8unorm' | 'etc2-rgba8unorm-srgb' | 'eac-r11unorm' | 'eac-r11snorm' | 'eac-rg11unorm' | 'eac-rg11snorm' | 'astc4x4-unorm' | 'astc4x4-unorm-srgb' | 'astc5x4-unorm' | 'astc5x4-unorm-srgb' | 'astc5x5-unorm' | 'astc5x5-unorm-srgb' | 'astc6x5-unorm' | 'astc6x5-unorm-srgb' | 'astc6x6-unorm' | 'astc6x6-unorm-srgb' | 'astc8x5-unorm' | 'astc8x5-unorm-srgb' | 'astc8x6-unorm' | 'astc8x6-unorm-srgb' | 'astc8x8-unorm' | 'astc8x8-unorm-srgb' | 'astc10x5-unorm' | 'astc10x5-unorm-srgb' | 'astc10x6-unorm' | 'astc10x6-unorm-srgb' | 'astc10x8-unorm' | 'astc10x8-unorm-srgb' | 'astc10x10-unorm' | 'astc10x10-unorm-srgb' | 'astc12x10-unorm' | 'astc12x10-unorm-srgb' | 'astc12x12-unorm' | 'astc12x12-unorm-srgb';
/**
 * # Variants
 * 
 * ## `"clamp-to-edge"`
 * 
 * ## `"repeat"`
 * 
 * ## `"mirror-repeat"`
 */
export type GpuAddressMode = 'clamp-to-edge' | 'repeat' | 'mirror-repeat';
/**
 * # Variants
 * 
 * ## `"nearest"`
 * 
 * ## `"linear"`
 */
export type GpuFilterMode = 'nearest' | 'linear';
/**
 * # Variants
 * 
 * ## `"nearest"`
 * 
 * ## `"linear"`
 */
export type GpuMipmapFilterMode = 'nearest' | 'linear';
/**
 * # Variants
 * 
 * ## `"never"`
 * 
 * ## `"less"`
 * 
 * ## `"equal"`
 * 
 * ## `"less-equal"`
 * 
 * ## `"greater"`
 * 
 * ## `"not-equal"`
 * 
 * ## `"greater-equal"`
 * 
 * ## `"always"`
 */
export type GpuCompareFunction = 'never' | 'less' | 'equal' | 'less-equal' | 'greater' | 'not-equal' | 'greater-equal' | 'always';
export interface GpuSamplerDescriptor {
  addressModeU?: GpuAddressMode,
  addressModeV?: GpuAddressMode,
  addressModeW?: GpuAddressMode,
  magFilter?: GpuFilterMode,
  minFilter?: GpuFilterMode,
  mipmapFilter?: GpuMipmapFilterMode,
  lodMinClamp?: number,
  lodMaxClamp?: number,
  compare?: GpuCompareFunction,
  maxAnisotropy?: number,
  label?: string,
}
export type GpuShaderStageFlags = number;
/**
 * # Variants
 * 
 * ## `"uniform"`
 * 
 * ## `"storage"`
 * 
 * ## `"read-only-storage"`
 */
export type GpuBufferBindingType = 'uniform' | 'storage' | 'read-only-storage';
/**
 * # Variants
 * 
 * ## `"filtering"`
 * 
 * ## `"non-filtering"`
 * 
 * ## `"comparison"`
 */
export type GpuSamplerBindingType = 'filtering' | 'non-filtering' | 'comparison';
export interface GpuSamplerBindingLayout {
  type?: GpuSamplerBindingType,
}
/**
 * # Variants
 * 
 * ## `"float"`
 * 
 * ## `"unfilterable-float"`
 * 
 * ## `"depth"`
 * 
 * ## `"sint"`
 * 
 * ## `"uint"`
 */
export type GpuTextureSampleType = 'float' | 'unfilterable-float' | 'depth' | 'sint' | 'uint';
export interface GpuTextureBindingLayout {
  sampleType?: GpuTextureSampleType,
  viewDimension?: GpuTextureViewDimension,
  multisampled?: boolean,
}
/**
 * # Variants
 * 
 * ## `"write-only"`
 * 
 * ## `"read-only"`
 * 
 * ## `"read-write"`
 */
export type GpuStorageTextureAccess = 'write-only' | 'read-only' | 'read-write';
export interface GpuStorageTextureBindingLayout {
  access?: GpuStorageTextureAccess,
  format: GpuTextureFormat,
  viewDimension?: GpuTextureViewDimension,
}
export interface GpuPipelineLayoutDescriptor {
  bindGroupLayouts: Array<GpuBindGroupLayout>,
  label?: string,
}
/**
 * # Variants
 * 
 * ## `"error"`
 * 
 * ## `"warning"`
 * 
 * ## `"info"`
 */
export type GpuCompilationMessageType = 'error' | 'warning' | 'info';
/**
 * # Variants
 * 
 * ## `"validation"`
 * 
 * ## `"internal"`
 */
export type GpuPipelineErrorReason = 'validation' | 'internal';
export interface GpuPipelineErrorInit {
  reason: GpuPipelineErrorReason,
}
/**
 * # Variants
 * 
 * ## `"auto"`
 */
export type GpuAutoLayoutMode = 'auto';
export type GpuLayout = GpuLayoutGpuAutoLayoutMode | GpuLayoutGpuPipelineLayout;
export interface GpuLayoutGpuAutoLayoutMode {
  tag: 'gpu-auto-layout-mode',
  val: GpuAutoLayoutMode,
}
export interface GpuLayoutGpuPipelineLayout {
  tag: 'gpu-pipeline-layout',
  val: GpuPipelineLayout,
}
export interface GpuShaderModuleCompilationHint {
  entryPoint: string,
  layout?: GpuLayout,
}
export interface GpuShaderModuleDescriptor {
  code: string,
  compilationHints?: Array<GpuShaderModuleCompilationHint>,
  label?: string,
}
export interface GpuProgrammableStage {
  module: GpuShaderModule,
  entryPoint?: string,
  constants?: RecordGpuPipelineConstantValue,
}
export type GpuPipelineConstantValue = number;
export interface GpuComputePipelineDescriptor {
  compute: GpuProgrammableStage,
  layout: GpuLayout,
  label?: string,
}
/**
 * # Variants
 * 
 * ## `"point-list"`
 * 
 * ## `"line-list"`
 * 
 * ## `"line-strip"`
 * 
 * ## `"triangle-list"`
 * 
 * ## `"triangle-strip"`
 */
export type GpuPrimitiveTopology = 'point-list' | 'line-list' | 'line-strip' | 'triangle-list' | 'triangle-strip';
/**
 * # Variants
 * 
 * ## `"ccw"`
 * 
 * ## `"cw"`
 */
export type GpuFrontFace = 'ccw' | 'cw';
/**
 * # Variants
 * 
 * ## `"none"`
 * 
 * ## `"front"`
 * 
 * ## `"back"`
 */
export type GpuCullMode = 'none' | 'front' | 'back';
export type GpuColorWriteFlags = number;
/**
 * # Variants
 * 
 * ## `"zero"`
 * 
 * ## `"one"`
 * 
 * ## `"src"`
 * 
 * ## `"one-minus-src"`
 * 
 * ## `"src-alpha"`
 * 
 * ## `"one-minus-src-alpha"`
 * 
 * ## `"dst"`
 * 
 * ## `"one-minus-dst"`
 * 
 * ## `"dst-alpha"`
 * 
 * ## `"one-minus-dst-alpha"`
 * 
 * ## `"src-alpha-saturated"`
 * 
 * ## `"constant"`
 * 
 * ## `"one-minus-constant"`
 * 
 * ## `"src1"`
 * 
 * ## `"one-minus-src1"`
 * 
 * ## `"src1-alpha"`
 * 
 * ## `"one-minus-src1-alpha"`
 */
export type GpuBlendFactor = 'zero' | 'one' | 'src' | 'one-minus-src' | 'src-alpha' | 'one-minus-src-alpha' | 'dst' | 'one-minus-dst' | 'dst-alpha' | 'one-minus-dst-alpha' | 'src-alpha-saturated' | 'constant' | 'one-minus-constant' | 'src1' | 'one-minus-src1' | 'src1-alpha' | 'one-minus-src1-alpha';
/**
 * # Variants
 * 
 * ## `"add"`
 * 
 * ## `"subtract"`
 * 
 * ## `"reverse-subtract"`
 * 
 * ## `"min"`
 * 
 * ## `"max"`
 */
export type GpuBlendOperation = 'add' | 'subtract' | 'reverse-subtract' | 'min' | 'max';
export interface GpuBlendComponent {
  operation?: GpuBlendOperation,
  srcFactor?: GpuBlendFactor,
  dstFactor?: GpuBlendFactor,
}
export interface GpuBlendState {
  color: GpuBlendComponent,
  alpha: GpuBlendComponent,
}
export interface GpuColorTargetState {
  format: GpuTextureFormat,
  blend?: GpuBlendState,
  writeMask?: GpuColorWriteFlags,
}
export interface GpuFragmentState {
  targets: Array<GpuColorTargetState | undefined>,
  module: GpuShaderModule,
  entryPoint?: string,
  constants?: RecordGpuPipelineConstantValue,
}
/**
 * # Variants
 * 
 * ## `"keep"`
 * 
 * ## `"zero"`
 * 
 * ## `"replace"`
 * 
 * ## `"invert"`
 * 
 * ## `"increment-clamp"`
 * 
 * ## `"decrement-clamp"`
 * 
 * ## `"increment-wrap"`
 * 
 * ## `"decrement-wrap"`
 */
export type GpuStencilOperation = 'keep' | 'zero' | 'replace' | 'invert' | 'increment-clamp' | 'decrement-clamp' | 'increment-wrap' | 'decrement-wrap';
export interface GpuStencilFaceState {
  compare?: GpuCompareFunction,
  failOp?: GpuStencilOperation,
  depthFailOp?: GpuStencilOperation,
  passOp?: GpuStencilOperation,
}
/**
 * # Variants
 * 
 * ## `"uint16"`
 * 
 * ## `"uint32"`
 */
export type GpuIndexFormat = 'uint16' | 'uint32';
export interface GpuPrimitiveState {
  topology?: GpuPrimitiveTopology,
  stripIndexFormat?: GpuIndexFormat,
  frontFace?: GpuFrontFace,
  cullMode?: GpuCullMode,
  unclippedDepth?: boolean,
}
/**
 * # Variants
 * 
 * ## `"uint8x2"`
 * 
 * ## `"uint8x4"`
 * 
 * ## `"sint8x2"`
 * 
 * ## `"sint8x4"`
 * 
 * ## `"unorm8x2"`
 * 
 * ## `"unorm8x4"`
 * 
 * ## `"snorm8x2"`
 * 
 * ## `"snorm8x4"`
 * 
 * ## `"uint16x2"`
 * 
 * ## `"uint16x4"`
 * 
 * ## `"sint16x2"`
 * 
 * ## `"sint16x4"`
 * 
 * ## `"unorm16x2"`
 * 
 * ## `"unorm16x4"`
 * 
 * ## `"snorm16x2"`
 * 
 * ## `"snorm16x4"`
 * 
 * ## `"float16x2"`
 * 
 * ## `"float16x4"`
 * 
 * ## `"float32"`
 * 
 * ## `"float32x2"`
 * 
 * ## `"float32x3"`
 * 
 * ## `"float32x4"`
 * 
 * ## `"uint32"`
 * 
 * ## `"uint32x2"`
 * 
 * ## `"uint32x3"`
 * 
 * ## `"uint32x4"`
 * 
 * ## `"sint32"`
 * 
 * ## `"sint32x2"`
 * 
 * ## `"sint32x3"`
 * 
 * ## `"sint32x4"`
 * 
 * ## `"unorm1010102"`
 */
export type GpuVertexFormat = 'uint8x2' | 'uint8x4' | 'sint8x2' | 'sint8x4' | 'unorm8x2' | 'unorm8x4' | 'snorm8x2' | 'snorm8x4' | 'uint16x2' | 'uint16x4' | 'sint16x2' | 'sint16x4' | 'unorm16x2' | 'unorm16x4' | 'snorm16x2' | 'snorm16x4' | 'float16x2' | 'float16x4' | 'float32' | 'float32x2' | 'float32x3' | 'float32x4' | 'uint32' | 'uint32x2' | 'uint32x3' | 'uint32x4' | 'sint32' | 'sint32x2' | 'sint32x3' | 'sint32x4' | 'unorm1010102';
/**
 * # Variants
 * 
 * ## `"vertex"`
 * 
 * ## `"instance"`
 */
export type GpuVertexStepMode = 'vertex' | 'instance';
export interface GpuCommandBufferDescriptor {
  label?: string,
}
export interface GpuCommandEncoderDescriptor {
  label?: string,
}
/**
 * # Variants
 * 
 * ## `"load"`
 * 
 * ## `"clear"`
 */
export type GpuLoadOp = 'load' | 'clear';
/**
 * # Variants
 * 
 * ## `"store"`
 * 
 * ## `"discard"`
 */
export type GpuStoreOp = 'store' | 'discard';
export interface GpuRenderBundleDescriptor {
  label?: string,
}
export interface GpuQueueDescriptor {
  label?: string,
}
export interface GpuDeviceDescriptor {
  requiredFeatures?: Array<GpuFeatureName>,
  requiredLimits?: RecordGpuSize64,
  defaultQueue?: GpuQueueDescriptor,
  label?: string,
}
/**
 * # Variants
 * 
 * ## `"occlusion"`
 * 
 * ## `"timestamp"`
 */
export type GpuQueryType = 'occlusion' | 'timestamp';
/**
 * # Variants
 * 
 * ## `"opaque"`
 * 
 * ## `"premultiplied"`
 */
export type GpuCanvasAlphaMode = 'opaque' | 'premultiplied';
/**
 * # Variants
 * 
 * ## `"standard"`
 * 
 * ## `"extended"`
 */
export type GpuCanvasToneMappingMode = 'standard' | 'extended';
export interface GpuCanvasToneMapping {
  mode?: GpuCanvasToneMappingMode,
}
/**
 * # Variants
 * 
 * ## `"unknown"`
 * 
 * ## `"destroyed"`
 */
export type GpuDeviceLostReason = 'unknown' | 'destroyed';
/**
 * # Variants
 * 
 * ## `"validation"`
 * 
 * ## `"out-of-memory"`
 * 
 * ## `"internal"`
 */
export type GpuErrorFilter = 'validation' | 'out-of-memory' | 'internal';
export interface GpuUncapturedErrorEventInit {
  error: GpuError,
}
export type GpuBufferDynamicOffset = number;
export type GpuStencilValue = number;
export interface GpuRenderPassDepthStencilAttachment {
  view: GpuTextureView,
  depthClearValue?: number,
  depthLoadOp?: GpuLoadOp,
  depthStoreOp?: GpuStoreOp,
  depthReadOnly?: boolean,
  stencilClearValue?: GpuStencilValue,
  stencilLoadOp?: GpuLoadOp,
  stencilStoreOp?: GpuStoreOp,
  stencilReadOnly?: boolean,
}
export type GpuSampleMask = number;
export type GpuDepthBias = number;
export interface GpuDepthStencilState {
  format: GpuTextureFormat,
  depthWriteEnabled?: boolean,
  depthCompare?: GpuCompareFunction,
  stencilFront?: GpuStencilFaceState,
  stencilBack?: GpuStencilFaceState,
  stencilReadMask?: GpuStencilValue,
  stencilWriteMask?: GpuStencilValue,
  depthBias?: GpuDepthBias,
  depthBiasSlopeScale?: number,
  depthBiasClamp?: number,
}
export type GpuSize64 = bigint;
export interface GpuBufferDescriptor {
  size: GpuSize64,
  usage: GpuBufferUsageFlags,
  mappedAtCreation?: boolean,
  label?: string,
}
export interface GpuBufferBindingLayout {
  type?: GpuBufferBindingType,
  hasDynamicOffset?: boolean,
  minBindingSize?: GpuSize64,
}
export interface GpuBufferBinding {
  buffer: GpuBuffer,
  offset?: GpuSize64,
  size?: GpuSize64,
}
export type GpuBindingResource = GpuBindingResourceGpuBufferBinding | GpuBindingResourceGpuSampler | GpuBindingResourceGpuTextureView;
export interface GpuBindingResourceGpuBufferBinding {
  tag: 'gpu-buffer-binding',
  val: GpuBufferBinding,
}
export interface GpuBindingResourceGpuSampler {
  tag: 'gpu-sampler',
  val: GpuSampler,
}
export interface GpuBindingResourceGpuTextureView {
  tag: 'gpu-texture-view',
  val: GpuTextureView,
}
export type GpuIntegerCoordinate = number;
export interface GpuTextureViewDescriptor {
  format?: GpuTextureFormat,
  dimension?: GpuTextureViewDimension,
  usage?: GpuTextureUsageFlags,
  aspect?: GpuTextureAspect,
  baseMipLevel?: GpuIntegerCoordinate,
  mipLevelCount?: GpuIntegerCoordinate,
  baseArrayLayer?: GpuIntegerCoordinate,
  arrayLayerCount?: GpuIntegerCoordinate,
  label?: string,
}
export type GpuIndex32 = number;
export interface GpuBindGroupLayoutEntry {
  binding: GpuIndex32,
  visibility: GpuShaderStageFlags,
  buffer?: GpuBufferBindingLayout,
  sampler?: GpuSamplerBindingLayout,
  texture?: GpuTextureBindingLayout,
  storageTexture?: GpuStorageTextureBindingLayout,
}
export interface GpuBindGroupLayoutDescriptor {
  entries: Array<GpuBindGroupLayoutEntry>,
  label?: string,
}
export interface GpuBindGroupEntry {
  binding: GpuIndex32,
  resource: GpuBindingResource,
}
export interface GpuBindGroupDescriptor {
  layout: GpuBindGroupLayout,
  entries: Array<GpuBindGroupEntry>,
  label?: string,
}
export interface GpuVertexAttribute {
  format: GpuVertexFormat,
  offset: GpuSize64,
  shaderLocation: GpuIndex32,
}
export interface GpuVertexBufferLayout {
  arrayStride: GpuSize64,
  stepMode?: GpuVertexStepMode,
  attributes: Array<GpuVertexAttribute>,
}
export interface GpuVertexState {
  buffers?: Array<GpuVertexBufferLayout | undefined>,
  module: GpuShaderModule,
  entryPoint?: string,
  constants?: RecordGpuPipelineConstantValue,
}
export type GpuSize32 = number;
export interface GpuMultisampleState {
  count?: GpuSize32,
  mask?: GpuSampleMask,
  alphaToCoverageEnabled?: boolean,
}
export interface GpuRenderPipelineDescriptor {
  vertex: GpuVertexState,
  primitive?: GpuPrimitiveState,
  depthStencil?: GpuDepthStencilState,
  multisample?: GpuMultisampleState,
  fragment?: GpuFragmentState,
  layout: GpuLayout,
  label?: string,
}
export interface GpuImageDataLayout {
  offset?: GpuSize64,
  bytesPerRow?: GpuSize32,
  rowsPerImage?: GpuSize32,
}
export interface GpuImageCopyBuffer {
  buffer: GpuBuffer,
  offset?: GpuSize64,
  bytesPerRow?: GpuSize32,
  rowsPerImage?: GpuSize32,
}
export interface GpuComputePassTimestampWrites {
  querySet: GpuQuerySet,
  beginningOfPassWriteIndex?: GpuSize32,
  endOfPassWriteIndex?: GpuSize32,
}
export interface GpuComputePassDescriptor {
  timestampWrites?: GpuComputePassTimestampWrites,
  label?: string,
}
export interface GpuRenderPassTimestampWrites {
  querySet: GpuQuerySet,
  beginningOfPassWriteIndex?: GpuSize32,
  endOfPassWriteIndex?: GpuSize32,
}
export interface GpuRenderPassLayout {
  colorFormats: Array<GpuTextureFormat | undefined>,
  depthStencilFormat?: GpuTextureFormat,
  sampleCount?: GpuSize32,
  label?: string,
}
export interface GpuRenderBundleEncoderDescriptor {
  depthReadOnly?: boolean,
  stencilReadOnly?: boolean,
  colorFormats: Array<GpuTextureFormat | undefined>,
  depthStencilFormat?: GpuTextureFormat,
  sampleCount?: GpuSize32,
  label?: string,
}
export interface GpuQuerySetDescriptor {
  type: GpuQueryType,
  count: GpuSize32,
  label?: string,
}
export type GpuSignedOffset32 = number;
export type GpuSize64Out = bigint;
export type GpuIntegerCoordinateOut = number;
export type GpuSize32Out = number;
export type GpuFlagsConstant = number;
export interface GpuColor {
  r: number,
  g: number,
  b: number,
  a: number,
}
export interface GpuRenderPassColorAttachment {
  view: GpuTextureView,
  depthSlice?: GpuIntegerCoordinate,
  resolveTarget?: GpuTextureView,
  clearValue?: GpuColor,
  loadOp: GpuLoadOp,
  storeOp: GpuStoreOp,
}
export interface GpuRenderPassDescriptor {
  colorAttachments: Array<GpuRenderPassColorAttachment | undefined>,
  depthStencilAttachment?: GpuRenderPassDepthStencilAttachment,
  occlusionQuerySet?: GpuQuerySet,
  timestampWrites?: GpuRenderPassTimestampWrites,
  maxDrawCount?: GpuSize64,
  label?: string,
}
export interface GpuOrigin3D {
  x?: GpuIntegerCoordinate,
  y?: GpuIntegerCoordinate,
  z?: GpuIntegerCoordinate,
}
export interface GpuImageCopyTexture {
  texture: GpuTexture,
  mipLevel?: GpuIntegerCoordinate,
  origin?: GpuOrigin3D,
  aspect?: GpuTextureAspect,
}
export interface GpuExtent3D {
  width: GpuIntegerCoordinate,
  height?: GpuIntegerCoordinate,
  depthOrArrayLayers?: GpuIntegerCoordinate,
}
export interface GpuTextureDescriptor {
  size: GpuExtent3D,
  mipLevelCount?: GpuIntegerCoordinate,
  sampleCount?: GpuSize32,
  dimension?: GpuTextureDimension,
  format: GpuTextureFormat,
  usage: GpuTextureUsageFlags,
  viewFormats?: Array<GpuTextureFormat>,
  label?: string,
}
/**
 * # Variants
 * 
 * ## `"srgb"`
 * 
 * ## `"display-p3"`
 */
export type PredefinedColorSpace = 'srgb' | 'display-p3';
export interface GpuDeviceConfiguration {
  format: GpuTextureFormat,
  usage?: GpuTextureUsageFlags,
  viewFormats?: Array<GpuTextureFormat>,
  colorSpace?: PredefinedColorSpace,
  alphaMode?: GpuCanvasAlphaMode,
}
export interface GpuCanvasConfiguration {
  device: GpuDevice,
  format: GpuTextureFormat,
  usage?: GpuTextureUsageFlags,
  viewFormats?: Array<GpuTextureFormat>,
  colorSpace?: PredefinedColorSpace,
  toneMapping?: GpuCanvasToneMapping,
  alphaMode?: GpuCanvasAlphaMode,
}
export interface GpuImageCopyTextureTagged {
  colorSpace?: PredefinedColorSpace,
  premultipliedAlpha?: boolean,
  texture: GpuTexture,
  mipLevel?: GpuIntegerCoordinate,
  origin?: GpuOrigin3D,
  aspect?: GpuTextureAspect,
}

export class Gpu {
  requestAdapter(options: GpuRequestAdapterOptions | undefined): GpuAdapter | undefined;
  getPreferredCanvasFormat(): GpuTextureFormat;
  wgslLanguageFeatures(): WgslLanguageFeatures;
}

export class GpuAdapter {
  features(): GpuSupportedFeatures;
  limits(): GpuSupportedLimits;
  info(): GpuAdapterInfo;
  isFallbackAdapter(): boolean;
  requestDevice(descriptor: GpuDeviceDescriptor | undefined): GpuDevice;
}

export class GpuAdapterInfo {
  vendor(): string;
  architecture(): string;
  device(): string;
  description(): string;
}

export class GpuBindGroup {
  label(): string;
  setLabel(label: string): void;
}

export class GpuBindGroupLayout {
  label(): string;
  setLabel(label: string): void;
}

export class GpuBuffer {
  size(): GpuSize64Out;
  usage(): GpuFlagsConstant;
  mapState(): GpuBufferMapState;
  mapAsync(mode: GpuMapModeFlags, offset: GpuSize64 | undefined, size: GpuSize64 | undefined): void;
  getMappedRange(offset: GpuSize64 | undefined, size: GpuSize64 | undefined): NonStandardBuffer;
  unmap(): void;
  destroy(): void;
  label(): string;
  setLabel(label: string): void;
}

export class GpuBufferUsage {
  static mapRead(): GpuFlagsConstant;
  static mapWrite(): GpuFlagsConstant;
  static copySrc(): GpuFlagsConstant;
  static copyDst(): GpuFlagsConstant;
  static index(): GpuFlagsConstant;
  static vertex(): GpuFlagsConstant;
  static uniform(): GpuFlagsConstant;
  static storage(): GpuFlagsConstant;
  static indirect(): GpuFlagsConstant;
  static queryResolve(): GpuFlagsConstant;
}

export class GpuCanvasContext {
  configure(configuration: GpuCanvasConfiguration): void;
  unconfigure(): void;
  getCurrentTexture(): GpuTexture;
}

export class GpuColorWrite {
  static red(): GpuFlagsConstant;
  static green(): GpuFlagsConstant;
  static blue(): GpuFlagsConstant;
  static alpha(): GpuFlagsConstant;
  static all(): GpuFlagsConstant;
}

export class GpuCommandBuffer {
  label(): string;
  setLabel(label: string): void;
}

export class GpuCommandEncoder {
  beginRenderPass(descriptor: GpuRenderPassDescriptor): GpuRenderPassEncoder;
  beginComputePass(descriptor: GpuComputePassDescriptor | undefined): GpuComputePassEncoder;
  copyBufferToBuffer(source: GpuBuffer, sourceOffset: GpuSize64, destination: GpuBuffer, destinationOffset: GpuSize64, size: GpuSize64): void;
  copyBufferToTexture(source: GpuImageCopyBuffer, destination: GpuImageCopyTexture, copySize: GpuExtent3D): void;
  copyTextureToBuffer(source: GpuImageCopyTexture, destination: GpuImageCopyBuffer, copySize: GpuExtent3D): void;
  copyTextureToTexture(source: GpuImageCopyTexture, destination: GpuImageCopyTexture, copySize: GpuExtent3D): void;
  clearBuffer(buffer: GpuBuffer, offset: GpuSize64 | undefined, size: GpuSize64 | undefined): void;
  resolveQuerySet(querySet: GpuQuerySet, firstQuery: GpuSize32, queryCount: GpuSize32, destination: GpuBuffer, destinationOffset: GpuSize64): void;
  finish(descriptor: GpuCommandBufferDescriptor | undefined): GpuCommandBuffer;
  label(): string;
  setLabel(label: string): void;
  pushDebugGroup(groupLabel: string): void;
  popDebugGroup(): void;
  insertDebugMarker(markerLabel: string): void;
}

export class GpuCompilationInfo {
  messages(): Array<GpuCompilationMessage>;
}

export class GpuCompilationMessage {
  message(): string;
  type(): GpuCompilationMessageType;
  lineNum(): bigint;
  linePos(): bigint;
  offset(): bigint;
  length(): bigint;
}

export class GpuComputePassEncoder {
  setPipeline(pipeline: GpuComputePipeline): void;
  dispatchWorkgroups(workgroupCountX: GpuSize32, workgroupCountY: GpuSize32 | undefined, workgroupCountZ: GpuSize32 | undefined): void;
  dispatchWorkgroupsIndirect(indirectBuffer: GpuBuffer, indirectOffset: GpuSize64): void;
  end(): void;
  label(): string;
  setLabel(label: string): void;
  pushDebugGroup(groupLabel: string): void;
  popDebugGroup(): void;
  insertDebugMarker(markerLabel: string): void;
  setBindGroup(index: GpuIndex32, bindGroup: GpuBindGroup | undefined, dynamicOffsets: Uint32Array | undefined): void;
}

export class GpuComputePipeline {
  label(): string;
  setLabel(label: string): void;
  getBindGroupLayout(index: number): GpuBindGroupLayout;
}

export class GpuDevice {
  connectGraphicsContext(context: Context): void;
  features(): GpuSupportedFeatures;
  limits(): GpuSupportedLimits;
  queue(): GpuQueue;
  destroy(): void;
  createBuffer(descriptor: GpuBufferDescriptor): GpuBuffer;
  createTexture(descriptor: GpuTextureDescriptor): GpuTexture;
  createSampler(descriptor: GpuSamplerDescriptor | undefined): GpuSampler;
  createBindGroupLayout(descriptor: GpuBindGroupLayoutDescriptor): GpuBindGroupLayout;
  createPipelineLayout(descriptor: GpuPipelineLayoutDescriptor): GpuPipelineLayout;
  createBindGroup(descriptor: GpuBindGroupDescriptor): GpuBindGroup;
  createShaderModule(descriptor: GpuShaderModuleDescriptor): GpuShaderModule;
  createComputePipeline(descriptor: GpuComputePipelineDescriptor): GpuComputePipeline;
  createRenderPipeline(descriptor: GpuRenderPipelineDescriptor): GpuRenderPipeline;
  createComputePipelineAsync(descriptor: GpuComputePipelineDescriptor): GpuComputePipeline;
  createRenderPipelineAsync(descriptor: GpuRenderPipelineDescriptor): GpuRenderPipeline;
  createCommandEncoder(descriptor: GpuCommandEncoderDescriptor | undefined): GpuCommandEncoder;
  createRenderBundleEncoder(descriptor: GpuRenderBundleEncoderDescriptor): GpuRenderBundleEncoder;
  createQuerySet(descriptor: GpuQuerySetDescriptor): GpuQuerySet;
  label(): string;
  setLabel(label: string): void;
  lost(): GpuDeviceLostInfo;
  pushErrorScope(filter: GpuErrorFilter): void;
  popErrorScope(): GpuError | undefined;
  uncapturedErrors(): void;
  configure(configuration: GpuDeviceConfiguration): void;
}

export class GpuDeviceLostInfo {
  reason(): GpuDeviceLostReason;
  message(): string;
}

export class GpuError {
  message(): string;
}

export class GpuInternalError {
  message(): string;
  constructor(message: string)
}

export class GpuMapMode {
  static read(): GpuFlagsConstant;
  static write(): GpuFlagsConstant;
}

export class GpuOutOfMemoryError {
  message(): string;
  constructor(message: string)
}

export class GpuPipelineError {
  constructor(message: string | undefined, options: GpuPipelineErrorInit)
  reason(): GpuPipelineErrorReason;
}

export class GpuPipelineLayout {
  label(): string;
  setLabel(label: string): void;
}

export class GpuQuerySet {
  destroy(): void;
  type(): GpuQueryType;
  count(): GpuSize32Out;
  label(): string;
  setLabel(label: string): void;
}

export class GpuQueue {
  submit(commandBuffers: Array<GpuCommandBuffer>): void;
  onSubmittedWorkDone(): void;
  writeBuffer(buffer: GpuBuffer, bufferOffset: GpuSize64, dataOffset: GpuSize64 | undefined, data: Uint8Array, size: GpuSize64 | undefined): void;
  writeTexture(destination: GpuImageCopyTexture, data: Uint8Array, dataLayout: GpuImageDataLayout, size: GpuExtent3D): void;
  label(): string;
  setLabel(label: string): void;
}

export class GpuRenderBundle {
  label(): string;
  setLabel(label: string): void;
}

export class GpuRenderBundleEncoder {
  finish(descriptor: GpuRenderBundleDescriptor | undefined): GpuRenderBundle;
  label(): string;
  setLabel(label: string): void;
  pushDebugGroup(groupLabel: string): void;
  popDebugGroup(): void;
  insertDebugMarker(markerLabel: string): void;
  setBindGroup(index: GpuIndex32, bindGroup: GpuBindGroup | undefined, dynamicOffsets: Uint32Array | undefined): void;
  setPipeline(pipeline: GpuRenderPipeline): void;
  setIndexBuffer(buffer: GpuBuffer, indexFormat: GpuIndexFormat, offset: GpuSize64 | undefined, size: GpuSize64 | undefined): void;
  setVertexBuffer(slot: GpuIndex32, buffer: GpuBuffer | undefined, offset: GpuSize64 | undefined, size: GpuSize64 | undefined): void;
  draw(vertexCount: GpuSize32, instanceCount: GpuSize32 | undefined, firstVertex: GpuSize32 | undefined, firstInstance: GpuSize32 | undefined): void;
  drawIndexed(indexCount: GpuSize32, instanceCount: GpuSize32 | undefined, firstIndex: GpuSize32 | undefined, baseVertex: GpuSignedOffset32 | undefined, firstInstance: GpuSize32 | undefined): void;
  drawIndirect(indirectBuffer: GpuBuffer, indirectOffset: GpuSize64): void;
  drawIndexedIndirect(indirectBuffer: GpuBuffer, indirectOffset: GpuSize64): void;
}

export class GpuRenderPassEncoder {
  setViewport(x: number, y: number, width: number, height: number, minDepth: number, maxDepth: number): void;
  setScissorRect(x: GpuIntegerCoordinate, y: GpuIntegerCoordinate, width: GpuIntegerCoordinate, height: GpuIntegerCoordinate): void;
  setBlendConstant(color: GpuColor): void;
  setStencilReference(reference: GpuStencilValue): void;
  beginOcclusionQuery(queryIndex: GpuSize32): void;
  endOcclusionQuery(): void;
  executeBundles(bundles: Array<GpuRenderBundle>): void;
  end(): void;
  label(): string;
  setLabel(label: string): void;
  pushDebugGroup(groupLabel: string): void;
  popDebugGroup(): void;
  insertDebugMarker(markerLabel: string): void;
  setBindGroup(index: GpuIndex32, bindGroup: GpuBindGroup | undefined, dynamicOffsets: Uint32Array | undefined): void;
  setPipeline(pipeline: GpuRenderPipeline): void;
  setIndexBuffer(buffer: GpuBuffer, indexFormat: GpuIndexFormat, offset: GpuSize64 | undefined, size: GpuSize64 | undefined): void;
  setVertexBuffer(slot: GpuIndex32, buffer: GpuBuffer | undefined, offset: GpuSize64 | undefined, size: GpuSize64 | undefined): void;
  draw(vertexCount: GpuSize32, instanceCount: GpuSize32 | undefined, firstVertex: GpuSize32 | undefined, firstInstance: GpuSize32 | undefined): void;
  drawIndexed(indexCount: GpuSize32, instanceCount: GpuSize32 | undefined, firstIndex: GpuSize32 | undefined, baseVertex: GpuSignedOffset32 | undefined, firstInstance: GpuSize32 | undefined): void;
  drawIndirect(indirectBuffer: GpuBuffer, indirectOffset: GpuSize64): void;
  drawIndexedIndirect(indirectBuffer: GpuBuffer, indirectOffset: GpuSize64): void;
}

export class GpuRenderPipeline {
  label(): string;
  setLabel(label: string): void;
  getBindGroupLayout(index: number): GpuBindGroupLayout;
}

export class GpuSampler {
  label(): string;
  setLabel(label: string): void;
}

export class GpuShaderModule {
  getCompilationInfo(): GpuCompilationInfo;
  label(): string;
  setLabel(label: string): void;
}

export class GpuShaderStage {
  static vertex(): GpuFlagsConstant;
  static fragment(): GpuFlagsConstant;
  static compute(): GpuFlagsConstant;
}

export class GpuSupportedFeatures {
  has(value: string): boolean;
}

export class GpuSupportedLimits {
  maxTextureDimension1D(): number;
  maxTextureDimension2D(): number;
  maxTextureDimension3D(): number;
  maxTextureArrayLayers(): number;
  maxBindGroups(): number;
  maxBindGroupsPlusVertexBuffers(): number;
  maxBindingsPerBindGroup(): number;
  maxDynamicUniformBuffersPerPipelineLayout(): number;
  maxDynamicStorageBuffersPerPipelineLayout(): number;
  maxSampledTexturesPerShaderStage(): number;
  maxSamplersPerShaderStage(): number;
  maxStorageBuffersPerShaderStage(): number;
  maxStorageTexturesPerShaderStage(): number;
  maxUniformBuffersPerShaderStage(): number;
  maxUniformBufferBindingSize(): bigint;
  maxStorageBufferBindingSize(): bigint;
  minUniformBufferOffsetAlignment(): number;
  minStorageBufferOffsetAlignment(): number;
  maxVertexBuffers(): number;
  maxBufferSize(): bigint;
  maxVertexAttributes(): number;
  maxVertexBufferArrayStride(): number;
  maxInterStageShaderVariables(): number;
  maxColorAttachments(): number;
  maxColorAttachmentBytesPerSample(): number;
  maxComputeWorkgroupStorageSize(): number;
  maxComputeInvocationsPerWorkgroup(): number;
  maxComputeWorkgroupSizeX(): number;
  maxComputeWorkgroupSizeY(): number;
  maxComputeWorkgroupSizeZ(): number;
  maxComputeWorkgroupsPerDimension(): number;
}

export class GpuTexture {
  static fromGraphicsBuffer(buffer: AbstractBuffer): GpuTexture;
  createView(descriptor: GpuTextureViewDescriptor | undefined): GpuTextureView;
  destroy(): void;
  width(): GpuIntegerCoordinateOut;
  height(): GpuIntegerCoordinateOut;
  depthOrArrayLayers(): GpuIntegerCoordinateOut;
  mipLevelCount(): GpuIntegerCoordinateOut;
  sampleCount(): GpuSize32Out;
  dimension(): GpuTextureDimension;
  format(): GpuTextureFormat;
  usage(): GpuFlagsConstant;
  label(): string;
  setLabel(label: string): void;
}

export class GpuTextureUsage {
  static copySrc(): GpuFlagsConstant;
  static copyDst(): GpuFlagsConstant;
  static textureBinding(): GpuFlagsConstant;
  static storageBinding(): GpuFlagsConstant;
  static renderAttachment(): GpuFlagsConstant;
}

export class GpuTextureView {
  label(): string;
  setLabel(label: string): void;
}

export class GpuUncapturedErrorEvent {
  constructor(type: string, gpuUncapturedErrorEventInitDict: GpuUncapturedErrorEventInit)
  error(): GpuError;
}

export class GpuValidationError {
  message(): string;
  constructor(message: string)
}

export class NonStandardBuffer {
  get(): Uint8Array;
  set(val: Uint8Array): void;
}

export class RecordGpuPipelineConstantValue {
  constructor()
  add(key: string, value: GpuPipelineConstantValue): void;
  get(key: string): GpuPipelineConstantValue;
  has(key: string): boolean;
  remove(key: string): void;
  keys(): Array<string>;
  values(): Float64Array;
  entries(): [string, GpuPipelineConstantValue];
}

export class RecordGpuSize64 {
  constructor()
  add(key: string, value: GpuSize64): void;
  get(key: string): GpuSize64;
  has(key: string): boolean;
  remove(key: string): void;
  keys(): Array<string>;
  values(): BigUint64Array;
  entries(): [string, GpuSize64];
}

export class WgslLanguageFeatures {
  has(value: string): boolean;
}
