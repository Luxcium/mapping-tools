"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialMapping = exports.paralellMapping = exports.generateMappingAsync = exports.generateMapping = exports.awaitedMapping = void 0;
/**
 * Represents a book in the catalog.
 * @public
 */
var awaitedMapping_1 = require("./awaitedMapping");
Object.defineProperty(exports, "awaitedMapping", { enumerable: true, get: function () { return awaitedMapping_1.awaitedMapping; } });
var generateMapping_1 = require("./generateMapping");
Object.defineProperty(exports, "generateMapping", { enumerable: true, get: function () { return generateMapping_1.generateMapping; } });
var generateMappingAsync_1 = require("./generateMappingAsync");
Object.defineProperty(exports, "generateMappingAsync", { enumerable: true, get: function () { return generateMappingAsync_1.generateMappingAsync; } });
var paralellMapping_1 = require("./paralellMapping");
Object.defineProperty(exports, "paralellMapping", { enumerable: true, get: function () { return paralellMapping_1.paralellMapping; } });
var serialMapping_1 = require("./serialMapping");
Object.defineProperty(exports, "serialMapping", { enumerable: true, get: function () { return serialMapping_1.serialMapping; } });
//# sourceMappingURL=index.js.map