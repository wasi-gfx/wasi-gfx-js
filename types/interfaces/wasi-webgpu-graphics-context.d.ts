export namespace WasiWebgpuGraphicsContext {
  export { Context };
  export { AbstractBuffer };
}

export class AbstractBuffer {
}

export class Context {
  constructor()
  getCurrentBuffer(): AbstractBuffer;
  /**
  * TODO: might want to remove this.
  */
  present(): void;
}
