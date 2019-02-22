/* @flow strict */
import isBool from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isBool', () => {
  test('returns true for boolean', () => {
    const { booleanTrue, booleanFalse } = values;

    expectChecksToBe(isBool, { booleanTrue, booleanFalse }, true);
  });

  test('returns false for non-boolean', () => {
    const { booleanTrue, booleanFalse, ...rest } = values;

    expectChecksToBe(isBool, rest, false);
  });
});
