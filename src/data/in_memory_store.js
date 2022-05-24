export class InMemoryStore {
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
}
