import { SettledLeft } from '../../types';
/** @internal */
type MakeRejectionArgs = {
    reason: any;
    index: number;
    currentRejection: boolean;
};
/** @internal */
export declare function makeRejection({ reason, index, currentRejection, }: MakeRejectionArgs): SettledLeft;
export declare function makeRejection_TEST_(): undefined;
export {};
//# sourceMappingURL=makeRejection.d.ts.map