// 原型链继承
function Animals() {
  this.colors = ['white', 'black'];
}

Animals.prototype.getColors = function () {
  return this.colors;
};

function Dog() {}
Dog.prototype = new Animals();

let dog1 = new Dog();
dog1.colors.push('yellow');
let dog2 = new Dog();
console.log(dog2.colors);

// 原型链继承的问题：
// 1/ 原型中包含的引用类型的属性会被所有实例共享
// 2/ 子类在实例化的时候不能给父类构造函数传参
