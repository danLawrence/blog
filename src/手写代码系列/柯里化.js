function curry(fn) {
  return function resFunc(...args) {
    if (fn.length === args.length) fn(args);
    else return (...arg) => resFunc(...args, ...arg);
  };
}
