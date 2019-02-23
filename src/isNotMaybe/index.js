/* @flow strict */
import isMaybe from '../isMaybe';

function isNotMaybe(arg: mixed): boolean %checks {
  return !isMaybe(arg);
}

export default isNotMaybe;
