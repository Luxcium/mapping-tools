import { Settled, SettledLeft, SettledRight } from '../../types';
/** @public */
export declare function isSettled<T>(contender: any): contender is Settled<T>;
/** @public */
export declare function isSettledRight<T>(contender: any): contender is SettledRight<T>;
/** @public */
export declare function isSettledLeft(contender: any): contender is SettledLeft;
/** @internal */
export declare function isSettled_TEST_(): Promise<undefined>;
//# sourceMappingURL=isSettled.d.ts.map