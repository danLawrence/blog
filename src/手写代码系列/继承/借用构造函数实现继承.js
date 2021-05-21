// 借助构造函数实现继承
function Animals(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

function Dog(name) {
  Animals.call(this, name);
}

Dog.prototype = new Animals();
