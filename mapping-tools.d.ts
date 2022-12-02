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

declare namespace assertions {
    export {
        isPromise,
        isPromiseLike,
        isPromiseFulfilledResult,
        isPromiseRejectedResult,
        isPromiseSettledResult,
        isSettled,
        isSettledLeft,
        isSettledRight
    }
}

/** @public */
export declare function awaitedMapping<R, T>(collection: Iterable<T | Settled<T>>, transform?: TransformFn<T, R>, lookup?: LookupFn<T, R>, validate?: ValidateFn<T, R>, errLookup?: ErrLookupFn): Promise<(SettledLeft | SettledRight<R>)[]>;

declare namespace constants {
    export {
        FULFILLED,
        REJECTED
    }
}
export { constants }

/** @beta */
declare const converToIsometricSettledResult: typeof converToIsometricSettledResult_;

declare function converToIsometricSettledResult_(collection: Array<SettledLeft | PromiseRejectedResult>): SettledLeft[];

declare function converToIsometricSettledResult_<T>(collection: Array<SettledRight<T> | PromiseSettledResult<T>>): SettledRight<T>[];

declare function converToIsometricSettledResult_<T>(collection: Array<Settled<T> | PromiseSettledResult<T>>): (SettledRight<T> | SettledLeft)[];

declare namespace core {
    export {
        awaitedMapping,
        generateMapping,
        generateMappingAsync,
        paralellMapping,
        serialMapping
    }
}
export { core }

/** @public  */
export declare interface ErrLookupFn {
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

/**
 * Constant `FULFILLED` is used in place of the srting `'fulfilled'` to
 * ensure the type system will properly infer the « flag nature » of
 * this string rather than the more generic `string` type.
 * @public */
declare const FULFILLED: 'fulfilled';

/**
 * The type FulfilledResult<T> is an alias to PromiseFulfilledResult<T>
 *
 *
 * @alias PromiseSettledResult<T>
 * @public
 */
export declare type FulfilledResult<T> = PromiseFulfilledResult<T>;

/** @public */
export declare function generateMapping<T, R>(collection: Iterable<T | Settled<T>>, transform?: TransformFn<T, R>, lookup?: LookupFn<T, R>, validate?: ValidateFn<T, R>, errLookup?: ErrLookupFn): Generator<Promise<SettledLeft | SettledRight<R>>, void, unknown>;

/** @public */
export declare function generateMappingAsync<R, T>(collection: Iterable<T | Settled<T>>, transform?: TransformFn<T, R>, lookup?: LookupFn<T, R>, validate?: ValidateFn<T, R>, errLookup?: ErrLookupFn): AsyncGenerator<SettledLeft | SettledRight<R>, void, unknown>;

/** @beta */
declare function getFulfilledResults<T>(collection: Array<Settled<T> | PromiseSettledResult<T>>): SettledRight<T>[];

/** @beta */
declare function getRejectedResults<T>(collection: Array<Settled<T> | PromiseSettledResult<T>>): SettledLeft[];

declare namespace helpers {
    export {
        assertions,
        tools
    }
}
export { helpers }

/** @beta */
declare function isometricSettledResult<T>(item: PromiseSettledResult<T>, index?: number): Settled<T>;

/** @internal */
declare function isPromise<T>(element: any): element is Promise<T>;

/** @public */
declare function isPromiseFulfilledResult<T>(contender: any): contender is PromiseFulfilledResult<T>;

/** @internal */
declare function isPromiseLike<T>(element: any): element is PromiseLike<T>;

/** @public */
declare function isPromiseRejectedResult(contender: any): contender is PromiseRejectedResult;

/** @public */
declare function isPromiseSettledResult<T>(contender: any): contender is PromiseSettledResult<T>;

/** @public */
declare function isSettled<T>(contender: any): contender is Settled<T>;

/** @public */
declare function isSettledLeft(contender: any): contender is SettledLeft;

/** @public */
declare function isSettledRight<T>(contender: any): contender is SettledRight<T>;

/** @beta */
declare function listFulfilledResults<T>(collection: Array<Settled<T> | PromiseSettledResult<T>>): T[];

/** @public */
export declare interface LookupFn<S, U = unknown> {
    (value: U, index: number, array: readonly (S | PromiseSettledResult<S>)[]): OnlySideEffect;
}

/**
 * Unimplemented
 * @alpha
 */
declare function mapFulfilledResults(): void;

/** @internal */
export declare type Mapper<T = any, U = unknown, A = T> = (value: T, index?: number, array?: readonly A[]) => U;

/** @internal */
declare type OnlySideEffect = void;

/** @public */
export declare function paralellMapping<T, R>(collection: Iterable<T | Settled<T>>, transform?: TransformFn<T, R>, lookup?: LookupFn<T, R>, validate?: ValidateFn<T, R>, errLookup?: ErrLookupFn): Promise<SettledLeft | SettledRight<R>>[];

/**
 * Constant `REJECTED` is used in place of the srting `'rejected` to
 * ensure the type system will properly infer the « flag nature » of
 * this string rather than the more generic `string` type.
 * @public */
declare const REJECTED: 'rejected';

/**
 * The type RejectedResult is an alias to PromiseRejectedResult.
 *
 *
 * @alias PromiseSettledResult<T>
 * @public
 */
export declare type RejectedResult = PromiseRejectedResult;

/** @public */
export declare function serialMapping<T, R>(collection: Iterable<T | Settled<T>>, transform?: TransformFn<T, R>, lookup?: LookupFn<T, R>, validate?: ValidateFn<T, R>, errLookup?: ErrLookupFn): Promise<(SettledLeft | SettledRight<R>)[]>;

/**
 * Based on the JavaScript {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled | Promise.allSettled()} API The {@link Settled} only objective is to keep the possible failures of a task separated from the expected and extending PromiseSettledResult
 *


 * @remarks
 * The interface Settled<T> is the equivalent of
 * PromiseSettledResult<T> with aditional properties to make it
 * isometric and properties adding Cardinal and Ordinal indexes.
 *
 * @typeParam T - value of a fulfilled ({@link SettledRight}) {@link TransformFn} mapping operation.
 *
 *
 * @public
 */
export declare type Settled<T> = SettledLeft | SettledRight<T>;

/**
 * @depracated
 * @beta
 */
export declare type SettledIso<T = any> = {
    fulfilled: null | T;
    rejected: any;
    value?: undefined | T;
    reason?: any;
    index: number;
} & ({
    status: 'fulfilled';
    value: T;
} | {
    status: 'rejected';
    reason: any;
});

/**
 * The type SettledLeft extends PromiseRejectedResult adding
 * isometric parameters with PromiseRejectedResult and adding
 * Cardinal and Ordinal indexes.
 * @public
 */
export declare type SettledLeft = PromiseRejectedResult & {
    status: 'rejected';
    reason: any;
    value?: undefined;
    rejected: any;
    fulfilled: null;
    recipeSteps: number;
    currentRejection: true | false | undefined;
    index: number;
};

/** @beta */
declare function settledLengts<T>(collection: Array<Settled<T> | PromiseSettledResult<T>>): {
    fulfilled: number;
    rejected: number;
    settled: number;
};

/**
 * The type SettledResult<T> is an alias to PromiseSettledResult<T>
 *
 *
 * @alias PromiseSettledResult<T>
 * @public
 */
export declare type SettledResult<T> = PromiseSettledResult<T>;

/**
 * The type SettledRight<T> extends PromiseFulfilledResult<T> adding
 * isometric parameters with PromiseRejectedResult and adding
 * Cardinal and Ordinal indexes.
 * @public
 */
export declare type SettledRight<T> = PromiseFulfilledResult<T> & {
    status: 'fulfilled';
    value: T;
    reason?: undefined;
    fulfilled: T;
    rejected: null;
    recipeSteps: number;
    currentRejection: null;
    index: number;
};

declare namespace tools {
    export {
        mapFulfilledResults,
        converToIsometricSettledResult,
        getFulfilledResults,
        getRejectedResults,
        isometricSettledResult,
        listFulfilledResults,
        settledLengts
    }
}

/** @public */
export declare interface TransformFn<T, U = unknown> {
    (value: T, index: number, array: readonly (T | PromiseSettledResult<T>)[]): Promise<U>;
}

/** @public */
export declare interface ValidateFn<S, U = unknown> {
    (value: U, index: number, array: readonly (S | PromiseSettledResult<S>)[]): Promise<OnlySideEffect>;
}

export { }
