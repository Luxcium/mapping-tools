"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converToIsometricSettledResult = exports.converToIsometricSettledResult_TEST_ = void 0;
const constants_1 = require("../../constants");
const isometricSettledResult_1 = require("./isometricSettledResult");
function converToIsometricSettledResult_(collection) {
    return collection.map(isometricSettledResult_1.isometricSettledResult);
}
/** @internal */
async function converToIsometricSettledResult_TEST_() {
    console.log(`at: TEST from ${__filename}`);
    console.log(converToIsometricSettledResult_([
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
    console.log(converToIsometricSettledResult_([
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
    console.log(converToIsometricSettledResult_([
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
exports.converToIsometricSettledResult_TEST_ = converToIsometricSettledResult_TEST_;
// converToIsometricSettledResult_TEST_();
/** @beta */
exports.converToIsometricSettledResult = converToIsometricSettledResult_;
//# sourceMappingURL=converToIsometricSettledResult.js.map