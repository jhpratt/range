export function range(end: number): IterableIterator<number>;
export function range(start: number, end: number): IterableIterator<number>;
export function range(start: number, end: number, step: number): IterableIterator<number>;
export function* range(start: number, end?: number, step?: number): IterableIterator<number> {
  // overload #1
  if (end === undefined) {
    [start, end, step] = [0, start, 1];
  }

  // overload #2
  if (step === undefined) {
    step = Math.sign(end - start);
  }

  // ensure we have the appropriate types
  if (typeof start !== 'number' || typeof end !== 'number' || typeof step !== 'number') {
    throw new TypeError('all parameters must be of type number');
  }

  while ((start < end && step > 0) || (start > end && step < 0)) {
    yield start;
    start += step;
  }
}
