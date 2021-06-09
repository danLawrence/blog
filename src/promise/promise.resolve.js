myPromise.prototype.resolve = function (value) {
  if (value instanceof myPromise) {
    return value;
  }
  return new myPromise(resolve => resolve(value));
};
