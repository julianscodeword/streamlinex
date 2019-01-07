import { ITransformer } from '../etl/transform';
import { Action, Runnable } from "../aliases";
import { ILoader } from '../etl/data_target';

export interface IStreamFactory {
    extract<T>(source: Iterable<T>): IStream<T>;
}

export interface IStream<T> {
    transform<TX>(transformer: ITransformer<T, TX>): IStream<TX>;
    oneToMany<TX>(transformer: ITransformer<T, Array<TX>>): IStream<TX>;
    buffer(size: number): IStream<Array<T>>;
    forEach(action: Action<T>): IStream<T>;
    load(loader: ILoader<T>): IStream<T>;
    run: Runnable;
}
