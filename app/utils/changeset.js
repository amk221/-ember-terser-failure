const { keys } = Object;

/**
 * This is temporary because @tracked properties are not enumerable
 * Issue: https://github.com/emberjs/ember.js/issues/18220
 * Once we drop IE 11, we can switch from using this Changeset class
 * and start using Ember tracked-built-ins:
 * https://github.com/pzuraq/tracked-built-ins
 */
export default class Changeset {
  toObject() {
    const rest = keys(this.constructor.prototype).reduce((object, key) => {
      object[key] = this[key];
      return object;
    }, {});

    return {
      ...this,
      ...rest
    };
  }
}
