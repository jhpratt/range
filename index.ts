export function range(end: number): IterableIterator<number>;
export function range(start: number, end: number): IterableIterator<number>;
export function range(start: number, end: number, step: number): IterableIterator<number>;
export function range(end: bigint): IterableIterator<bigint>;
export function range(start: bigint, end: bigint): IterableIterator<bigint>;
export function range(start: bigint, end: bigint, step: bigint): IterableIterator<bigint>;
export function* range(start: number | bigint, end?: number | bigint, step?: number | bigint): IterableIterator<number | bigint> {
    // overload #1
    if (end === undefined) {
        [start, end, step] = typeof start === 'number'
            ? [0, start, 1]
            : [0n, start, 1n];
    }

    // overload #2
    if (step === undefined) {
        // @ts-ignore
        step = end - start > 0 ? 1 : -1;
        typeof start == 'bigint' && (step = BigInt(step));
    }

    // ensure we have the appropriate types
    if ((typeof start !== 'number' && typeof start !== 'bigint') || (typeof start !== typeof end && typeof start !== typeof step)) {
        throw new TypeError('all parameters must be of type number or bigint');
    }

    while (step > 0 ? start < end : start > end) {
        yield start;
        // @ts-ignore
        start += step;
    }
}
