var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
System.register("aliases", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("async", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function mapIterable(input, transformation) {
        return __asyncGenerator(this, arguments, function* mapIterable_1() {
            var e_1, _a;
            try {
                for (var input_1 = __asyncValues(input), input_1_1; input_1_1 = yield __await(input_1.next()), !input_1_1.done;) {
                    let item = input_1_1.value;
                    yield yield __await(transformation(item));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (input_1_1 && !input_1_1.done && (_a = input_1.return)) yield __await(_a.call(input_1));
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
    exports_2("mapIterable", mapIterable);
    function castIterable(input) {
        return __asyncGenerator(this, arguments, function* castIterable_1() {
            var e_2, _a;
            try {
                for (var input_2 = __asyncValues(input), input_2_1; input_2_1 = yield __await(input_2.next()), !input_2_1.done;) {
                    let item = input_2_1.value;
                    yield yield __await((item));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (input_2_1 && !input_2_1.done && (_a = input_2.return)) yield __await(_a.call(input_2));
                }
                finally { if (e_2) throw e_2.error; }
            }
        });
    }
    exports_2("castIterable", castIterable);
    function flatMap(input, transformation) {
        return __asyncGenerator(this, arguments, function* flatMap_1() {
            var e_3, _a;
            try {
                for (var input_3 = __asyncValues(input), input_3_1; input_3_1 = yield __await(input_3.next()), !input_3_1.done;) {
                    let item = input_3_1.value;
                    for (let listItem of transformation(item)) {
                        yield yield __await(listItem);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (input_3_1 && !input_3_1.done && (_a = input_3.return)) yield __await(_a.call(input_3));
                }
                finally { if (e_3) throw e_3.error; }
            }
        });
    }
    exports_2("flatMap", flatMap);
    function sequence(start, end) {
        return __asyncGenerator(this, arguments, function* sequence_1() {
            for (let i = start; i < end; i++) {
                yield yield __await(new Promise(resolve => setTimeout(() => resolve(i), 1000)));
            }
        });
    }
    exports_2("sequence", sequence);
    function asAsync(input) {
        return __asyncGenerator(this, arguments, function* asAsync_1() {
            for (let item of input) {
                yield yield __await(item);
            }
        });
    }
    exports_2("asAsync", asAsync);
    function collect(input) {
        var input_4, input_4_1;
        var e_4, _a;
        return __awaiter(this, void 0, void 0, function* () {
            const result = new Array();
            try {
                for (input_4 = __asyncValues(input); input_4_1 = yield input_4.next(), !input_4_1.done;) {
                    let item = input_4_1.value;
                    result.push(item);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (input_4_1 && !input_4_1.done && (_a = input_4.return)) yield _a.call(input_4);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return result;
        });
    }
    exports_2("collect", collect);
    function transformAsync(input, transformation) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield input;
            return transformation(value);
        });
    }
    exports_2("transformAsync", transformAsync);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("iterable", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function* mapIterable(input, transformation) {
        for (let item of input) {
            yield transformation(item);
        }
    }
    exports_3("mapIterable", mapIterable);
    function* flatMap(input, transformation) {
        for (let item of input) {
            for (let listItem of transformation(item)) {
                yield listItem;
            }
        }
    }
    exports_3("flatMap", flatMap);
    function* sequence(start, end) {
        for (let i = start; i < end; i++) {
            yield i;
        }
    }
    exports_3("sequence", sequence);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("iterable.spec", ["jasmine", "iterable"], function (exports_4, context_4) {
    "use strict";
    var iterable_js_1;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (_1) {
            },
            function (iterable_js_1_1) {
                iterable_js_1 = iterable_js_1_1;
            }
        ],
        execute: function () {
            describe('iterable', () => {
                it('mapIterable returns expected values', () => {
                    const result = iterable_js_1.mapIterable([1, 2, 3], x => 2 * x);
                    expect(result.next().value).toBe(2);
                    expect(result.next().value).toBe(4);
                    expect(result.next().value).toBe(6);
                });
                it('flatMap returns values unwrapped', () => {
                    const result = iterable_js_1.flatMap([1, 2], x => [x, 2 * x]);
                    expect(result.next().value).toBe(1);
                    expect(result.next().value).toBe(2);
                    expect(result.next().value).toBe(2);
                    expect(result.next().value).toBe(4);
                });
                it('sequence returns correct range', () => {
                    const result = iterable_js_1.sequence(1, 4);
                    expect(result.next().value).toBe(1);
                    expect(result.next().value).toBe(2);
                    expect(result.next().value).toBe(3);
                });
            });
        }
    };
});
System.register("etl/transform", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("etl/load", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("streamline/streamline", [], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("etl/extract", [], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("data/in_memory_store", [], function (exports_9, context_9) {
    "use strict";
    var InMemoryStore;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [],
        execute: function () {
            InMemoryStore = class InMemoryStore {
                constructor(data = new Array()) {
                    this.data = data;
                    this.extract = stream => {
                        this.data.forEach(item => stream.yield(item));
                    };
                    this.load = stream => {
                        stream.forEach(item => this.data.push(item));
                    };
                }
                static Empty() {
                    return new InMemoryStore();
                }
                static ForSeveral(...data) {
                    return new InMemoryStore(data);
                }
                static For(data) {
                    return new InMemoryStore(data);
                }
            };
            exports_9("InMemoryStore", InMemoryStore);
        }
    };
});
System.register("data/transaction", [], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("etl/data_source", [], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("streamline/stream", [], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("etl/data_target", [], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("etl/decorators", [], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    function cached(parameter) {
        return function (target, propertyKey, descriptor) {
            // do something
        };
    }
    exports_14("cached", cached);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("etl/extractors", [], function (exports_15, context_15) {
    "use strict";
    var Extractors;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [],
        execute: function () {
            Extractors = class Extractors {
                static Iterable(items) {
                    return channel => channel.yieldMany(Array.from(items));
                }
                static Sequence(start, end) {
                    return channel => {
                        for (let i = start; i <= end; i++) {
                            channel.yield(i);
                        }
                    };
                }
            };
            exports_15("Extractors", Extractors);
        }
    };
});
System.register("etl/loaders", [], function (exports_16, context_16) {
    "use strict";
    var Loaders;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [],
        execute: function () {
            Loaders = class Loaders {
                static ConsoleLoggingLoader(bufferLength) {
                    return channel => {
                        channel.buffer(bufferLength).forEach(console.log);
                    };
                }
            };
            exports_16("Loaders", Loaders);
        }
    };
});
System.register("etl/paging_datasource", ["iterable"], function (exports_17, context_17) {
    "use strict";
    var iterable_1, PageSpec, PagingDataSource, Option, Page, Pager;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [
            function (iterable_1_1) {
                iterable_1 = iterable_1_1;
            }
        ],
        execute: function () {
            PageSpec = class PageSpec {
                constructor(offset, size) {
                    this.offset = offset;
                    this.size = size;
                }
            };
            exports_17("PageSpec", PageSpec);
            PagingDataSource = class PagingDataSource {
                constructor(underlying, initialOffset = 0, defaultPageSize = 1000) {
                    this.underlying = underlying;
                    this.initialOffset = initialOffset;
                    this.defaultPageSize = defaultPageSize;
                }
                extract(extraSpec) {
                    const pager = new Pager((pageSpec) => {
                        const data = Array.from(this.underlying.extract([extraSpec, pageSpec]));
                        return new Page(data, Option.of(pageSpec.offset + data.length));
                    }, this.initialOffset, this.defaultPageSize);
                    return pager.data;
                }
            };
            exports_17("PagingDataSource", PagingDataSource);
            Option = class Option {
                constructor(value, hasValue) {
                    this.value = value;
                    this.hasValue = hasValue;
                }
                static of(value) { return new Option(value, true); }
                static none() { return new Option(null, false); }
            };
            exports_17("Option", Option);
            Page = class Page {
                constructor(data, next) {
                    this.data = data;
                    this.next = next;
                }
                get hasData() { return this.size > 0; }
                get size() { return this.data.length; }
            };
            exports_17("Page", Page);
            Pager = class Pager {
                constructor(retriever, initialOffset, pageSize = 1000) {
                    this.retriever = retriever;
                    this.initialOffset = initialOffset;
                    this.pageSize = pageSize;
                }
                get data() { return iterable_1.flatMap(this.getData(), x => x); }
                get pagedData() { return this.getData(); }
                *getData() {
                    var offset = this.initialOffset;
                    while (true) {
                        var page = this.retriever(new PageSpec(offset, this.pageSize));
                        if (!page.hasData)
                            return;
                        yield page.data;
                        if (!page.next.hasValue)
                            return;
                        offset = page.next.value;
                    }
                }
            };
            exports_17("Pager", Pager);
        }
    };
});
System.register("iterable/iterable_channel", [], function (exports_18, context_18) {
    "use strict";
    var IterableChannel;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [],
        execute: function () {
            IterableChannel = class IterableChannel {
                [Symbol.iterator]() {
                    throw new Error("Method not implemented.");
                }
                yield(...items) {
                    throw new Error("Method not implemented.");
                }
                yieldMany(items) {
                    throw new Error("Method not implemented.");
                }
            };
            exports_18("IterableChannel", IterableChannel);
        }
    };
});
System.register("jobs/job", [], function (exports_19, context_19) {
    "use strict";
    var Job, JobRunners;
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [],
        execute: function () {
            Job = class Job {
                constructor(name, tasks) {
                    this.name = name;
                    this.tasks = tasks;
                }
                static For(name, ...tasks) {
                    return new Job(name, tasks);
                }
            };
            exports_19("Job", Job);
            JobRunners = class JobRunners {
            };
            exports_19("JobRunners", JobRunners);
            JobRunners.Sequential = (job) => {
                for (let task of job.tasks) {
                    task();
                }
            };
        }
    };
});
System.register("streamline/local_stream", ["rxjs/operators", "rxjs"], function (exports_20, context_20) {
    "use strict";
    var operators_1, rxjs_1, LocalStreamFactory, LocalStream, Streams;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [
            function (operators_1_1) {
                operators_1 = operators_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            }
        ],
        execute: function () {
            LocalStreamFactory = class LocalStreamFactory {
                extract(source) {
                    const observable = rxjs_1.from(source);
                    const connObservable = operators_1.publish()(observable);
                    return new LocalStream(connObservable, () => connObservable.connect());
                }
            };
            LocalStream = class LocalStream {
                constructor(observable, run) {
                    this.observable = observable;
                    this.run = run;
                }
                transform(transformer) {
                    return new LocalStream(operators_1.map(transformer)(this.observable), this.run);
                }
                oneToMany(transformer) {
                    return new LocalStream(operators_1.flatMap(transformer)(this.observable), this.run);
                }
                buffer(size) {
                    return new LocalStream(operators_1.bufferCount(size)(this.observable), this.run);
                }
                forEach(action) {
                    this.observable.forEach(action);
                    return this;
                }
                load(loader) {
                    loader(this);
                    return this;
                }
            };
            Streams = class Streams {
            };
            exports_20("Streams", Streams);
            Streams.Local = new LocalStreamFactory();
        }
    };
});
System.register("streamline/local_stream.spec", ["Ix", "streamline/local_stream"], function (exports_21, context_21) {
    "use strict";
    var Ix_1, local_stream_1;
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [
            function (Ix_1_1) {
                Ix_1 = Ix_1_1;
            },
            function (local_stream_1_1) {
                local_stream_1 = local_stream_1_1;
            }
        ],
        execute: function () {
            local_stream_1.Streams.Local
                .extract(Ix_1.Iterable.range(0, 10))
                .load(stream => stream.transform(x => x * 10).buffer(2).forEach(console.log))
                .forEach(console.log)
                .run();
        }
    };
});
System.register("streamline/local_streamline", ["rxjs", "rxjs/operators"], function (exports_22, context_22) {
    "use strict";
    var rxjs_2, operators_2, LocalStreamFactory, LocalReadableChannel, LocalChannel, LocalStream, Streams;
    var __moduleName = context_22 && context_22.id;
    return {
        setters: [
            function (rxjs_2_1) {
                rxjs_2 = rxjs_2_1;
            },
            function (operators_2_1) {
                operators_2 = operators_2_1;
            }
        ],
        execute: function () {
            LocalStreamFactory = class LocalStreamFactory {
                extract(extractor) {
                    const subject = new rxjs_2.Subject();
                    const connectableObservable = operators_2.publish()(subject);
                    const channel = new LocalChannel(subject, () => {
                        connectableObservable.connect();
                        extractor(channel);
                        subject.complete();
                    });
                    const stream = new LocalStream(channel);
                    return stream;
                }
            };
            LocalReadableChannel = class LocalReadableChannel {
                constructor(observable, open) {
                    this.observable = observable;
                    this.open = open;
                }
                map(transformer) {
                    return new LocalReadableChannel(operators_2.map(transformer)(this.observable), this.open);
                }
                flatMap(transformer) {
                    return new LocalReadableChannel(operators_2.flatMap(transformer)(this.observable), this.open);
                }
                buffer(size) {
                    return new LocalReadableChannel(operators_2.bufferCount(size)(this.observable), this.open);
                }
                forEach(action) {
                    this.observable.forEach(action);
                }
            };
            LocalChannel = class LocalChannel extends LocalReadableChannel {
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
            };
            LocalStream = class LocalStream {
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
            };
            Streams = class Streams {
            };
            exports_22("Streams", Streams);
            Streams.Local = new LocalStreamFactory();
        }
    };
});
