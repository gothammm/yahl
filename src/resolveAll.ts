import { isArray } from "./isArray";
import { isPromise } from "./isPromise";
import { isNullOrEmpty } from "./isNullOrEmpty";


type PromiseAnyResult<K, V> = Promise<[K[], V[]]>

export const resolveAll = async <T, K, V>(list: Promise<T>[]): Promise<[K[], V[]]> => {
  const defaultReturn = Promise.resolve([[], []]) as PromiseAnyResult<K, V>;
  if (!isArray(list) || isNullOrEmpty(list)) {
    return defaultReturn;
  }
  return list.map(item => isPromise(item) ? item : Promise.resolve(item)).reduce(async (acc, item) => {
    const resolves = (await acc)[0];
    const rejects = (await acc)[1];
    try {
      const result = await item;
      return Promise.resolve([[...resolves, result], [...rejects]]) as PromiseAnyResult<K, V>;
    } catch (error) {
      return Promise.resolve([[...resolves], [...rejects, error]]) as PromiseAnyResult<K, V>;
    }
  }, defaultReturn);
}