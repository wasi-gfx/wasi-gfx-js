
// https://dom.spec.whatwg.org/#interface-eventtarget
export class EventTarget {
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

export class Todo extends Error {
    constructor() {
        super("TODO: not yet implemented");
    }
}

export class Unimplemented extends Error {
    constructor() {
        super("Unimplemented.");
    }
}

export class Unreachable extends Error {
    constructor() {
        super("Unreachable code reached.");
    }
}

export const inner = Symbol("inner");
export const key = Symbol("key");
export function privateConstructorCalled(k: symbol) {
    if (k !== key) throw new TypeError("Illegal constructor.");
}
