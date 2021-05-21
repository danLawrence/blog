// 实现Object.create
function create(proto, protoObject = undefined) {
  if (typeof proto !== 'function' && typeof proto !== 'object') {
    throw 'please use object or null as proto';
  }
  if (protoObject === null) {
    throw 'cannot convert null or undefined to object';
  }
  function F() {}
  F.prototype = proto;
  const obj = new F();
  if (protoObject !== null && protoObject !== undefined) {
    Object.defineProperty(obj, protoObject);
  }
  if (proto === null) obj.__proto__ = null;
  return obj;
}
