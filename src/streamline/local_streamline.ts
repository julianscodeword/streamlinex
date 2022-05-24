import { Observable, Subject } from 'rxjs';
import { IStream, IReadableChannel, IStreamFactory, IWriteableChannel } from './streamline';
import { IExtractor } from '../etl/extract';
import { ITransformer } from '../etl/transform';
import { ILoader } from '../etl/load';
import { Action, Runnable } from '../aliases';
import { bufferCount as bufferObservable, flatMap as flatmapObservable, map as mapObservable, publish as publishObservable } from 'rxjs/operators';

class LocalStreamFactory implements IStreamFactory {

    public extract<T>(extractor: IExtractor<T>): IStream<T> {
        const subject = new Subject<T>();
        const connectableObservable = publishObservable<T>()(subject);
        const channel = new LocalChannel<T>(subject, () => {
            connectableObservable.connect();
            extractor(channel);
            subject.complete();
        });
        const stream = new LocalStream<T>(channel);

        return stream;
    }

}

class LocalReadableChannel<T> implements IReadableChannel<T> {
 
    public constructor(
        private observable: Observable<T>,
        public open: Runnable
    ) {}

    public map<TX>(transformer: ITransformer<T, TX>): LocalReadableChannel<TX> {
        return new LocalReadableChannel<TX>(mapObservable<T, TX>(transformer)(this.observable), this.open);
    }

    public flatMap<TX>(transformer: ITransformer<T, Array<TX>>): LocalReadableChannel<TX> {
        return new LocalReadableChannel<TX>(flatmapObservable<T, TX>(transformer)(this.observable), this.open);
    }

    public buffer(size: number): IReadableChannel<Array<T>> {
        return new LocalReadableChannel<Array<T>>(bufferObservable<T>(size)(this.observable), this.open);
    }

    public forEach(action: Action<T>): void {
        this.observable.forEach(action);
    }

}

class LocalChannel<T> extends LocalReadableChannel<T> implements IWriteableChannel<T> {

    public constructor(
        private subject: Subject<T>,
        _open: Runnable
    ) {
        super(subject, _open);
    }

    public yield(...items: Array<T>): void {
        this.yieldMany(items);
    }

    public yieldMany(items: Array<T>): void {
        const self = this;
        items.forEach(item => self.subject.next(item));
    }

}

class LocalStream<T> implements IStream<T> {

    public constructor(private channel: LocalReadableChannel<T>) {}

    public transform<TX>(transformer: ITransformer<T, TX>): IStream<TX> {
        return new LocalStream<TX>(this.channel.map(transformer));
    }

    public oneToMany<TX>(transformer: ITransformer<T, Array<TX>>): IStream<TX> {
        return new LocalStream<TX>(this.channel.flatMap(transformer));
    }

    public load(loader: ILoader<T>): IStream<T> {
        loader(this.channel);
        return this;
    }
    
    public run: Runnable = this.channel.open;

}

export class Streams {
    public static Local = new LocalStreamFactory();
}
