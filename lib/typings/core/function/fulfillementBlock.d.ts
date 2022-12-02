import { LookupFn, SettledRight, TransformFn, ValidateFn } from '../../types';
/**
 *
 *



 * @internal */
export declare function fulfillementBlock<T, R>(item: T | (SettledRight<T> | PromiseFulfilledResult<T>), index: number, array: (T | PromiseSettledResult<T>)[], transform?: TransformFn<T, R>, lookup?: LookupFn<T, R>, validate?: ValidateFn<T, R>): Promise<SettledRight<R>>;
export declare function fulfillementBlock_TEST_(): Promise<undefined>;
//# sourceMappingURL=fulfillementBlock.d.ts.map