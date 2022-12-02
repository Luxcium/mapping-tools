"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMappingAsync_TEST_ = exports.generateMappingAsync = void 0;
const fn_a1f9a_1 = require("./function/fn_a1f9a");
/** @public */
async function* generateMappingAsync(collection, transform = async (value) => value, lookup = v => void v, validate = async (v) => void v, errLookup = v => void v) {
    let index = 0;
    for await (const item of collection) {
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
exports.generateMappingAsync = generateMappingAsync;
async function generateMappingAsync_TEST_() {
    console.log(`at: generateMappingAsync_TEST_ from ${__filename}`);
    const generator = generateMappingAsync([{ item: 10 }]);
    for await (const generation of generator) {
        console.log(generation);
    }
    return void 0;
}
exports.generateMappingAsync_TEST_ = generateMappingAsync_TEST_;
// generateMappingAsync_TEST_();
//# sourceMappingURL=generateMappingAsync.js.map