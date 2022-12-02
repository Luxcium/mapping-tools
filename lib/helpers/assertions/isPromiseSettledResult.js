"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromiseSettledResult_TEST_ = exports.isPromiseRejectedResult = exports.isPromiseFulfilledResult = exports.isPromiseSettledResult = void 0;
const constants_1 = require("../../constants");
/** @public */
function isPromiseSettledResult(contender) {
    return (isPromiseFulfilledResult(contender) || isPromiseRejectedResult(contender));
}
exports.isPromiseSettledResult = isPromiseSettledResult;
/** @public */
function isPromiseFulfilledResult(contender) {
    return contender?.status === constants_1.FULFILLED && 'value' in contender;
}
exports.isPromiseFulfilledResult = isPromiseFulfilledResult;
/** @public */
function isPromiseRejectedResult(contender) {
    return contender?.status === constants_1.REJECTED && 'reason' in contender;
}
exports.isPromiseRejectedResult = isPromiseRejectedResult;
/** @internal */
async function isPromiseSettledResult_TEST_() {
    console.log(`at: TEST from ${__filename}`);
    console.log(isPromiseFulfilledResult({ status: constants_1.FULFILLED, value: null }));
    console.log(isPromiseRejectedResult({ status: constants_1.REJECTED, reason: null }));
    console.log(isPromiseSettledResult({ status: constants_1.FULFILLED, value: null }));
    console.log(isPromiseSettledResult({ status: constants_1.REJECTED, reason: null }));
    return void 0;
}
exports.isPromiseSettledResult_TEST_ = isPromiseSettledResult_TEST_;
// isPromiseSettledResult_TEST_();
//# sourceMappingURL=isPromiseSettledResult.js.map