"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.generateMappingAsync_α = void 0;
const constants_1 = require("../constants");
/** @deprecated */
async function* generateMappingAsync_α(collection, transform // (item: T) => Promise<R>
) {
    let i = 0;
    for await (const item of collection) {
        try {
            const value = await transform(item, i++, [...collection]);
            yield { status: constants_1.FULFILLED, value };
        }
        catch (error) {
            yield { status: constants_1.REJECTED, reason: error };
        }
    }
}
exports.generateMappingAsync_α = generateMappingAsync_α;
/** @deprecated */
exports.map = [].map;
//# sourceMappingURL=generateMappingAsync_%CE%B1.js.map