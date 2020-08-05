import isArray from "./isArray";

const head = <T>(t: T[]): T | null => {
  if (!isArray(t)) {
    return null;
  }
  const [item, ..._] = t;
  return item ?? null;
}

export default head;