import { Streams } from "./streamline/local_stream";
import { Iterable } from "ix";

Streams.Local
    .extract(Iterable.range(0, 10))
    .load(stream => stream.transform(x => x * 10).buffer(2).forEach(console.log))
    .forEach(console.log)
    .run();
