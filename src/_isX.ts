
export const _isX = <T>(t: T, type: string): boolean => Object.prototype.toString.call(t) === `[object ${t ?? 'Object'}]`;