import { Settled, SettledLeft } from '../../types';
/** @beta */
export declare function getRejectedResults<T>(collection: Array<Settled<T> | PromiseSettledResult<T>>): SettledLeft[];
/** @internal */
export declare function getRejectedResults_TEST_(): Promise<undefined>;
//# sourceMappingURL=getRejectedResults.d.ts.map