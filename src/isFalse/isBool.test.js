/* @flow strict */
import isFalse from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isFalse', () => {
  test('returns true for false', () => {
    const { booleanFalse } = values;

    expectChecksToBe(isFalse, { booleanFalse }, true);
  });

  test('returns false for non-false', () => {
    const { booleanFalse, ...rest } = values;

    expectChecksToBe(isFalse, rest, false);
  });
});
