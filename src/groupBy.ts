import isArray from "./isArray";
import isNullOrEmpty from "./isNullOrEmpty";

const groupBy = <T, X, V extends { [key: string]: X[] }>(identifier: (t: T) => string, items: T[]): V => {
  if (!isArray(items) || isNullOrEmpty(items)) {
    return {} as V;
  }
  return items.reduce((acc, item) => {
    const key = identifier(item) ?? undefined;
    if (isNullOrEmpty(acc[key])) {
      return { ...acc, [key]: [item] };
    }
    return { ...acc, [key]: [...acc[key], item] };
  }, {} as V);
}

export default groupBy;