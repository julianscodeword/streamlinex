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
export function mapIterable(input, transformation) {
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
export function castIterable(input) {
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
export function flatMap(input, transformation) {
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
export function sequence(start, end) {
    return __asyncGenerator(this, arguments, function* sequence_1() {
        for (let i = start; i < end; i++) {
            yield yield __await(new Promise(resolve => setTimeout(() => resolve(i), 1000)));
        }
    });
}
export function asAsync(input) {
    return __asyncGenerator(this, arguments, function* asAsync_1() {
        for (let item of input) {
            yield yield __await(item);
        }
    });
}
export function collect(input) {
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
export function transformAsync(input, transformation) {
    return __awaiter(this, void 0, void 0, function* () {
        const value = yield input;
        return transformation(value);
    });
}
