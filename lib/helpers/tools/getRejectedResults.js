"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRejectedResults_TEST_ = exports.getRejectedResults = void 0;
const constants_1 = require("../../constants");
const converToIsometricSettledResult_1 = require("./converToIsometricSettledResult");
/** @beta */
function getRejectedResults(collection) {
    const result = collection.filter((item) => item.status === constants_1.REJECTED);
    return (0, converToIsometricSettledResult_1.converToIsometricSettledResult)(result);
}
exports.getRejectedResults = getRejectedResults;
/** @internal */
async function getRejectedResults_TEST_() {
    console.log(`at: TEST from ${__filename}`);
    console.log(getRejectedResults([
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
    console.log(getRejectedResults([
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
    console.log(getRejectedResults([
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
exports.getRejectedResults_TEST_ = getRejectedResults_TEST_;
// getRejectedResults_TEST_();
//# sourceMappingURL=getRejectedResults.js.map