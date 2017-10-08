/*  */
/* eslint no-console: 0 */

import { MyBase } from './base';


class MyClass extends MyBase {

  constructor(foo) {
    super(foo);
    this._foo = foo;
  }

  getFoo() { return this._foo; }
}


const inst = new MyClass('Here we go!');

console.log(inst.getFoo());
console.log(inst.getBar());
