import { Observable } from "rxjs";
import * as types from "./spy-types";

export function createSpyFromProp<T>(prop: Observable<T>): types.AsyncSpyFunctionForObserver<T>;
export function createSpyFromProp<T>(prop: Promise<T>): types.AsyncSpyFunctionForPromise<T>;
export function createSpyFromProp<T>(prop: () => T): types.AsyncSpyFunctionForFunction<T>;
export function createSpyFromProp(p: any): any {
    // your implementation
}

const a = createSpyFromProp(Promise.resolve("a"));
const b = createSpyFromProp(Observable.of(0));

a.and.resolveWith("bla");
b.and.nextWith(100)