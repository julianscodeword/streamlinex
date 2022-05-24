import { bufferCount as bufferObservable, flatMap as flatmapObservable, map as mapObservable, publish as publishObservable } from 'rxjs/operators';
import { from as observableFrom } from 'rxjs';
class LocalStreamFactory {
    extract(source) {
        const observable = observableFrom(source);
        const connObservable = publishObservable()(observable);
        return new LocalStream(connObservable, () => connObservable.connect());
    }
}
class LocalStream {
    constructor(observable, run) {
        this.observable = observable;
        this.run = run;
    }
    transform(transformer) {
        return new LocalStream(mapObservable(transformer)(this.observable), this.run);
    }
    oneToMany(transformer) {
        return new LocalStream(flatmapObservable(transformer)(this.observable), this.run);
    }
    buffer(size) {
        return new LocalStream(bufferObservable(size)(this.observable), this.run);
    }
    forEach(action) {
        this.observable.forEach(action);
        return this;
    }
    load(loader) {
        loader(this);
        return this;
    }
}
export class Streams {
}
Streams.Local = new LocalStreamFactory();
