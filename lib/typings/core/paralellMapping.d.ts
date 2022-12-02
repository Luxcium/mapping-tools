import { ErrLookupFn, LookupFn, Settled, TransformFn, ValidateFn } from '../types';
/** @public */
export declare function paralellMapping<T, R>(collection: Iterable<T | Settled<T>>, transform?: TransformFn<T, R>, lookup?: LookupFn<T, R>, validate?: ValidateFn<T, R>, errLookup?: ErrLookupFn): Promise<import("../types").SettledLeft | import("../types").SettledRight<R>>[];
export declare function paralellMapping_TEST_(): Promise<undefined>;
//# sourceMappingURL=paralellMapping.d.ts.map