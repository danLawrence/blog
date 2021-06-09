myPromise.prototype.allSettled = function (arr) {
  let index = 0;
  let result = [];
  return new Promise((resolve, reject) => {
    arr.forEach((item, i) => {
      Promise.resolve(item).then(
        value => {
          result[i] = { status: 'fulfilled', value: value };
          index++;
          if (index === arr.length) resolve(result);
        },
        err => {
          result[i] = { status: 'rejected', reason: err };
          index++;
          if (index === arr.length) resolve(result);
        }
      );
    });
  });
};
