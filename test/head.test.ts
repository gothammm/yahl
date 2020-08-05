import test from 'ava';
import head from '../src/head';


test(`should return head item for happy cases`, t => {
  t.is(head([1, 3, 4]), 1);
  t.deepEqual(head([{ x: 1 }, { x: 2 }, { x: 3 }]), { x: 1 });
});

test(`should return null for non-happy cases`, t => {
  t.is(head([]), null);
  t.is(head('' as any), null);
  t.is(head(undefined as any), null);
  t.is(head(null as any), null);
  t.is(head({} as any), null);
  t.is(head(1 as any), null);
});
