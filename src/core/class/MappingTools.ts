import { OnlySideEffect } from '../../types';

export class MappingTools<T, R> {
  private transformFn_: TransformFn<T, R> = async (value: T) =>
    value as any as R;
  private lookupFn_: LookupFn<T, R> = (value, index, array) =>
    void [value, index, array];
  private validateFn_: ValidateFn<T, R> = async (value, index, array) =>
    void [value, index, array];
  private errLookupFn_: ErrLookupFn = (value, index, currentRejection) =>
    void [value, index, currentRejection];

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

export interface TransformFn<T, U = unknown> {
  (
    value: T,
    index: number,
    array: readonly (T | PromiseSettledResult<T>)[]
  ): Promise<U>;
}
/** @public */
export interface LookupFn<S, U = unknown> {
  (
    value: U,
    index: number,
    array: readonly (S | PromiseSettledResult<S>)[]
  ): OnlySideEffect;
}
/** @public */
export interface ValidateFn<S, U = unknown> {
  (
    value: U,
    index: number,
    array: readonly (S | PromiseSettledResult<S>)[]
  ): Promise<OnlySideEffect>;
}
/** @public  */
export interface ErrLookupFn {
  /**
   * @param  reason - The reason provided by the catch clause
   * inside the mapping routine.
   * @param index - The zero based index provided by map or
   * similarly an index provided by the mapping routine.
   * @param currentRejection - Flag that indicates if the exception
   * was hapening on the curent iteration of the mapping routine or
   * if it was part of a previously raised exception that was already
   * part of the item currently being mapped from the ptovided collection.
   * @returns Do not return any value is trigered syncrounously.
   */
  (reason: any, index: number, currentRejection: boolean): OnlySideEffect;
}
