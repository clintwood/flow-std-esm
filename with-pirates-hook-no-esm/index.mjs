/* eslint no-console: 0 */

class MyBase {

  constructor(bar) {
    this._bar = bar.split('').reverse().join('');
  }

  getBar() { return this._bar; }
}

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
