import { ErrLookupFn, LookupFn, Settled, TransformFn, ValidateFn } from '../types';
/** @public */
export declare function awaitedMapping<R, T>(collection: Iterable<T | Settled<T>>, transform?: TransformFn<T, R>, lookup?: LookupFn<T, R>, validate?: ValidateFn<T, R>, errLookup?: ErrLookupFn): Promise<(import("../types").SettledLeft | import("../types").SettledRight<R>)[]>;
export declare function awaitedMapping_TEST_(): Promise<undefined>;
//# sourceMappingURL=awaitedMapping.d.ts.map