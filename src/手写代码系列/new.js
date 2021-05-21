function newFactory(cstor, ...args) {
  if (typeof cstor !== 'function') {
    throw 'please use a function as constructor';
  }
  const obj = Object.create(cstor.prototype);
  const ins = cstor.apply(obj, args);
  const isObject = typeof ins === 'object' && ins !== null;
  const isFunction = typeof ins === 'function';
  return isObject || isFunction ? ins : obj;
}

function Dog(name) {
  this.name = name;
  this.walk = () => {
    console.log('dog is running');
  };
}
