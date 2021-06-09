myPromise.prototype.all = function (arr) {
  let index = 0;
  let result = [];
  return new Promise((resolve, reject) => {
    arr.forEach((item, i) => {
      Promise.resolve(item).then(
        value => {
          result[i] = value;
          index++;
          if (index === arr.length) resolve(result);
        },
        err => {
          reject(err);
        }
      );
    });
  });
};
