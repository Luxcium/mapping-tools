"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awaitedMapping_α = void 0;
const constants_1 = require("../constants");
/** @deprecated */
async function awaitedMapping_α(collection, transform, lookup = v => void v, validate = async (v) => void v, errLookup = v => void v) {
    const result = [...collection].map(async (item, index, array) => {
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
    return Promise.all(result);
}
exports.awaitedMapping_α = awaitedMapping_α;
//# sourceMappingURL=awaitedMapping_%CE%B1.js.map