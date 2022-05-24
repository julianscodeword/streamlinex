import { flatMap } from "../iterable";
export class PageSpec {
    constructor(offset, size) {
        this.offset = offset;
        this.size = size;
    }
}
export class PagingDataSource {
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
}
export class Option {
    constructor(value, hasValue) {
        this.value = value;
        this.hasValue = hasValue;
    }
    static of(value) { return new Option(value, true); }
    static none() { return new Option(null, false); }
}
export class Page {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
    get hasData() { return this.size > 0; }
    get size() { return this.data.length; }
}
export class Pager {
    constructor(retriever, initialOffset, pageSize = 1000) {
        this.retriever = retriever;
        this.initialOffset = initialOffset;
        this.pageSize = pageSize;
    }
    get data() { return flatMap(this.getData(), x => x); }
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
}
