/* @flow */
/* eslint no-console: 0 */

interface MyInterface {
  _foo: string;
  getFoo(): string;
}

class MyBase {
  _bar: string;

  constructor(bar: string) {
    this._bar = bar.split('').reverse().join('');
  }

  getBar(): string { return this._bar; }
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
