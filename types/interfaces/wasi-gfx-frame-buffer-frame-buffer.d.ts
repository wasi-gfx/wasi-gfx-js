/** @module Interface wasi-gfx:frame-buffer/frame-buffer@0.2.0 **/

export class Buffer {
  /**
   * This type does not have a public constructor.
   */
  private constructor();
  /**
  * TODO: This should be replaced with something that doesn't require a copy.
  */
  getWithCopy(): Uint8Array;
  setWithCopy(val: Uint8Array): void;
}
