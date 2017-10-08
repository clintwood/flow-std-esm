/* @flow */
/* eslint no-console: 0 */

import { MyBase } from './base';

interface MyInterface {
  _foo: string;
  getFoo(): string;
}

class MyClass extends MyBase implements MyInterface {
  _foo: string;

  constructor(foo: string) {
    super(foo);
    this._foo = foo;
  }

  getFoo(): string { return this._foo; }
}


const inst = new MyClass('Here we go!');

console.log(inst.getFoo());
console.log(inst.getBar());
