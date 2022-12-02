"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromise_TEST_ = exports.isPromise = void 0;
const isPromiseLike_1 = require("./isPromiseLike");
/** @internal */
function isPromise(element) {
    if ((0, isPromiseLike_1.isPromiseLike)(element) && element instanceof (Promise))
        return true;
    return false;
}
exports.isPromise = isPromise;
/** @internal */
async function isPromise_TEST_() {
    console.log(`at: TEST from ${__filename}`);
    console.log(isPromise((async () => 'promise')()));
    console.log(isPromise((() => 'promise')()));
    return void 0;
}
exports.isPromise_TEST_ = isPromise_TEST_;
// isPromise_TEST_();
//# sourceMappingURL=isPromise.js.map