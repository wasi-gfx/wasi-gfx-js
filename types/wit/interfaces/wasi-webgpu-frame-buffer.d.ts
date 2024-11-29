export namespace WasiWebgpuFrameBuffer {
  export { Device };
  export { Buffer };
}
import type { Context } from './wasi-webgpu-graphics-context.js';
export { Context };
import type { AbstractBuffer } from './wasi-webgpu-graphics-context.js';
export { AbstractBuffer };

export class Buffer {
  static fromGraphicsBuffer(buffer: AbstractBuffer): Buffer;
  /**
  * TODO: This should be replcated with something that doesn't require a copy.
  */
  get(): Uint8Array;
  set(val: Uint8Array): void;
}

export class Device {
  constructor()
  connectGraphicsContext(context: Context): void;
}
