/* @flow strict */

function isMaybe(arg: mixed): boolean %checks {
  return arg === null || arg === undefined;
}

export default isMaybe;
