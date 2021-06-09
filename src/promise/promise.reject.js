myPromise.prototype.reject = function (reason) {
  return new Promise((resolve, reject) => reject(reason));
};
