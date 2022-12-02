import { Mapper, OnlySideEffect } from '../types';
/** @deprecated */
export declare function awaitedMapping_α<R, T>(collection: Iterable<T>, transform: Mapper<T, Promise<R>>, lookup?: (value: R, index: number) => OnlySideEffect, validate?: (value: R, index: number) => Promise<OnlySideEffect>, errLookup?: (error: unknown, index: number) => OnlySideEffect): Promise<PromiseSettledResult<R>[]>;
//# sourceMappingURL=awaitedMapping_%CE%B1.d.ts.map