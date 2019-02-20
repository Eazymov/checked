/* @flow strict */

function isUndef(arg: mixed): boolean %checks {
  return typeof arg === 'undefined';
}

export default isUndef;
