import { Observable } from 'rxjs';
import { IStream, IStreamFactory } from './stream';
import { ITransformer } from '../etl/transform';
import { Action, Runnable } from '../aliases';
import { bufferCount as bufferObservable, flatMap as flatmapObservable, map as mapObservable, publish as publishObservable } from 'rxjs/operators';
import { from as observableFrom } from 'rxjs';
import { ILoader } from '../etl/data_target';

class LocalStreamFactory implements IStreamFactory {

    public extract<T>(source: Iterable<T>): IStream<T> {
        const observable = observableFrom(source);
        const connObservable = publishObservable<T>()(observable);
        return new LocalStream<T>(connObservable, () => connObservable.connect());
    }

}

class LocalStream<T> implements IStream<T> {
    public constructor(
        private observable: Observable<T>,
        public run: Runnable
    ) {}

    public transform<TX>(transformer: ITransformer<T, TX>): IStream<TX> {
        return new LocalStream<TX>(mapObservable<T, TX>(transformer)(this.observable), this.run);
    }

    public oneToMany<TX>(transformer: ITransformer<T, Array<TX>>): IStream<TX> {
        return new LocalStream<TX>(flatmapObservable<T, TX>(transformer)(this.observable), this.run);
    }

    public buffer(size: number): IStream<Array<T>> {
        return new LocalStream<Array<T>>(bufferObservable<T>(size)(this.observable), this.run);
    }

    public forEach(action: Action<T>): IStream<T> {
        this.observable.forEach(action);
        return this;
    }

    public load(loader: ILoader<T>): IStream<T> {
        loader(this);
        return this;
    }

}

export class Streams {
    public static Local = new LocalStreamFactory();
}
