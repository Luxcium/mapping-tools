"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSettled_TEST_ = exports.isSettledLeft = exports.isSettledRight = exports.isSettled = void 0;
const constants_1 = require("../../constants");
/** @public */
function isSettled(contender) {
    return isSettledRight(contender) || isSettledLeft(contender);
}
exports.isSettled = isSettled;
/** @public */
function isSettledRight(contender) {
    return (contender?.status === constants_1.FULFILLED &&
        'value' in contender &&
        constants_1.FULFILLED in contender &&
        contender.value === contender[constants_1.FULFILLED] &&
        constants_1.REJECTED in contender &&
        contender.rejected === null &&
        'currentRejection' in contender &&
        contender.currentRejection === null &&
        'recipeSteps' in contender &&
        typeof contender.recipeSteps === 'number' &&
        'index' in contender &&
        typeof contender.index === 'number');
}
exports.isSettledRight = isSettledRight;
/** @public */
function isSettledLeft(contender) {
    return (contender?.status === constants_1.REJECTED &&
        'reason' in contender &&
        constants_1.FULFILLED in contender &&
        constants_1.REJECTED in contender &&
        contender.reason === contender[constants_1.REJECTED] &&
        contender.fulfilled === null &&
        'currentRejection' in contender &&
        (contender.currentRejection === true ||
            contender.rejected === false ||
            contender.rejected === undefined) &&
        'recipeSteps' in contender &&
        typeof contender.recipeSteps === 'number' &&
        'index' in contender &&
        typeof contender.index === 'number');
}
exports.isSettledLeft = isSettledLeft;
/** @internal */
async function isSettled_TEST_() {
    console.log(`at: TEST from ${__filename}`);
    console.log(isSettledRight({
        status: constants_1.FULFILLED,
        value: null,
        [constants_1.FULFILLED]: null,
        [constants_1.REJECTED]: null,
        currentRejection: null,
        recipeSteps: 0,
        index: 0,
    }));
    isSettledRight({
        status: 'fulfilled',
        value: 10,
        // reason: undefined,
        fulfilled: 10,
        rejected: null,
        currentRejection: null,
        recipeSteps: -1,
    }) &&
        // HACK: -------------------------------------------------------
        process.exit(51);
    // BUG: --------------------------------------------------------
    console.log(isSettledLeft({
        status: constants_1.REJECTED,
        reason: null,
        [constants_1.FULFILLED]: null,
        [constants_1.REJECTED]: null,
        currentRejection: true,
        recipeSteps: 0,
        index: 0,
    }));
    console.log(isSettled({
        status: constants_1.FULFILLED,
        value: null,
        [constants_1.FULFILLED]: null,
        [constants_1.REJECTED]: null,
        currentRejection: null,
        recipeSteps: 0,
        index: 0,
    }));
    console.log(isSettled({
        status: constants_1.REJECTED,
        reason: null,
        [constants_1.FULFILLED]: null,
        [constants_1.REJECTED]: null,
        currentRejection: true,
        recipeSteps: 0,
        index: 0,
    }));
    return void 0;
}
exports.isSettled_TEST_ = isSettled_TEST_;
// isSettled_TEST_();
/*
{
status: REJECTED,
reason: null,
[FULFILLED]: null,
[REJECTED]: null,
currentRejection:true,
recipeSteps:0,
index:0,
}

    contender?.status === REJECTED &&
    'reason' in contender &&
    FULFILLED in contender &&
    REJECTED in contender &&
    contender.fulfilled === null &&
    'currentRejection' in contender &&
    (contender.currentRejection === true ||
      contender.rejected === false ||
      contender.rejected === undefined) &&
    'recipeSteps' in contender &&
    typeof contender.recipeSteps === 'number' &&
    'index' in contender
 */
//# sourceMappingURL=isSettled.js.map