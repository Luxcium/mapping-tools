"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settledLengts_TEST_ = exports.settledLengts = void 0;
const constants_1 = require("../../constants");
const getFulfilledResults_1 = require("./getFulfilledResults");
/** @beta */
function settledLengts(collection) {
    const settled = collection.length;
    const fulfilled = (0, getFulfilledResults_1.getFulfilledResults)(collection).length;
    const rejected = settled - fulfilled;
    return {
        fulfilled,
        rejected,
        settled,
    };
}
exports.settledLengts = settledLengts;
/** @internal */
async function settledLengts_TEST_() {
    console.log(`at: TEST from ${__filename}`);
    console.log(settledLengts([
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
    console.log(settledLengts([
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
    console.log(settledLengts([
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
exports.settledLengts_TEST_ = settledLengts_TEST_;
// settledLengts_TEST_();
//# sourceMappingURL=settledLengts.js.map