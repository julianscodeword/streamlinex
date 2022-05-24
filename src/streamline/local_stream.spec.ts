import { Iterable } from 'Ix';
import { Streams } from './local_stream';

Streams.Local
    .extract(Iterable.range(0, 10))
    .load(stream => stream.transform(x => x * 10).buffer(2).forEach(console.log))
    .forEach(console.log)
    .run();
