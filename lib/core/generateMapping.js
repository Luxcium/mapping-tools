"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMapping_TEST_ = exports.generateMapping = void 0;
const fn_a1f9a_1 = require("./function/fn_a1f9a");
/** @public */
function* generateMapping(collection, transform = async (value) => value, lookup = v => void v, validate = async (v) => void v, errLookup = v => void v) {
    let index = 0;
    for (const item of collection) {
        yield (0, fn_a1f9a_1.fn_a1f9a)({
            item,
            index: index++,
            array: [...collection],
            transform,
            validate,
            errLookup,
            lookup,
        });
    }
}
exports.generateMapping = generateMapping;
async function generateMapping_TEST_() {
    console.log(`at: generateMapping_TEST_ from ${__filename}`);
    const generator = generateMapping([{ item: 10 }]);
    for (const generation of generator) {
        console.log(await generation);
    }
    return void 0;
}
exports.generateMapping_TEST_ = generateMapping_TEST_;
// generateMapping_TEST_();
//# sourceMappingURL=generateMapping.js.map