import { IExtractor } from "./extract";

export class Extractors {
	public static Iterable<T>(items: Iterable<T>): IExtractor<T> {
		return channel => channel.yieldMany(Array.from(items));
	}

	public static Sequence(start: number, end: number): IExtractor<number> {
		return channel => {
			for (let i = start; i <= end; i++) {
				channel.yield(i);
			}
		};
	}
}
