/* @flow strict */
import isBool from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isBool', () => {
  test('returns true for boolean', () => {
    const { _true, boolean } = values;

    expectChecksToBe(isBool, { _true, boolean }, true);
  });

  test('returns false for non-boolean', () => {
    const { _true, boolean, ...rest } = values;

    expectChecksToBe(isBool, rest, false);
  });
});
