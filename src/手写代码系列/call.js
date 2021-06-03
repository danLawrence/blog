Function.prototype.myCall = function (context = window) {
  context.fn = this;
  // 注意这里类数组，不要直接调用slice，调用不了的，转成数组再用
  var args = [...arguments].slice(1);
  var result = context.fn(...args);
  delete context.fn;
  return result;
};
