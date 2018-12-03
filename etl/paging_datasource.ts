import { IDataSource } from './extract';

// const source = new Simple();
// const pagingSource = new PagingDataSource<number, number, number>(source, 0);
// const result = pagingSource.extract(10);

// export class PageSpecification<TSpec, TOffset> {
//     public constructor(
//         public data: TSpec,
//         public offset: TOffset,
//         public size: number
//     ) {}
// }

// export class PagingDataSource<TSpec, TOutput, TOffset> implements IDataSource<TSpec, TOutput> {
//     public constructor(
//         private underlying: IDataSource<PageSpecification<TSpec, TOffset>, TOutput>,
//         private initialOffset: TOffset,
//         private defaultPageSize: number = 1000,
//     ) {}

//     public extract(specification: TSpec): AsyncIterable<TOutput> {
//         const pager = new Pager<TOutput, TOffset>((offset, size) => {
//             const data = collect(this.underlying.extract(new PageSpecification(specification, offset, size)));
//             return transformAsync(data, d => new Page(d, null, null));
//         }, this.defaultPageSize, this.initialOffset);
//         return pager.data;
//     }
// }

// export class Page<TData, TOffset> {
//     public constructor(
//         public data: Array<TData>,
//         public next: TOffset,
//         public hasNext: boolean
//     ) {}

//     public get hasData() { return this.data.length > 0; }
// }

// export interface IPageRetriever<TRecord, TOffset> {
//     (offset: TOffset, size: number): Promise<Page<TRecord, TOffset>>;
// }

// export class Pager<TData, TOffset> {
//     public constructor(
//         private retriever: IPageRetriever<TData, TOffset>,
//         private defaultPageSize: number,
//         private initialOffset: TOffset
//     ) {}

//     public get data(): AsyncIterable<TData> { return flatMap(this.getData()); }
//     public get pagedData(): AsyncIterable<Array<TData>> { return this.getData(); }

//     private async *getData(): AsyncIterable<Array<TData>> {
//         var offset = this.initialOffset;

//         while (true)
//         {
//             var page = await this.retriever(offset, this.defaultPageSize);

//             if (!page.hasData)
//                 return;

//             yield page.data;

//             if (!page.hasNext)
//                 return;

//             offset = page.next;
//         }
//     }
// }
