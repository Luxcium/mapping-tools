"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFulfillement_TEST_ = exports.makeFulfillement = void 0;
const constants_1 = require("../../constants");
/** @internal */
function makeFulfillement({ value, index, recipeSteps, }) {
    const result = {
        status: constants_1.FULFILLED,
        value,
        fulfilled: value,
        rejected: null,
        currentRejection: null,
        recipeSteps,
        index,
    };
    Object.defineProperty(result, 'fulfilled', {
        value,
        enumerable: false,
    });
    return result;
}
exports.makeFulfillement = makeFulfillement;
/* istanbul ignore next */
function makeFulfillement_TEST_() {
    console.log(`at: makeFulfillement_TEST_ from ${__filename}`);
    console.log(makeFulfillement({ value: 10, index: 0, recipeSteps: 0 }));
    return void 0;
}
exports.makeFulfillement_TEST_ = makeFulfillement_TEST_;
// makeFulfillement_TEST_()
//# sourceMappingURL=makeFulfillement.js.map