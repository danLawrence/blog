myPromise.prototype.any = function (arr) {
  let index = 0;
  return new Promise((resolve, reject) => {
    if (arr.length === 0) return;
    arr.forEach((item, i) => {
      Promise.resolve(item).then(
        value => {
          resolve(value);
        },
        err => {
          index++;
          if (index === arr.length) {
            reject(new AggregateError('All promises were rejected'));
          }
        }
      );
    });
  });
};
