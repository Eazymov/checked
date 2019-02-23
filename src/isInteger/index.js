/* @flow strict */

function isInteger(arg: mixed): boolean %checks {
  return typeof arg === 'number' && isFinite(arg) && Math.floor(arg) === arg;
}

export default isInteger;
