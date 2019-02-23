/* @flow strict */

class Test {}

export const values = {
  nonEmptyString: 'string',
  emptyString: '',
  integer: 1,
  float: 1.5,
  booleanTrue: true,
  booleanFalse: false,
  _NaN: NaN,
  _undefined: undefined,
  _null: null,
  plainObject: {},
  array: [],
  _function: () => {},
  classInstance: new Test(),
};

export function expectChecksToBe(
  predicate: (arg: mixed) => boolean,
  valuesToCheck: $Shape<typeof values>,
  expected: boolean,
) {
  Object.values(valuesToCheck).forEach(value => {
    expect(predicate(value)).toBe(expected);
  });
}
