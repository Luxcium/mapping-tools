"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paralellMapping_TEST_ = exports.paralellMapping = void 0;
const fn_a1f9a_1 = require("./function/fn_a1f9a");
/** @public */
function paralellMapping(collection, transform = async (value) => value, lookup = v => void v, validate = async (v) => void v, errLookup = v => void v) {
    return [...collection].map((item, index, array) => (0, fn_a1f9a_1.fn_a1f9a)({
        item,
        index,
        transform,
        array,
        lookup,
        validate,
        errLookup,
    }));
}
exports.paralellMapping = paralellMapping;
async function paralellMapping_TEST_() {
    console.log(`at: paralellMapping_TEST_ from ${__filename}`);
    console.log(await Promise.all(paralellMapping([{ item: 10 }])));
    return void 0;
}
exports.paralellMapping_TEST_ = paralellMapping_TEST_;
// paralellMapping_TEST_();
//# sourceMappingURL=paralellMapping.js.map