"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fn_a1f9a_1 = require("./fn_a1f9a");
const fulfillementBlock_1 = require("./fulfillementBlock");
const makeFulfillement_1 = require("./makeFulfillement");
const makeRejection_1 = require("./makeRejection");
void (async function MAIN() {
    console.log(`FROM: SMOKE-TEST in ${__filename}\n`);
    await (0, fn_a1f9a_1.fn_a1f9a_TEST_)();
    await (0, fulfillementBlock_1.fulfillementBlock_TEST_)();
    (0, makeFulfillement_1.makeFulfillement_TEST_)();
    (0, makeRejection_1.makeRejection_TEST_)();
    return void 0;
})();
//# sourceMappingURL=smoke-tests.js.map