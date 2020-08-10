
import test from 'ava';
import { distinctBy } from '../src/distinctBy';


test(`should return empty list for invalid input`, t => {
  t.deepEqual(distinctBy(item => item, {} as number[]), []);
});


test(`should return distinct based on selector func`, t => {
  t.deepEqual(distinctBy(item => item.key, [{
    key: 1,
    value: 2,
  }, {
    key: 2,
    value: 3
  }, {
    key: 2,
    value: 4
  }, {
    key: 3,
    value: 4
  }]), [{
    key: 1,
    value: 2,
  }, {
    key: 2,
    value: 3
  }, {
    key: 3,
    value: 4
  }]);

  t.deepEqual(distinctBy(item => item[0], [[1, 2], [1, 3], [2, 4], [2, 5], [3, 2]]), [[1, 2], [2, 4], [3, 2]]);
  t.deepEqual(distinctBy(item => item * 2, [1, 2, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  t.deepEqual(distinctBy(item => item, [1, 2, 3, 4, 5, 5]), [1, 2, 3, 4, 5]);
});