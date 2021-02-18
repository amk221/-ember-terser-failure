export default class Foo {
  a = 'b';

  toObject() {
    const defaults = { c: 'd' };

    return {
      ...this,
      ...defaults
    };
  }
}
