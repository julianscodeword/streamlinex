import { IExtractor } from "../etl/extract";
import { ITransformer } from '../etl/transform';
import { ILoader } from "../etl/load";
import { Action, Runnable } from "../aliases";

export interface IWriteableChannel<T> {
    yield(...items: Array<T>): void;
    yieldMany(items: Array<T>): void;
}

export interface IReadableChannel<T> {
    forEach(action: Action<T>): void;
    buffer(size: number): IReadableChannel<Array<T>>;
}

export interface IStreamFactory {
    extract<T>(extractor: IExtractor<T>): IStream<T>;
}

export interface IStream<T> {
    transform<TX>(transformer: ITransformer<T, TX>): IStream<TX>;
    oneToMany<TX>(transformer: ITransformer<T, Array<TX>>): IStream<TX>;
    load(loader: ILoader<T>): IStream<T>;
    run: Runnable;
}
