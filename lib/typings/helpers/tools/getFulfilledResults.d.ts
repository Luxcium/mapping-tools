import { Settled, SettledRight } from '../../types';
/** @beta */
export declare function getFulfilledResults<T>(collection: Array<Settled<T> | PromiseSettledResult<T>>): SettledRight<T>[];
/** @internal */
export declare function getFulfilledResults_TEST_(): Promise<undefined>;
//# sourceMappingURL=getFulfilledResults.d.ts.map