export function* mapIterable<T, TO>(input: Iterable<T>, transformation: (data: T) => TO): Iterable<TO> {
    for (let item of input) {
        yield transformation(item);
    }
}

export function* castIterable<T>(input: Iterable<any>): Iterable<T> {
    for (let item of input) {
        yield (item) as T;
    }
}

export function* flatMap<T, TO>(input: Iterable<T>, transformation: (data: T) => Array<TO>): Iterable<TO> {
    for (let item of input) {
        for (let listItem of transformation(item)) {
            yield listItem;
        }
    }
}

export function* sequence(start: number, end: number): Iterable<number> {
    for (let i = start; i < end; i++) {
        yield i;
    }
}
