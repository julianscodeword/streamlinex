import { IWriteableChannel } from "../streamline/streamline";

export class IterableChannel<T> implements IWriteableChannel<T>, Iterable<T> {

    public [Symbol.iterator](): Iterator<T> {
        throw new Error("Method not implemented.");
    }

    public yield(...items: Array<T>): void {
        throw new Error("Method not implemented.");
    }
    
    public yieldMany(items: Array<T>): void {
        throw new Error("Method not implemented.");
    }

}
