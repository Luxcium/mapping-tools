"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awaitedMapping_1 = require("./awaitedMapping");
const generateMapping_1 = require("./generateMapping");
const generateMappingAsync_1 = require("./generateMappingAsync");
const paralellMapping_1 = require("./paralellMapping");
const serialMapping_1 = require("./serialMapping");
void (async function MAIN() {
    console.log(`FROM: SMOKE-TEST in ${__filename}\n`);
    await (0, serialMapping_1.serialMapping_TEST_)();
    await (0, paralellMapping_1.paralellMapping_TEST_)();
    await (0, generateMappingAsync_1.generateMappingAsync_TEST_)();
    await (0, generateMapping_1.generateMapping_TEST_)();
    await (0, awaitedMapping_1.awaitedMapping_TEST_)();
    // await fn_a1f9a_TEST_();
    // await fulfillementBlock_TEST_();
    // makeFulfillement_TEST_();
    // makeRejection_TEST_();
    return void 0;
})();
//# sourceMappingURL=smoke-tests.js.map