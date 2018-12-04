import { IWriteableChannel } from '../streamline/stream';

export interface IExtractor<T> {
    (channel: IWriteableChannel<T>): void;
}

export interface IDataSource<TSpec, TOutput> {
    extract(specification: TSpec, channel: IWriteableChannel<TOutput>): void;
}

export interface IGenericDataSource<TSpec> extends IDataSource<TSpec, object> {
    extract<TOutput>(specification: TSpec, channel: IWriteableChannel<TOutput>): void;
}
