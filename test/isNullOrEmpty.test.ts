import test from 'ava';
import { isNullOrEmpty } from '../src/isNullOrEmpty';

test(`should return true for happy cases`, t => {
  t.true(isNullOrEmpty({}));
  t.true(isNullOrEmpty(null));
  t.true(isNullOrEmpty(undefined));
  t.true(isNullOrEmpty([]));
  t.true(isNullOrEmpty(''));
});

test(`should return false for non-happy cases`, t => {
  t.false(isNullOrEmpty({ x: 'y' }));
  t.false(isNullOrEmpty('Hello'));
  t.false(isNullOrEmpty(0));
  t.false(isNullOrEmpty([1]));
});

