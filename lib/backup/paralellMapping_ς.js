"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paralellMapping_ς = void 0;
const constants_1 = require("../constants");
/** @deprecated */
function paralellMapping_ς(collection, transform, //  (item: T) => Promise<R>,
// transform: (item: T) => Promise<R>,
lookup = v => void v, validate = async (v) => void v, errLookup = v => void v) {
    return [...collection].map(async (item, index, array) => {
        try {
            const value = await transform(item, index, array);
            lookup(value, index);
            await validate(value, index);
            return { status: constants_1.FULFILLED, value };
        }
        catch (error) {
            errLookup(error, index);
            return { status: constants_1.REJECTED, reason: error };
        }
    });
}
exports.paralellMapping_ς = paralellMapping_ς;
// Settled
// SettledRight
// SettledLeft
//# sourceMappingURL=paralellMapping_%CF%82.js.map