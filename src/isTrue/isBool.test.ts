import isTrue from '.';

declare var arg: unknown;
declare var _true: true;

if (isTrue(arg)) {
  _true = arg;
}
