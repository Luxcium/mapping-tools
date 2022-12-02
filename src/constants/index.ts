/**
 * Constant `FULFILLED` is used in place of the srting `'fulfilled'` to
 * ensure the type system will properly infer the « flag nature » of
 * this string rather than the more generic `string` type.
 * @public */
export const FULFILLED: 'fulfilled' = 'fulfilled' as const;
/**
 * Constant `REJECTED` is used in place of the srting `'rejected` to
 * ensure the type system will properly infer the « flag nature » of
 * this string rather than the more generic `string` type.
 * @public */
export const REJECTED: 'rejected' = 'rejected' as const;
