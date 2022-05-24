import 'jasmine';
import { flatMap, mapIterable, sequence } from './iterable.js';

describe('iterable', () => {
    it('mapIterable returns expected values', () => {
        const result = mapIterable([1, 2, 3], x => 2 * x);
        expect(result.next().value).toBe(2);
        expect(result.next().value).toBe(4);
        expect(result.next().value).toBe(6);
    });

    it('flatMap returns values unwrapped', () => {
        const result = flatMap([1, 2], x => [x, 2 * x]);
        expect(result.next().value).toBe(1);
        expect(result.next().value).toBe(2);
        expect(result.next().value).toBe(2);
        expect(result.next().value).toBe(4);
    });

    it('sequence returns correct range', () => {
        const result = sequence(1, 4);
        expect(result.next().value).toBe(1);
        expect(result.next().value).toBe(2);
        expect(result.next().value).toBe(3);
    });
});
