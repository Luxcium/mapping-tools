"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromiseLike_TEST_ = exports.isPromiseLike = void 0;
/** @internal */
function isPromiseLike(element) {
    if (element != null &&
        typeof element === 'object' &&
        'then' in element &&
        typeof element.then === 'function')
        return true;
    return false;
}
exports.isPromiseLike = isPromiseLike;
/** @internal */
async function isPromiseLike_TEST_() {
    console.log(`at: TEST from ${__filename}`);
    console.log(isPromiseLike((async () => 'promise')()));
    console.log(isPromiseLike((() => 'promise')()));
    console.log(isPromiseLike({ then() { } }));
    return void 0;
}
exports.isPromiseLike_TEST_ = isPromiseLike_TEST_;
// isPromiseLike_TEST_();
//# sourceMappingURL=isPromiseLike.js.map