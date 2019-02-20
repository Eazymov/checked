import isUndef from '.';

declare var arg: unknown;
declare var undef: void;

if (isUndef(arg)) {
  undef = arg;
}
