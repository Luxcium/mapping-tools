"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isometricSettledResult_TEST_ = exports.isometricSettledResult = void 0;
const constants_1 = require("../../constants");
/** @beta */
function isometricSettledResult(item, index = -1) {
    if (item.status === constants_1.FULFILLED) {
        const settled = {
            status: item.status,
            value: item.value,
            reason: undefined,
            fulfilled: item.value,
            rejected: null,
            currentRejection: null,
            recipeSteps: -1,
            index,
        };
        return settled;
    }
    const settled = {
        status: item.status,
        reason: item.reason,
        value: undefined,
        rejected: item.reason,
        fulfilled: null,
        currentRejection: undefined,
        recipeSteps: -1,
        index,
    };
    return settled;
}
exports.isometricSettledResult = isometricSettledResult;
/** @internal */
async function isometricSettledResult_TEST_() {
    console.log(`at: TEST from ${__filename}`);
    console.log([
        {
            status: constants_1.FULFILLED,
            value: null,
            [constants_1.FULFILLED]: null,
            [constants_1.REJECTED]: null,
            currentRejection: null,
            recipeSteps: 0,
            index: 0,
        },
    ].map(isometricSettledResult));
    console.log([
        {
            status: constants_1.REJECTED,
            reason: null,
            [constants_1.FULFILLED]: null,
            [constants_1.REJECTED]: null,
            currentRejection: true,
            recipeSteps: 0,
            index: 0,
        },
    ].map(isometricSettledResult));
    console.log([
        {
            status: constants_1.REJECTED,
            reason: null,
        },
        {
            status: constants_1.FULFILLED,
            value: null,
            [constants_1.FULFILLED]: null,
            [constants_1.REJECTED]: null,
            currentRejection: null,
            recipeSteps: 0,
            index: 0,
        },
        {
            status: constants_1.FULFILLED,
            value: null,
        },
        {
            status: constants_1.REJECTED,
            reason: null,
            [constants_1.FULFILLED]: null,
            [constants_1.REJECTED]: null,
            currentRejection: true,
            recipeSteps: 0,
            index: 0,
        },
    ].map(isometricSettledResult));
    return void 0;
}
exports.isometricSettledResult_TEST_ = isometricSettledResult_TEST_;
// isometricSettledResult_TEST_();
//# sourceMappingURL=isometricSettledResult.js.map