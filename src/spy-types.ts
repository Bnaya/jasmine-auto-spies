import 'jasmine';

/**
 * The Auto Spy Object type
 */

export type Spy<T> = T & {
  [k in keyof T]: AsyncSpyFunction;
}

/**
 * Originally in Jasmine, Spy is a function and SpyObj is an Object
 * But we decided to use "Spy" for objects, and "SpyFunction" to functions.
 */
export interface AsyncSpyFunction extends jasmine.Spy {
  (...params: any[]): any;
  and: AsyncSpyFunctionAnd
}

export interface AsyncSpyFunctionAnd extends jasmine.SpyAnd {
  nextWith(value: any): void;
  nextWithError(value: any): void;
  resolveWith(value: any): void;
  rejectWith(value: any): void;
}

// ** maybe we can merge the for Promise, Observer, function, with types map ***
export interface AsyncSpyFunctionForFunction<T> extends jasmine.Spy {
  (...params: any[]): any;
  and: AsyncSpyFunctionAndForFunction<T>;
}

export interface AsyncSpyFunctionForPromise<T> extends jasmine.Spy {
  (...params: any[]): any;
  and: AsyncSpyFunctionAndForPromise<T>;
}

export interface AsyncSpyFunctionForObserver<T> extends jasmine.Spy {
  (...params: any[]): any;
  and: AsyncSpyFunctionAndForObserver<T>;
}

export interface AsyncSpyFunctionAndForPromise<T> extends jasmine.SpyAnd {
  resolveWith(value: T): void;
  rejectWith(value: any): void;
}

export interface AsyncSpyFunctionAndForObserver<T> extends jasmine.SpyAnd {
  nextWith(value: T): void;
  nextWithError(value: any): void;
}

export interface AsyncSpyFunctionAndForFunction<T> extends jasmine.SpyAnd {
  returnValue(val: T): jasmine.Spy;
}