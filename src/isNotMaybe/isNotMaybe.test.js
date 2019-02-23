/* @flow strict */
import isNotMaybe from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isNotMaybe', () => {
  test('returns true for non-maybe', () => {
    const { _null, _undefined, ...rest } = values;

    expectChecksToBe(isNotMaybe, rest, true);
  });

  test('returns false for maybe', () => {
    const { _null, _undefined } = values;

    expectChecksToBe(isNotMaybe, { _null, _undefined }, false);
  });
});
