export class Extractors {
    static Iterable(items) {
        return channel => channel.yieldMany(Array.from(items));
    }
    static Sequence(start, end) {
        return channel => {
            for (let i = start; i <= end; i++) {
                channel.yield(i);
            }
        };
    }
}
