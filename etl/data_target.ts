import { IStream } from "../streamline/stream";

export interface ILoader<T> {
    (stream: IStream<T>): void;
}

export interface IDataTarget<TSpecification, TInput> {
    load(specification: TSpecification, stream: IStream<TInput>): void;
}

export interface IGenericDataTarget<TSpecification> extends IDataTarget<TSpecification, object> {
    load<TInput>(specification: TSpecification, stream: IStream<TInput>): void;
}
