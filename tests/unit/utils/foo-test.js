import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Foo from 'example2/utils/foo';
const { entries } = Object;

module('foo', function (hooks) {
  setupTest(hooks);

  test('#toObject', function (assert) {
    assert.expect(2);

    const foo = new Foo();

    assert.deepEqual(entries(foo), [['a', 'b']]);

    assert.deepEqual(entries(foo.toObject()), [
      ['a', 'b'],
      ['c', 'd']
    ]);
  });
});
