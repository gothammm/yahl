import test from 'ava';
import { groupBy } from '../src/groupBy';

test(`should return empty for non-happy cases`, t => {
  t.deepEqual(groupBy(t => t, [] as string[]), {});
});

test(`should return object with grouped data for happy cases`, t => {
  t.deepEqual(groupBy(t => t, ['a', 'a', 'b', 'c', 'c'] as string[]), {
    a: ['a', 'a'],
    b: ['b'],
    c: ['c', 'c']
  });
});

test(`should generate object with grouped data with undefined key for non-happy cases`, t => {
  t.deepEqual(groupBy(t => null as any, ['a', 'a', 'b', 'c', 'c'] as string[]), {
    'undefined': ['a', 'a', 'b', 'c', 'c']
  });
});