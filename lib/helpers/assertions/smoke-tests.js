"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPromise_1 = require("./isPromise");
const isPromiseLike_1 = require("./isPromiseLike");
const isPromiseSettledResult_1 = require("./isPromiseSettledResult");
const isSettled_1 = require("./isSettled");
void (async function MAIN() {
    console.log(`at: MAIN from ${__filename}`);
    await (0, isPromise_1.isPromise_TEST_)();
    await (0, isPromiseLike_1.isPromiseLike_TEST_)();
    await (0, isPromiseSettledResult_1.isPromiseSettledResult_TEST_)();
    await (0, isSettled_1.isSettled_TEST_)();
    return void 0;
})();
//# sourceMappingURL=smoke-tests.js.map