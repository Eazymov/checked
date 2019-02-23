/* @flow strict */
import isObject from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isObject', () => {
  test('returns true for object', () => {
    const { array, plainObject, classInstance } = values;

    expectChecksToBe(isObject, { array, plainObject, classInstance }, true);
  });

  test('returns false for non-object', () => {
    const { array, plainObject, classInstance, ...rest } = values;

    expectChecksToBe(isObject, rest, false);
  });
});
