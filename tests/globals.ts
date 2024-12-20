import { getGpu, GPU, GPUAdapter, GPUDevice, GPUQueue, GPUBuffer, GPUBufferUsage, GPUMapMode, GPUTextureUsage, GPUTexture, GPUTextureView, GPUSampler, GPUBindGroupLayout, GPUPipelineLayout, GPUBindGroup, GPUShaderModule, GPUShaderStage, GPUComputePipeline, GPURenderPipeline, GPUColorWrite, GPUCommandEncoder, GPURenderPassEncoder, GPUComputePassEncoder, GPUCommandBuffer, GPUQuerySet } from "../src/index";

class Navigator implements Pick<globalThis.Navigator, "gpu"> {
  gpu: GPU;
  constructor() {
    this.gpu = getGpu();
  }
}

function defineGlobal<T>(name: string, value: T) {
  Object.defineProperty(globalThis, name, {
    value,
    writable: true,
    enumerable: true,
    configurable: true,
  });
}

export function declareGlobals() {
  defineGlobal("window", globalThis);
  defineGlobal("navigator", new Navigator());
  defineGlobal("GPU", GPU);
  defineGlobal("GPUAdapter", GPUAdapter);
  // defineGlobal("GPUAdapterInfo", GPUAdapterInfo);
  // defineGlobal("GPUSupportedLimits", GPUSupportedLimits);
  // defineGlobal("GPUSupportedFeatures", GPUSupportedFeatures);
  // defineGlobal("GPUDeviceLostInfo", GPUDeviceLostInfo);
  defineGlobal("GPUDevice", GPUDevice);
  defineGlobal("GPUQueue", GPUQueue);
  defineGlobal("GPUBuffer", GPUBuffer);
  defineGlobal("GPUBufferUsage", GPUBufferUsage);
  defineGlobal("GPUMapMode", GPUMapMode);
  defineGlobal("GPUTextureUsage", GPUTextureUsage);
  defineGlobal("GPUTexture", GPUTexture);
  defineGlobal("GPUTextureView", GPUTextureView);
  defineGlobal("GPUSampler", GPUSampler);
  defineGlobal("GPUBindGroupLayout", GPUBindGroupLayout);
  defineGlobal("GPUPipelineLayout", GPUPipelineLayout);
  defineGlobal("GPUBindGroup", GPUBindGroup);
  defineGlobal("GPUShaderModule", GPUShaderModule);
  defineGlobal("GPUShaderStage", GPUShaderStage);
  defineGlobal("GPUComputePipeline", GPUComputePipeline);
  defineGlobal("GPURenderPipeline", GPURenderPipeline);
  defineGlobal("GPUColorWrite", GPUColorWrite);
  defineGlobal("GPUCommandEncoder", GPUCommandEncoder);
  defineGlobal("GPURenderPassEncoder", GPURenderPassEncoder);
  defineGlobal("GPUComputePassEncoder", GPUComputePassEncoder);
  defineGlobal("GPUCommandBuffer", GPUCommandBuffer);
  // defineGlobal("GPURenderBundleEncoder", GPURenderBundleEncoder);
  // defineGlobal("GPURenderBundle", GPURenderBundle);
  defineGlobal("GPUQuerySet", GPUQuerySet);
  // defineGlobal("GPUError", GPUError);
  // defineGlobal("GPUValidationError", GPUValidationError);
  // defineGlobal("GPUOutOfMemoryError", GPUOutOfMemoryError);
}
