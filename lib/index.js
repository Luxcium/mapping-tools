"use strict";
/**
 * A library for mapping tools.
 *
 *
 * The `@luxcium/mapping-tools` library defines 5 core functions used to map on iterables with diferent outcomes in mind
 * {@link awaitedMapping}, {@link generateMappingAsync}, {@link generateMapping},
 * {@link paralellMapping} and {@link serialMapping}
 *
 * @remarks
 *
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.core = exports.helpers = exports.constants = exports.serialMapping = exports.paralellMapping = exports.generateMappingAsync = exports.generateMapping = exports.awaitedMapping = void 0;
const tslib_1 = require("tslib");
const core = tslib_1.__importStar(require("./core"));
exports.core = core;
const constants = tslib_1.__importStar(require("./constants"));
exports.constants = constants;
const helpers = tslib_1.__importStar(require("./helpers"));
exports.helpers = helpers;
var core_1 = require("./core");
Object.defineProperty(exports, "awaitedMapping", { enumerable: true, get: function () { return core_1.awaitedMapping; } });
Object.defineProperty(exports, "generateMapping", { enumerable: true, get: function () { return core_1.generateMapping; } });
Object.defineProperty(exports, "generateMappingAsync", { enumerable: true, get: function () { return core_1.generateMappingAsync; } });
Object.defineProperty(exports, "paralellMapping", { enumerable: true, get: function () { return core_1.paralellMapping; } });
Object.defineProperty(exports, "serialMapping", { enumerable: true, get: function () { return core_1.serialMapping; } });
// export { awaitedMapping_α as awaitedMapping };
// export { converToIsometricSettledResult };
// export { isometricSettledResult };
// export { getFulfilledResults };
// export { listFulfilledResults };
// export { getRejectedResults };
// export { settledLengts };
// /** @internal */
// export const helpersTools = {
//   converToIsometricSettledResult,
//   isometricSettledResult,
//   getFulfilledResults,
//   listFulfilledResults,
//   getRejectedResults,
//   settledLengts,
// };
// /** @internal */
// export const constants = {
//   FULFILLED,
//   REJECTED,
// };
// /** @internal */
// export const mappingTools = {
//   helpersTools,
//   constants,
//   awaitedMapping_α,
//   generateMapping_ς,
//   generateMappingAsync_α,
//   paralellMapping_ς,
//   serialMapping_α,
// };
// /** @internal */
// export default mappingTools;
//# sourceMappingURL=index.js.map