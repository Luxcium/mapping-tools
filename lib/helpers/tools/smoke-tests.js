"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converToIsometricSettledResult_1 = require("./converToIsometricSettledResult");
const getFulfilledResults_1 = require("./getFulfilledResults");
const getRejectedResults_1 = require("./getRejectedResults");
const isometricSettledResult_1 = require("./isometricSettledResult");
const listFulfilledResults_1 = require("./listFulfilledResults");
const settledLengts_1 = require("./settledLengts");
void (async function MAIN() {
    console.log(`at: MAIN from ${__filename}`);
    await (0, converToIsometricSettledResult_1.converToIsometricSettledResult_TEST_)();
    await (0, getFulfilledResults_1.getFulfilledResults_TEST_)();
    await (0, getRejectedResults_1.getRejectedResults_TEST_)();
    await (0, isometricSettledResult_1.isometricSettledResult_TEST_)();
    await (0, listFulfilledResults_1.listFulfilledResults_TEST_)();
    await (0, settledLengts_1.settledLengts_TEST_)();
    return void 0;
})();
//# sourceMappingURL=smoke-tests.js.map