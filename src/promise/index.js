function myPromise(executor) {
  let that = this;
  this.status = 'pending';
  this.value = null;
  this.reason = null;
  function resolve(value) {
    if (that.status === 'pending') {
      that.status = 'success';
      that.value = value;
    }
  }
  function reject(value) {
    if (that.status === 'pending') {
      that.status = 'reject';
      that.reason = value;
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
};
