function myPromise(executor) {
  let that = this;
  this.status = 'pending';
  this.value = null;
  this.reason = null;
  this.onFulfilledArray = [];
  this.onRejectedArray = [];
  function resolve(value) {
    if (that.status === 'pending') {
      that.status = 'success';
      that.value = value;
      that.onFulfilledArray.forEach(fn => fn(value));
    }
  }
  function reject(value) {
    if (that.status === 'pending') {
      that.status = 'reject';
      that.reason = value;
      that.onRejectedArray.forEach(fn => fn(value));
    }
  }

  executor(resolve, reject);
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : data => data;
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : error => {
          throw error;
        };
  if (this.status === 'success') {
    onFulfilled(this.value);
  }
  if (this.status === 'reject') {
    onRejected(this.reason);
  }
  if (this.status === 'pending') {
    this.onFulfilledArray.push(onFulfilled);
    this.onRejectedArray.push(onRejected);
  }
};
