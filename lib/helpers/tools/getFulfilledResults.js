"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFulfilledResults_TEST_ = exports.getFulfilledResults = void 0;
const constants_1 = require("../../constants");
const converToIsometricSettledResult_1 = require("./converToIsometricSettledResult");
/** @beta */
function getFulfilledResults(collection) {
    const result = collection.filter((item) => item.status === constants_1.FULFILLED && typeof item.value !== 'undefined');
    return (0, converToIsometricSettledResult_1.converToIsometricSettledResult)(result);
}
exports.getFulfilledResults = getFulfilledResults;
/** @internal */
async function getFulfilledResults_TEST_() {
    console.log(`at: TEST from ${__filename}`);
    console.log(getFulfilledResults([
        {
            status: constants_1.FULFILLED,
            value: null,
            [constants_1.FULFILLED]: null,
            [constants_1.REJECTED]: null,
            currentRejection: null,
            recipeSteps: 0,
            index: 0,
        },
    ]));
    console.log(getFulfilledResults([
        {
            status: constants_1.REJECTED,
            reason: null,
            [constants_1.FULFILLED]: null,
            [constants_1.REJECTED]: null,
            currentRejection: true,
            recipeSteps: 0,
            index: 0,
        },
    ]));
    console.log(getFulfilledResults([
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
    ]));
    return void 0;
}
exports.getFulfilledResults_TEST_ = getFulfilledResults_TEST_;
// getFulfilledResults_TEST_();
//# sourceMappingURL=getFulfilledResults.js.map