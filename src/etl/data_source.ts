export interface IExtractor<T> {
    (): Iterable<T>;
}

export interface IDataSource<TSpec, TOutput> {
    extract(specification: TSpec): Iterable<TOutput>;
}

export interface IGenericDataSource<TSpec> extends IDataSource<TSpec, object> {
    extract<TOutput>(specification: TSpec): Iterable<TOutput>;
}
