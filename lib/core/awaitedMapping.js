"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awaitedMapping_TEST_ = exports.awaitedMapping = void 0;
const fn_a1f9a_1 = require("./function/fn_a1f9a");
/** @public */
async function awaitedMapping(collection, transform = async (value) => value, lookup = v => void v, validate = async (v) => void v, errLookup = v => void v) {
    const result = [...collection].map((item, index, array) => (0, fn_a1f9a_1.fn_a1f9a)({
        item,
        index,
        array,
        transform,
        lookup,
        validate,
        errLookup,
    }));
    return Promise.all(result);
}
exports.awaitedMapping = awaitedMapping;
async function awaitedMapping_TEST_() {
    console.log(`at: awaitedMapping_TEST_ from ${__filename}`);
    console.log(await awaitedMapping([{ item: 10 }]));
    return void 0;
}
exports.awaitedMapping_TEST_ = awaitedMapping_TEST_;
// awaitedMapping_TEST_();
/*


export async function serialMapping_α<T, R>(
  collection: Iterable<T | Settled<T>>,
  transform: TransformFn<T, R>,
  lookup: LookupFn<R> = v => void v,
  validate: ValidateFn<R> = async v => void v,
  errLookup: ErrLookupFn = v => void v
) {
  let index = 0;
  const results: (SettledLeft | SettledRight<R>)[] = [];
  for (const item of collection) {
    results.push(
      await fn_a1f9a({
        item,
        index: index++,
        transform,
        lookup,
        validate,
        errLookup,
      })
    );
  }
  return results;
}


 */
//# sourceMappingURL=awaitedMapping.js.map