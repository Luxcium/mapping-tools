import { Mapper, OnlySideEffect } from '../types';
/** @deprecated */
export declare function serialMapping_α<R, T>(collection: Iterable<T>, transform: Mapper<T, Promise<R>>, // (item: T) => Promise<R>
lookup?: (value: R, index: number) => OnlySideEffect, validate?: (value: R, index: number) => Promise<OnlySideEffect>, errLookup?: (error: unknown, index: number) => OnlySideEffect): Promise<PromiseSettledResult<R>[]>;
//# sourceMappingURL=serialMapping_%CE%B1.d.ts.map