"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSettledRight = exports.isSettledLeft = exports.isSettled = exports.isPromiseSettledResult = exports.isPromiseRejectedResult = exports.isPromiseFulfilledResult = exports.isPromiseLike = exports.isPromise = void 0;
var isPromise_1 = require("./isPromise");
Object.defineProperty(exports, "isPromise", { enumerable: true, get: function () { return isPromise_1.isPromise; } });
var isPromiseLike_1 = require("./isPromiseLike");
Object.defineProperty(exports, "isPromiseLike", { enumerable: true, get: function () { return isPromiseLike_1.isPromiseLike; } });
var isPromiseSettledResult_1 = require("./isPromiseSettledResult");
Object.defineProperty(exports, "isPromiseFulfilledResult", { enumerable: true, get: function () { return isPromiseSettledResult_1.isPromiseFulfilledResult; } });
Object.defineProperty(exports, "isPromiseRejectedResult", { enumerable: true, get: function () { return isPromiseSettledResult_1.isPromiseRejectedResult; } });
Object.defineProperty(exports, "isPromiseSettledResult", { enumerable: true, get: function () { return isPromiseSettledResult_1.isPromiseSettledResult; } });
var isSettled_1 = require("./isSettled");
Object.defineProperty(exports, "isSettled", { enumerable: true, get: function () { return isSettled_1.isSettled; } });
Object.defineProperty(exports, "isSettledLeft", { enumerable: true, get: function () { return isSettled_1.isSettledLeft; } });
Object.defineProperty(exports, "isSettledRight", { enumerable: true, get: function () { return isSettled_1.isSettledRight; } });
//# sourceMappingURL=index.js.map