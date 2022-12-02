import { ErrLookupFn, LookupFn, Settled, SettledLeft, SettledRight, TransformFn, ValidateFn } from '../types';
/** @public */
export declare function serialMapping<T, R>(collection: Iterable<T | Settled<T>>, transform?: TransformFn<T, R>, lookup?: LookupFn<T, R>, validate?: ValidateFn<T, R>, errLookup?: ErrLookupFn): Promise<(SettledLeft | SettledRight<R>)[]>;
type WrappedResult<U> = <W>(wraper: W) => Settled<U>;
export type MappingFn = <T, R>(collection: Iterable<T | Settled<T>>, transform: TransformFn<T, R>, lookup: LookupFn<T, R>, validate: ValidateFn<T, R>, errLookup: ErrLookupFn) => WrappedResult<Settled<R>>;
export declare function serialMapping_TEST_(): Promise<undefined>;
export {};
//# sourceMappingURL=serialMapping.d.ts.map