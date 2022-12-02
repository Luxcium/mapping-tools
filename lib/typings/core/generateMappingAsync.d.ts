import { ErrLookupFn, LookupFn, Settled, SettledLeft, SettledRight, TransformFn, ValidateFn } from '../types';
/** @public */
export declare function generateMappingAsync<R, T>(collection: Iterable<T | Settled<T>>, transform?: TransformFn<T, R>, lookup?: LookupFn<T, R>, validate?: ValidateFn<T, R>, errLookup?: ErrLookupFn): AsyncGenerator<SettledLeft | SettledRight<R>, void, unknown>;
export declare function generateMappingAsync_TEST_(): Promise<undefined>;
//# sourceMappingURL=generateMappingAsync.d.ts.map