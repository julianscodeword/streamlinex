import { IExtractor } from '../etl/extract';
import { ILoader } from '../etl/load';

export class InMemoryStore<T> {

    public static Empty<T>(): InMemoryStore<T> {
        return new InMemoryStore<T>();
    }

    public static ForSeveral<T>(...data: Array<T>): InMemoryStore<T> {
        return new InMemoryStore<T>(data);
    }

    public static For<T>(data: Array<T>): InMemoryStore<T> {
        return new InMemoryStore<T>(data);
    }

    private constructor(
        private readonly data: Array<T> = new Array<T>()
    ) {}

    public extract: IExtractor<T> = stream => {
        this.data.forEach(item => stream.yield(item));
    }

    public load: ILoader<T> = stream => {
        stream.forEach(item => this.data.push(item));
    }

}
