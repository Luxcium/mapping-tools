import { SettledRight } from '../../types';
/** @internal */
type MakeFulfillementArgs<U> = {
    value: U;
    index: number;
    recipeSteps: number;
};
/** @internal */
export declare function makeFulfillement<U>({ value, index, recipeSteps, }: MakeFulfillementArgs<U>): SettledRight<U>;
export declare function makeFulfillement_TEST_(): undefined;
export {};
//# sourceMappingURL=makeFulfillement.d.ts.map