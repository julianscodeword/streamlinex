import { flatMap } from "../iterable";
import { IDataSource } from "./data_source";

export class PageSpec<TOffset> {
    public constructor(
        public offset: TOffset,
        public size: number
    ) {}
}

export class PagingDataSource<TSpec, TOutput> implements IDataSource<TSpec, TOutput> {
    public constructor(
        private underlying: IDataSource<[TSpec, PageSpec<number>], TOutput>,
        private initialOffset: number = 0,
        private defaultPageSize: number = 1000,
    ) {}

    public extract(extraSpec: TSpec): Iterable<TOutput> {
        const pager = new Pager<TOutput, number>((pageSpec) => {
            const data = Array.from(this.underlying.extract([extraSpec, pageSpec]));
            return new Page(data, Option.of<number>(pageSpec.offset + data.length));
        }, this.initialOffset, this.defaultPageSize);
        return pager.data;
    }
}

export class Option<T> {
    public static of<V>(value: V): Option<V> { return new Option<V>(value, true); }
    public static none<V>(): Option<V> { return new Option<V>(null, false); }

    constructor(public value: T, public hasValue: boolean) {}
}

export class Page<TData, TOffset> {
    public constructor(
        public data: Array<TData>,
        public next: Option<TOffset>
    ) {}

    public get hasData() { return this.size > 0; }
    public get size() { return this.data.length; }
}

export interface IPageRetriever<TRecord, TOffset> {
    (pageSpec: PageSpec<TOffset>): Page<TRecord, TOffset>;
}

export class Pager<TData, TOffset> {
    public constructor(
        private retriever: IPageRetriever<TData, TOffset>,
        private initialOffset: TOffset,
        private pageSize: number = 1000
    ) {}

    public get data(): Iterable<TData> { return flatMap(this.getData(), x => x); }
    public get pagedData(): Iterable<Array<TData>> { return this.getData(); }

    private *getData(): Iterable<Array<TData>> {
        var offset = this.initialOffset;

        while (true)
        {
            var page = this.retriever(new PageSpec(offset, this.pageSize));

            if (!page.hasData)
                return;

            yield page.data;

            if (!page.next.hasValue)
                return;

            offset = page.next.value;
        }
    }
}
