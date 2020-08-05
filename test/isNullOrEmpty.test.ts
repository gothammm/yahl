import test from 'ava';
import isNullOrEmpty from '../src/isNullOrEmpty';



test(`should return true for null / undefined / empty objects, arrays`, t => {
  t.true(isNullOrEmpty({}));
  t.true(isNullOrEmpty(null));
  t.true(isNullOrEmpty(undefined));
  t.true(isNullOrEmpty([]));
});