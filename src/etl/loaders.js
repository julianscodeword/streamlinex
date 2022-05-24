export class Loaders {
    static ConsoleLoggingLoader(bufferLength) {
        return channel => {
            channel.buffer(bufferLength).forEach(console.log);
        };
    }
}
