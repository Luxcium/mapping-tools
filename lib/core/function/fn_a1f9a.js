"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fn_a1f9a_TEST_ = exports.fn_a1f9a = void 0;
const helpers_1 = require("../../helpers");
const fulfillementBlock_1 = require("./fulfillementBlock");
const makeRejection_1 = require("./makeRejection");
const { isPromiseFulfilledResult, isPromiseRejectedResult, isPromiseSettledResult, } = helpers_1.assertions;
/** @internal */
async function fn_a1f9a({ item, index, array, transform = async (value) => value, lookup = (value, index, array) => void [value, index, array], validate = async (value, index, array) => void [value, index, array], errLookup = (value, index, currentRejection) => void [value, index, currentRejection], }) {
    try {
        if (!isPromiseSettledResult(item) || isPromiseFulfilledResult(item)) {
            return (0, fulfillementBlock_1.fulfillementBlock)(item, index, array, transform, lookup, validate);
        }
        if (isPromiseRejectedResult(item)) {
            const { reason } = item;
            errLookup(reason, index, false);
            return (0, makeRejection_1.makeRejection)({ reason, index, currentRejection: false });
        }
        throw new TypeError(`NEVER: item (${item}) is not assignable to type 'never'`);
    }
    catch (reason) {
        errLookup(reason, index, true);
        return (0, makeRejection_1.makeRejection)({ reason, index, currentRejection: true });
    }
}
exports.fn_a1f9a = fn_a1f9a;
/* istanbul ignore next */
async function fn_a1f9a_TEST_() {
    console.log(`at: fn_a1f9a_TEST_ from ${__filename}`);
    console.log(await fn_a1f9a({
        item: 10,
        index: 0,
        array: [10],
        transform: async (item) => item * 10,
    }));
    return void 0;
}
exports.fn_a1f9a_TEST_ = fn_a1f9a_TEST_;
// fn_a1f9a_TEST_()
//# sourceMappingURL=fn_a1f9a.js.map