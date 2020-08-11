
import test from 'ava';
import { resolveAll } from '../src/resolveAll';


test(`should return empty list for invalid input`, async t => {
  t.deepEqual(await resolveAll({} as any), [[], []]);
  t.deepEqual(await resolveAll([] as any), [[], []]);
  t.deepEqual(await resolveAll(null as any), [[], []]);
  t.deepEqual(await resolveAll('s' as any), [[], []]);
});

test(`should return resolved and rejected values for given input`, async t => {
  const actual = await resolveAll<number | string, number, string>([Promise.resolve(1), Promise.resolve(2), Promise.reject('error')]);
  t.deepEqual(actual, [[1, 2], ['error']]);

  const actual2 = await resolveAll<number | string, number, string>([Promise.resolve(1), 2 as any, Promise.reject('error')]);
  t.deepEqual(actual2, [[1, 2], ['error']]);
});
