import { ILoader } from "./load";

export class Loaders {
    public static ConsoleLoggingLoader<T>(bufferLength: number): ILoader<T> {
        return channel => {
            channel.buffer(bufferLength).forEach(console.log);
        };
    }
}
