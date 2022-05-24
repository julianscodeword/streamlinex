export async function* mapIterable<T, TO>(input: AsyncIterable<T>, transformation: (data: T) => TO): AsyncIterable<TO> {
    for await (let item of input) {
        yield transformation(item);
    }
}

export async function* castIterable<T>(input: AsyncIterable<any>): AsyncIterable<T> {
    for await (let item of input) {
        yield (item) as T;
    }
}

export async function* flatMap<T, TO>(input: AsyncIterable<T>, transformation: (data: T) => Array<TO>): AsyncIterable<TO> {
    for await (let item of input) {
        for (let listItem of transformation(item)) {
            yield listItem;
        }
    }
}

export async function* sequence(start: number, end: number): AsyncIterable<number> {
    for (let i = start; i < end; i++) {
        yield <Promise<number>>new Promise(resolve => setTimeout(() => resolve(i), 1000));
    }
}

export async function* asAsync<T>(input: Iterable<T>): AsyncIterable<T> {
    for (let item of input) {
        yield item;
    }
}

export async function collect<T>(input: AsyncIterable<T>): Promise<Iterable<T>> {
    const result = new Array<T>();

    for await (let item of input) {
        result.push(item);
    }

    return result;
}

export async function transformAsync<T, TO>(input: Promise<T>, transformation: ((data: T) => TO)): Promise<TO> {
    const value = await input;
    return transformation(value);
}
