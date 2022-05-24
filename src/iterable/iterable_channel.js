export class IterableChannel {
    [Symbol.iterator]() {
        throw new Error("Method not implemented.");
    }
    yield(...items) {
        throw new Error("Method not implemented.");
    }
    yieldMany(items) {
        throw new Error("Method not implemented.");
    }
}
