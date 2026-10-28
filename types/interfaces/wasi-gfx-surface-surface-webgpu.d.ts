/** @module Interface wasi-gfx:surface/surface-webgpu@0.2.0 **/
export type GpuDevice = import('./wasi-webgpu-webgpu.js').GpuDevice;
export type GpuTexture = import('./wasi-webgpu-webgpu.js').GpuTexture;
export type GpuTextureFormat = import('./wasi-webgpu-webgpu.js').GpuTextureFormat;
export type GpuTextureUsage = import('./wasi-webgpu-webgpu.js').GpuTextureUsage;
export type PredefinedColorSpace = import('./wasi-webgpu-webgpu.js').PredefinedColorSpace;
export type GpuCanvasToneMapping = import('./wasi-webgpu-webgpu.js').GpuCanvasToneMapping;
export type GpuCanvasAlphaMode = import('./wasi-webgpu-webgpu.js').GpuCanvasAlphaMode;
export type Surface = import('./wasi-gfx-surface-surface.js').Surface;
export interface ContextConfiguration {
  device: GpuDevice,
  format: GpuTextureFormat,
  usage?: GpuTextureUsage,
  viewFormats?: Array<GpuTextureFormat>,
  colorSpace?: PredefinedColorSpace,
  toneMapping?: GpuCanvasToneMapping,
  alphaMode?: GpuCanvasAlphaMode,
}

export class Context {
  constructor(surface: Surface)
  configure(configuration: ContextConfiguration): void;
  unconfigure(): void;
  getCurrentTexture(): GpuTexture;
  /**
  * TODO: consider if needed
  */
  present(): void;
}
