import test from 'ava';
import tail from '../src/tail';


test(`should return tail item for happy cases`, t => {
  t.deepEqual(tail([1, 3, 4]), [3, 4]);
  t.deepEqual(tail([{ x: 1 }, { x: 2 }, { x: 3 }]), [{ x: 2 }, { x: 3 }]);
});

test(`should return empty list for non-happy cases`, t => {
  t.deepEqual(tail([]), []);
  t.deepEqual(tail('' as any), []);
  t.deepEqual(tail(undefined as any), []);
  t.deepEqual(tail(null as any), []);
  t.deepEqual(tail({} as any), []);
  t.deepEqual(tail(1 as any), []);
});
