Function.prototype.myApply = function (context = window) {
  context.fn = this;
  var args = arguments[1];
  var result = null;
  if (!args) result = context.fn();
  else result = context.fn(...args);
  delete context.fn;
  return result;
};
