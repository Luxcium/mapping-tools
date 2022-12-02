"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialMapping_α = void 0;
const constants_1 = require("../constants");
/** @deprecated */
async function serialMapping_α(collection, transform, // (item: T) => Promise<R>
// transform: (item: T) => Promise<R>,
lookup = v => void v, validate = async (v) => void v, errLookup = v => void v) {
    let i = 0;
    const results = [];
    for (const item of collection) {
        try {
            const value = await transform(item, i++, [...collection]);
            lookup(value, i);
            await validate(value, i);
            results.push({ status: constants_1.FULFILLED, value });
        }
        catch (error) {
            errLookup(error, i);
            results.push({ status: constants_1.REJECTED, reason: error });
        }
    }
    return results;
}
exports.serialMapping_α = serialMapping_α;
//# sourceMappingURL=serialMapping_%CE%B1.js.map