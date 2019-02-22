import isNull from '.';

declare var arg: unknown;
declare var _null: null;

if (isNull(arg)) {
  _null = arg;
}
