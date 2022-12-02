"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMapping_ς = void 0;
const constants_1 = require("../constants");
/** @deprecated */
function* generateMapping_ς(collection, transform) {
    let i = 0;
    for (const item of collection) {
        try {
            const value = transform(item, i++, [...collection]);
            yield { status: constants_1.FULFILLED, value };
        }
        catch (error) {
            yield { status: constants_1.REJECTED, reason: error };
        }
    }
}
exports.generateMapping_ς = generateMapping_ς;
//# sourceMappingURL=generate_%CF%82.js.map