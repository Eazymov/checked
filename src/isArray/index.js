/* @flow strict */

function isArray(arg: mixed): boolean %checks {
  return /* :: arg instanceof Array && */ Array.isArray(arg);
}

export default isArray;
