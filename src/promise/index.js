function myPromise(func) {
  let that = this;
  this.status = 'pending';
  this.value = null;
  this.reason = null;
  this.onFulfilledArray = [];
  this.onRejectedArray = [];

  function resolve(value) {
    if (that.status === 'pending') {
      that.status = 'fulFilled';
      that.value = value;
      that.onFulfilledArray.forEach(func => {
        func(that.value);
      });
    }
  }
  function reject(reason) {
    if (that.status === 'pending') {
      that.status = 'rejected';
      that.reason = reason;
      that.onRejectedArray.forEach(func => {
        func(that.reason);
      });
    }
  }
  func(resolve, reject);
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : data => data;
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : error => {
          throw error;
        };
  if (this.status === 'fulFilled') {
    return (promiseNext = new myPromise((resolve, reject) => {
      try {
        const res = onFulfilled(this.value);
        getResolveValue(promiseNext, res, resolve, reject);
      } catch (e) {
        onRejected(e);
      }
    }));
  } else if (this.status === 'rejected') {
    return (promiseNext = new myPromise((resolve, reject) => {
      try {
        const res = onFulfilled(this.reason);
        getResolveValue(promiseNext, res, resolve, reject);
      } catch (e) {
        onRejected(e);
      }
    }));
  } else if (this.status === 'pending') {
    return (promiseNext = new myPromise((resolve, reject) => {
      this.onFulfilledArray.push(value => {
        try {
          const res = onFulfilled(value);
          getResolveValue(promiseNext, res, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
      this.onRejectedArray.push(reason => {
        try {
          const res = onRejected(reason);
          getResolveValue(promiseNext, res, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }));
  }
};

function getResolveValue(promiseNext, res, resolve, reject) {
  if (res === promiseNext) {
    return reject('cannot use the same promise');
  }
  let mark = false;
  if ((typeof res === 'object' && res !== null) || typeof res === 'function') {
    try {
      let then = res.then;
      if (typeof then === 'function') {
        then.call(
          res,
          resNext => {
            if (mark) return;
            mark = true;
            getResolveValue(promiseNext, resNext, resolve, reject);
          },
          errNext => {
            if (mark) return;
            mark = true;
            reject(errNext);
          }
        );
      } else {
        if (mark) return;
        mark = true;
        resolve(res);
      }
    } catch (e) {
      if (mark) return;
      mark = true;
      reject(e);
    }
  } else {
    resolve(res);
  }
}
