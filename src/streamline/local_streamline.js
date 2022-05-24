import { Subject } from 'rxjs';
import { bufferCount as bufferObservable, flatMap as flatmapObservable, map as mapObservable, publish as publishObservable } from 'rxjs/operators';
class LocalStreamFactory {
    extract(extractor) {
        const subject = new Subject();
        const connectableObservable = publishObservable()(subject);
        const channel = new LocalChannel(subject, () => {
            connectableObservable.connect();
            extractor(channel);
            subject.complete();
        });
        const stream = new LocalStream(channel);
        return stream;
    }
}
class LocalReadableChannel {
    constructor(observable, open) {
        this.observable = observable;
        this.open = open;
    }
    map(transformer) {
        return new LocalReadableChannel(mapObservable(transformer)(this.observable), this.open);
    }
    flatMap(transformer) {
        return new LocalReadableChannel(flatmapObservable(transformer)(this.observable), this.open);
    }
    buffer(size) {
        return new LocalReadableChannel(bufferObservable(size)(this.observable), this.open);
    }
    forEach(action) {
        this.observable.forEach(action);
    }
}
class LocalChannel extends LocalReadableChannel {
    constructor(subject, _open) {
        super(subject, _open);
        this.subject = subject;
    }
    yield(...items) {
        this.yieldMany(items);
    }
    yieldMany(items) {
        const self = this;
        items.forEach(item => self.subject.next(item));
    }
}
class LocalStream {
    constructor(channel) {
        this.channel = channel;
        this.run = this.channel.open;
    }
    transform(transformer) {
        return new LocalStream(this.channel.map(transformer));
    }
    oneToMany(transformer) {
        return new LocalStream(this.channel.flatMap(transformer));
    }
    load(loader) {
        loader(this.channel);
        return this;
    }
}
export class Streams {
}
Streams.Local = new LocalStreamFactory();
