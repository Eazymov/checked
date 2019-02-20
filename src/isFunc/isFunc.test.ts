import isFunc from '.';

declare var arg: number | (() => void);
declare var func: () => void;

if (isFunc(arg)) {
  func = arg;
}
