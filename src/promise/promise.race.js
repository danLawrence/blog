myPromise.prototype.race = function (arr) {
  return new Promise((resolve, reject) => {
    arr.forEach(item => {
      Promise.resolve(item).then(
        value => {
          resolve(value);
        },
        err => {
          reject(err);
        }
      );
    });
  });
};
