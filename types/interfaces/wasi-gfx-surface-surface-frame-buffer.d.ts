/** @module Interface wasi-gfx:surface/surface-frame-buffer@0.2.0 **/
export type Buffer = import('./wasi-gfx-frame-buffer-frame-buffer.js').Buffer;
export type Surface = import('./wasi-gfx-surface-surface.js').Surface;

export class Context {
  constructor(surface: Surface)
  getCurrentBuffer(): Buffer;
  /**
  * TODO: consider if needed
  */
  present(): void;
}
