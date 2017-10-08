/*  */

export class MyBase {

  constructor(bar) {
    this._bar = bar.split('').reverse().join('');
  }

  getBar() { return this._bar; }
}
