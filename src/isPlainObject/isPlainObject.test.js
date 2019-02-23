/* @flow strict */
import isPlainObject from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isPlainObject', () => {
  test('returns true for plain object', () => {
    const { plainObject } = values;

    expectChecksToBe(isPlainObject, { plainObject }, true);
  });

  test('returns false for non-plain object', () => {
    const { plainObject, ...rest } = values;

    expectChecksToBe(isPlainObject, rest, false);
  });
});
