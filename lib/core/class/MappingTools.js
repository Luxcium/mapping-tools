"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingTools = void 0;
class MappingTools {
    transformFn_ = async (value) => value;
    lookupFn_ = (value, index, array) => void [value, index, array];
    validateFn_ = async (value, index, array) => void [value, index, array];
    errLookupFn_ = (value, index, currentRejection) => void [value, index, currentRejection];
    // transformFn(fn: TransformFn<T>) {
    //   this.transformFn_ = fn;
    // }
    // set lookupFn(fn: LookupFn<T>) {
    //   this.lookupFn_ = fn;
    // }
    // set validateFn(fn: ValidateFn<T>) {
    //   this.validateFn_ = fn;
    // }
    // set errLookupFn(fn: ErrLookupFn) {
    //   this.errLookupFn_ = fn;
    // }
    void() {
        this.transformFn_;
        this.lookupFn_;
        this.validateFn_;
        this.errLookupFn_;
    }
}
exports.MappingTools = MappingTools;
//# sourceMappingURL=MappingTools.js.map