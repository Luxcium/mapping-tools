"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listFulfilledResults_TEST_ = exports.listFulfilledResults = void 0;
const constants_1 = require("../../constants");
const getFulfilledResults_1 = require("./getFulfilledResults");
/** @beta */
function listFulfilledResults(collection) {
    return (0, getFulfilledResults_1.getFulfilledResults)(collection).flatMap(item => item.value);
}
exports.listFulfilledResults = listFulfilledResults;
/** @internal */
async function listFulfilledResults_TEST_() {
    console.log(`at: TEST from ${__filename}`);
    console.log(listFulfilledResults([
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
    console.log(listFulfilledResults([
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
    console.log(listFulfilledResults([
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
exports.listFulfilledResults_TEST_ = listFulfilledResults_TEST_;
// listFulfilledResults_TEST_();
//# sourceMappingURL=listFulfilledResults.js.map