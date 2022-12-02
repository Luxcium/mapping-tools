import { ErrLookupFn, LookupFn, Settled, TransformFn, ValidateFn } from '../types';
/** @public */
export declare function generateMapping<T, R>(collection: Iterable<T | Settled<T>>, transform?: TransformFn<T, R>, lookup?: LookupFn<T, R>, validate?: ValidateFn<T, R>, errLookup?: ErrLookupFn): Generator<Promise<import("../types").SettledLeft | import("../types").SettledRight<R>>, void, unknown>;
export declare function generateMapping_TEST_(): Promise<undefined>;
//# sourceMappingURL=generateMapping.d.ts.map