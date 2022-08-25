"use strict";
const a = '5';
const b = 5;
const c = true;
const d = undefined;
const e = null;
const f = Symbol.for("abc");
const g = 123;
function add(x, y) { return x + y; }
const add1 = (x, y) => x + y;
const add2 = (x, y) => x + y;
// 객체의 타입
const obj = { lat: 37.5, lon: 127.5 };
// 배열의 타입
const arr1 = ['123', '456'];
const arr2 = [123, 456];
const arr3 = [123, 456];
// 튜플(길이가 고정된 배열)의 타입
const arr4 = [1, 2, "3"];
