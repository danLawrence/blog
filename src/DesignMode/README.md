# 什么是设计模式？

设计模式是对软件设计开发过程中反复出现的某类问题的通用解决方案。设计模式更多的是指导思想和方法论，而不是现成的代码，当然每种设计模式都有每种语言中的具体实现方式。学习设计模式更多的是理解各种模式的内在思想和解决的问题，毕竟这是前人无数经验总结成的最佳实践，而代码实现则是对加深理解的辅助。使用设计模式是为了可重用代码、让代码更容易被他人理解、保证代码可靠性。在本文中，我将介绍其中常见的五种设计模式在 JavaScript 中实际使用场景：

## 单例设计模式

### 定义

单例模式仅允许类或对象具有单个实例，并且它使用全局变量来存储该实例。
实现方法是判断是否存在该对象的实例，如果已存在则不再创建
使用场景适用于业务场景中只能存在一个的实例，比如弹窗，购物车

### 实现

单例模式分为懒汉式和饿汉式:
懒汉式

```
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
饿汉式
var ShopCar = (function () {
  var instance = init();
  function init() {
    /*这里定义单例代码*/ return {
      buy(good) {
        this.goods.push(good);
      },
      goods: [],
    };
  }
  return {
    getInstance: function () {
      return instance;
    },
  };
})();
let car1 = ShopCar.getInstance();
let car2 = ShopCar.getInstance();
car1.buy('橘子');
car2.buy('苹果'); //[ '橘子', '苹果' ]
console.log(car1.goods);
console.log(car1 === car2); // true
```

懒汉式在类加载时，不创建实例，因此类加载速度快，但运行时获取对象的速度慢；
饿汉式在类加载时就完成了初始化，所以类加载较慢，但获取对象的速度快

## 策略模式

### 定义

策略模式定义一系列的算法，将每一个算法封装起来，并让他们可以相互替换。
实现方法定义一组可变的策略类封装具体算法，定义一组不变的环境类将请求委托给某一个策略类
使用场景适用于业务场景中需要判断多种条件，甚至包含复杂条件嵌套的，可以使用策略模式来提升代码的可维护性和可读性。比如支付，博客权限校验

### 实现

实例:

```
// 定义几个策略类
var PaymentMethodStrategy = {
  BankAccount: function (money) {
    return money > 50 ? money * 0.7 : money;
  },
  CreditCard: function (money) {
    return money * 0.8;
  },
  Alipay: function (money) {
    return money;
  },
};
/*环境类*/
var userPay = function (selectedStrategy, money) {
  return PaymentMethodStrategy[selectedStrategy](money);
};
console.log('银行卡支付价格为：' + userPay('BankAccount', 100)); //70
console.log('支付宝支付价格为：' + userPay('Alipay', 100)); //100
console.log('信用卡支付价格为：' + userPay('CreditCard', 100)); //80
```

## 观察者模式

### 定义

观察者模式是对象的行为模式，在对象之间定义了一对多的依赖关系，就是多个观察者和一个被观察者之间的关系，当被观察者发生变化的时候，会通知所有的观察者对象，他们做出相对应的操作。
实现方法定义一组可变的策略类封装具体算法，定义一组不变的环境类将请求委托给某一个策略类
使用场景适用于业务场景中当一个对象的状态发生变化时，需要自动通知其他关联对象，自动刷新对象状态，或者说执行对应对象的方法，比如你是一个老师，需要通知班里家长的时候，你可以建一个群（列表）。每次通知事件的时候只要循环执行这个列表就好了（群发），而不用关心这个列表里有谁。

#### 实现

实例:

```
// 创建一个群，保存通知，通知变化之后通知每个家长（触发所有观察者对象）
class Group {
  constructor() {
    this.message = '暂无通知';
    this.parents = [];
  }
  getMessage() {
    return this.message;
  }
  setMassage(message) {
    this.message = message;
    this.notifyAllObservers();
  }
  notifyAllObservers() {
    this.parents.forEach((parent) => {
      parent.update();
    });
  }
  attach(parent) {
    this.parents.push(parent);
  }
}

// 观察者，每个家长
class Parent {
  constructor(name, group) {
    this.name = name;
    this.group = group;
    this.group.attach(this);
  }
  update() {
    console.log(`${this.name} 收到通知: ${this.group.getMessage()}`);
  }
}

let group = new Group();
let t1 = new Parent('李妈妈', group);
let t2 = new Parent('王爸爸', group);
let t3 = new Parent('张爷爷', group);

group.setMassage('开家长会');
group.setMassage('开运动会');
/*
李妈妈 收到通知: 开家长会
王爸爸 收到通知: 开家长会
张爷爷 收到通知: 开家长会
李妈妈 收到通知: 开运动会
王爸爸 收到通知: 开运动会
张爷爷 收到通知: 开运动会
*/
```

## 发布订阅模式

### 定义

发布订阅模式指的是希望接收通知的对象（Subscriber）基于一个主题通过自定义事件订阅主题，发布事件的对象（Publisher）通过发布主题事件的方式通知各个订阅该主题的 Subscriber 对象。

### 实现

```
const pubSub = {
  list:{},
  subscribe(key,fn){  // 订阅
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn);
  },
  publish(){  // 发布
    const arg = arguments;
    const key = Array.prototype.shift.call(arg);
    const fns = this.list[key];

    if(!fns || fns.length<=0) return false;

    for(var i=0,len=fns.length;i<len;i++){
      fns[i].apply(this, arg);
    }
  },
  unSubscribe(key) {  // 取消订阅
    delete this.list[key];
  }
};

// 进行订阅
pubSub.subscribe('name', (name) => {
  console.log('your name is ' + name);
});
pubSub.subscribe('sex', (sex) => {
  console.log('your sex is ' + sex);
});
// 进行发布
pubSub.publish('name', 'ttsy1');  // your name is ttsy1
pubSub.publish('sex', 'male');  // your sex is male
```

上述代码的订阅是基于 name 和 sex 主题来自定义事件，发布是通过 name 和 sex 主题并传入自定义事件的参数，最终触发了特定主题的自定义事件。
可以通过 unSubscribe 方法取消特定主题的订阅。

```
pubSub.subscribe('name', (name) => {
  console.log('your name is ' + name);
});
pubSub.subscribe('sex', (sex) => {
  console.log('your sex is ' + sex);
});
pubSub.unSubscribe('name');
pubSub.publish('name', 'ttsy1');  // 这个主题被取消订阅了
pubSub.publish('sex', 'male');  // your sex is male
```

## 观察者模式 VS 发布订阅模式：

观察者模式与发布订阅模式都是定义了一个一对多的依赖关系，当有关状态发生变更时则执行相应的更新。
不同的是，在观察者模式中依赖于 Subject 对象的一系列 Observer 对象在被通知之后只能执行同一个特定的更新方法，而在发布订阅模式中则可以基于不同的主题去执行不同的自定义事件。
相对而言，发布订阅模式比观察者模式要更加灵活多变。
装饰器模式

### 定义

在不改变原来的结构和功能基础上，动态装饰一些针对特别场景所适用的方法或属性，即添加一些新功能以增强它的某种能力
实现方法定义一组可变的策略类封装具体算法，定义一组不变的环境类将请求委托给某一个策略类
使用场景原有方法维持不变，在原有方法上再挂载其他方法来满足现有需求；函数的解耦，将函数拆分成多个可复用的函数，再将拆分出来的函数挂载到某个函数上，实现相同的效果但增强了复用性。比如多孔插座，机车改装

### 实现

实例:
const Man = function () {
this.run = function () {
console.log('跑步');
};
};
const Decorator = function (old) {
this.oldAbility = old.run;
this.fly = function () {
console.log('具备飞行能力');
};
this.newAbility = function () {
this.oldAbility();
this.fly();
};
};
const man = new Man();
const superMan = new Decorator(man);
superMan.fly(); // 具备飞行能力

## 代理模式

### 定义

代理模式给某一个对象提供一个代理对象，并由代理对象控制对原对象的引用。通俗的来讲代理模式就是我们生活中常见的中介。
实现方法定义一个委托者和一个代理，需要委托的事情在代理中完成
使用场景在某些情况下，一个客户类不想或者不能直接引用一个委托对象，而代理类对象可以在客户类和委托对象之间起到中介的作用。代理可以帮客户过滤掉一些请求并且把一些开销大的对象，延迟到真正需要它时才创建。中介购车、代购、课代表替老师收作业

### 实现

实例:

```
class Letter {
  constructor(name) {
    this.name = name;
  }
}
// 暗恋人小明
let XiaoMing = {
  name: '小明',
  sendLetter(target) {
    target.receiveLetter(this.name);
  },
};
// 代理小华
let xiaoHua = {
  receiveLetter(customer) {
    // 当然要等小红好心情时才送情书，也在送情书也才创建情书
    XiaoHong.listenGoodMood(() => {
      XiaoHong.receiveLetter(new Letter(customer + '的情书'));
    });
  },
};
// 心仪对象小红
let XiaoHong = {
  name: '小红',
  receiveLetter(letter) {
    console.log(this.name + '收到：' + letter.name);
  },
  listenGoodMood(fn) {
    setTimeout(() => {
      fn();
    }, 1000);
  },
};
XiaoMing.sendLetter(xiaoHua); //小红收到：小明的情书
```

Proxy 是 ES6 提供的专门以代理角色出现的代理器,Vue 3.0 的响应式数据部分弃用了 Object.defineProperty，使用 Proxy 来代替它。

```
var proxy = new Proxy(target, handler);
```

现在用 Proxy 模拟一下另一种场景:为了保护不及格的同学，课代表拿到全班成绩单后只会公示及格人的成绩。对考分有疑问的考生，复议后新分数比以前大 10 分才有权利去更新成绩

```
const scoreList = { wang: 90, li: 60, wu: 100 };
const yyProxy = new Proxy(scoreList, {
  get: function (scoreList, name) {
    if (scoreList[name] > 69) {
      console.log('输出成绩');
      return scoreList[name];
    } else {
      console.log('不及格的成绩无法公示');
    }
  },
  set: function (scoreList, name, val) {
    if (val - scoreList[name] > 10) {
      console.log('修改成绩');
      scoreList[name] = val;
    } else {
      console.log('无法修改成绩');
    }
  },
});
yyProxy['wang'] = 98; //无法修改成绩
yyProxy['li'] = 80; //修改成绩
```

## 总结

我曾经以为设计模式是疯狂的，遥远的软件开发指南。然后我发现我一直在使用它们！我介绍的一些模式已在许多应用程序中使用。但归根结底，它们只是理论而已。作为开发人员，是否使用取决于使用后是否使代码逻辑更易于实现和维护。
