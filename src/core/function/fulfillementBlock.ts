import {
  isPromiseFulfilledResult,
  isSettledRight,
} from '../../helpers/assertions';
import { LookupFn, SettledRight, TransformFn, ValidateFn } from '../../types';
import { makeFulfillement } from './makeFulfillement';

/**
 *
 *



 * @internal */
export async function fulfillementBlock<T, R>(
  item: T | (SettledRight<T> | PromiseFulfilledResult<T>),
  index: number,
  array: (T | PromiseSettledResult<T>)[],
  transform: TransformFn<T, R> = async value => value as any as R,
  lookup: LookupFn<T, R> = (value, index, array) => void [value, index, array],
  validate: ValidateFn<T, R> = async (value, index, array) =>
    void [value, index, array]
) {
  let recipeSteps = -1;
  let itemValue: T;
  if (isSettledRight<T>(item) || isPromiseFulfilledResult<T>(item)) {
    if (isSettledRight<T>(item)) {
      const itemRecipeSteps = item.recipeSteps;
      recipeSteps = itemRecipeSteps + 1;
      // HACK: -------------------------------------------------------
      // process.exit(15);
      // BUG: --------------------------------------------------------
    }
    itemValue = item.value;
    // HACK: ---------------------------------------------------------
    // process.exit(14);
    // BUG: ----------------------------------------------------------
  } else {
    itemValue = item;
    recipeSteps = 0;
  }
  const value = await transform(itemValue, index, array);
  lookup(value, index, array);
  await validate(value, index, array);
  return makeFulfillement<R>({
    value,
    index,
    recipeSteps,
  });
}

/* istanbul ignore next */
export async function fulfillementBlock_TEST_() {
  console.log(`at: fulfillementBlock_TEST_ from ${__filename}`);
  console.log(await fulfillementBlock(10, 0, [10]));
  console.log(
    await fulfillementBlock(
      {
        status: 'fulfilled',
        value: 10,
        reason: undefined,
        fulfilled: 10,
        rejected: null,
        currentRejection: null,
        recipeSteps: -1,
      },
      0,
      [10]
    )
  );
  console.log(
    await fulfillementBlock(
      {
        status: 'fulfilled',
        value: 10,
      },
      0,
      [10]
    )
  );
  return void 0;
}
// fulfillementBlock_TEST_()
