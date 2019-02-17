/* @flow strict */

function isNumber(arg: mixed): boolean %checks {
  return typeof arg === 'number';
}

export default isNumber;
