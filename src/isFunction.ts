
const FUNCTION_STRING = "function";

const isFunction = (t: Function | null | undefined) => typeof t === FUNCTION_STRING;

export default isFunction;