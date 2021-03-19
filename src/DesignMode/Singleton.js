// Singleton.js
// 单例模式

// 懒汉式

export default function runFunc() {
  let ShopCar = (function () {
    let instance;
    function init() {
      /*这里定义单例代码*/
      return {
        buy(good) {
          this.goods.push(good);
        },
        goods: [],
      };
    }
    return {
      getInstance: function () {
        if (!instance) {
          instance = init();
        }
        return instance;
      },
    };
  })();
  let car1 = ShopCar.getInstance();
  let car2 = ShopCar.getInstance();
  car1.buy('橘子');
  car2.buy('苹果');
  console.log(car1.goods); //[ '橘子', '苹果' ]
  console.log(car1 === car2); // true
}
