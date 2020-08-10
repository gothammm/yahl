
import test from 'ava';
import { distinct } from '../src/distinct';


test(`should return empty list for invalid input`, t => {
  t.deepEqual(distinct({} as number[]), []);
});


test(`should return distinct list`, t => {
  t.deepEqual(distinct([1, 1, 2, 3, 4, 5, 5, 6]), [1, 2, 3, 4, 5, 6]);
  t.deepEqual(distinct(['test', '1', '2', '3', '4', '5', '5', '6']), ['test', '1', '2', '3', '4', '5', '6']);
});