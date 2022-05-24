export function* mapIterable(input, transformation) {
    for (let item of input) {
        yield transformation(item);
    }
}
export function* flatMap(input, transformation) {
    for (let item of input) {
        for (let listItem of transformation(item)) {
            yield listItem;
        }
    }
}
export function* sequence(start, end) {
    for (let i = start; i < end; i++) {
        yield i;
    }
}
