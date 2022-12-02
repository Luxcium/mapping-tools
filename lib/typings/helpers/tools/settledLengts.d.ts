import { Settled } from '../../types';
/** @beta */
export declare function settledLengts<T>(collection: Array<Settled<T> | PromiseSettledResult<T>>): {
    fulfilled: number;
    rejected: number;
    settled: number;
};
/** @internal */
export declare function settledLengts_TEST_(): Promise<undefined>;
//# sourceMappingURL=settledLengts.d.ts.map