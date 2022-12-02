"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialMapping_TEST_ = exports.serialMapping = void 0;
const fn_a1f9a_1 = require("./function/fn_a1f9a");
/** @public */
async function serialMapping(collection, transform = async (value) => value, lookup = v => void v, validate = async (v) => void v, errLookup = v => void v) {
    let index = 0;
    const results = [];
    for (const item of collection) {
        results.push(await (0, fn_a1f9a_1.fn_a1f9a)({
            item,
            index: index++,
            array: [...collection],
            transform,
            lookup,
            validate,
            errLookup,
        }));
    }
    return results;
}
exports.serialMapping = serialMapping;
async function serialMapping_TEST_() {
    console.log(`at: serialMapping_TEST_ from ${__filename}`);
    console.log(await serialMapping([{ item: 10 }]));
    return void 0;
}
exports.serialMapping_TEST_ = serialMapping_TEST_;
// serialMapping_TEST_();
//# sourceMappingURL=serialMapping.js.map