"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRejection_TEST_ = exports.makeRejection = void 0;
const constants_1 = require("../../constants");
/** @internal */
function makeRejection({ reason, index, currentRejection, }) {
    const result = {
        status: constants_1.REJECTED,
        reason,
        rejected: reason,
        fulfilled: null,
        currentRejection: currentRejection,
        recipeSteps: 0,
        index,
    };
    Object.defineProperty(result, 'rejected', {
        value: reason,
        enumerable: false,
    });
    return result;
}
exports.makeRejection = makeRejection;
function makeRejection_TEST_() {
    console.log(`at: makeRejection_TEST_ from ${__filename}`);
    console.log(makeRejection({ reason: 'any', index: 0, currentRejection: true }));
    return void 0;
}
exports.makeRejection_TEST_ = makeRejection_TEST_;
// makeRejection_TEST_()
//# sourceMappingURL=makeRejection.js.map