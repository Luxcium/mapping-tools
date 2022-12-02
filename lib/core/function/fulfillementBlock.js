"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fulfillementBlock_TEST_ = exports.fulfillementBlock = void 0;
const assertions_1 = require("../../helpers/assertions");
const makeFulfillement_1 = require("./makeFulfillement");
/**
 *
 *



 * @internal */
async function fulfillementBlock(item, index, array, transform = async (value) => value, lookup = (value, index, array) => void [value, index, array], validate = async (value, index, array) => void [value, index, array]) {
    let recipeSteps = -1;
    let itemValue;
    if ((0, assertions_1.isSettledRight)(item) || (0, assertions_1.isPromiseFulfilledResult)(item)) {
        if ((0, assertions_1.isSettledRight)(item)) {
            const itemRecipeSteps = item.recipeSteps;
            recipeSteps = itemRecipeSteps + 1;
            // HACK: -------------------------------------------------------
            // process.exit(15);
            // BUG: --------------------------------------------------------
        }
        itemValue = item.value;
        // HACK: ---------------------------------------------------------
        // process.exit(14);
        // BUG: ----------------------------------------------------------
    }
    else {
        itemValue = item;
        recipeSteps = 0;
    }
    const value = await transform(itemValue, index, array);
    lookup(value, index, array);
    await validate(value, index, array);
    return (0, makeFulfillement_1.makeFulfillement)({
        value,
        index,
        recipeSteps,
    });
}
exports.fulfillementBlock = fulfillementBlock;
/* istanbul ignore next */
async function fulfillementBlock_TEST_() {
    console.log(`at: fulfillementBlock_TEST_ from ${__filename}`);
    console.log(await fulfillementBlock(10, 0, [10]));
    console.log(await fulfillementBlock({
        status: 'fulfilled',
        value: 10,
        reason: undefined,
        fulfilled: 10,
        rejected: null,
        currentRejection: null,
        recipeSteps: -1,
    }, 0, [10]));
    console.log(await fulfillementBlock({
        status: 'fulfilled',
        value: 10,
    }, 0, [10]));
    return void 0;
}
exports.fulfillementBlock_TEST_ = fulfillementBlock_TEST_;
// fulfillementBlock_TEST_()
//# sourceMappingURL=fulfillementBlock.js.map