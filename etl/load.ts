import { IReadableChannel } from '../streamline/stream';

export interface ILoader<T> {
    (action: IReadableChannel<T>): void;
}

export interface IDataTarget<TSpecification, TInput> {
    load(specification: TSpecification, channel: IReadableChannel<TInput>): void;
}

export interface IGenericDataTarget<TSpecification> extends IDataTarget<TSpecification, object> {
    load<TInput>(specification: TSpecification, channel: IReadableChannel<TInput>): void;
}
