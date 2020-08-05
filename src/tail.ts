import isArray from "./isArray";

const tail = <T>(t: T[]): T[] => {
  if (!isArray(t)) {
    return [] as T[];
  }
  const [_, ...tail] = t;
  return tail;
}

export default tail;