/* @flow */

export class MyBase {
  _bar: string;

  constructor(bar: string) {
    this._bar = bar.split('').reverse().join('');
  }

  getBar(): string { return this._bar; }
}
