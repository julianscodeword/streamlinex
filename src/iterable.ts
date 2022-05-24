export function* mapIterable<T, TO>(input: Iterable<T>, transformation: (data: T) => TO): IterableIterator<TO> {
    for (let item of input) {
        yield transformation(item);
    }
}

export function* flatMap<T, TO>(input: Iterable<T>, transformation: (data: T) => Array<TO>): IterableIterator<TO> {
    for (let item of input) {
        for (let listItem of transformation(item)) {
            yield listItem;
        }
    }
}

export function* sequence(start: number, end: number): IterableIterator<number> {
    for (let i = start; i < end; i++) {
        yield i;
    }
}
