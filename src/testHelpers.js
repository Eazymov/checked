/* @flow strict */

export const values = {
  nonEmptyString: 'string',
  emptyString: '',
  number: 123,
  booleanTrue: true,
  booleanFalse: false,
  _NaN: NaN,
  _undefined: undefined,
  _null: null,
  plainObject: {},
  array: [],
  _function: () => {},
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
