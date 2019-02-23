/* @flow strict */

function isFloat(arg: mixed): boolean %checks {
  return typeof arg === 'number' && isFinite(arg) && Math.floor(arg) !== arg;
}

export default isFloat;
