import { Settled, SettledLeft, SettledRight } from '../../types';
declare function converToIsometricSettledResult_(collection: Array<SettledLeft | PromiseRejectedResult>): SettledLeft[];
declare function converToIsometricSettledResult_<T>(collection: Array<SettledRight<T> | PromiseSettledResult<T>>): SettledRight<T>[];
declare function converToIsometricSettledResult_<T>(collection: Array<Settled<T> | PromiseSettledResult<T>>): (SettledRight<T> | SettledLeft)[];
/** @internal */
export declare function converToIsometricSettledResult_TEST_(): Promise<undefined>;
/** @beta */
export declare const converToIsometricSettledResult: typeof converToIsometricSettledResult_;
export {};
//# sourceMappingURL=converToIsometricSettledResult.d.ts.map