## this

this 是很多人会混淆的概念，但是其实他一点都不难，不要被那些长篇大论的文章吓住了（我其实也不知道为什么他们能写那么多字），你只需要记住几个规则就可以了。

#### 普通函数

```
function foo() {
	console.log(this.a)
}
var a = 1
foo()

var obj = {
	a: 2,
	foo: foo
}
obj.foo()

// 以上情况就是看函数是被谁调用，那么 `this` 就是谁，没有被对象调用，`this` 就是 `window`

// 以下情况是优先级最高的，`this` 只会绑定在 `c` 上，不会被任何方式修改 `this` 指向
var c = new foo()
c.a = 3
console.log(c.a)

// 还有种就是利用 call，apply，bind 改变 this，这个优先级仅次于 new
```

#### 箭头函数

因为箭头函数没有 this，所以一切妄图改变箭头函数 this 指向都是无效的。
箭头函数的 this 只取决于定义时的环境。比如如下代码中的 fn 箭头函数是在 windows 环境下定义的，无论如何调用，this 都指向 window。

```
var a = 1
const fn = () => {
  console.log(this.a)
}
const obj = {
  fn,
  a: 2
}
obj.fn()
```

#### 常见考点

这里一般都是考 this 的指向问题，牢记上述的几个规则就够用了，比如下面这道题：

```
const a = {
  b: 2,
  foo: function () { console.log(this.b) }
}

function b(foo) {
  // 输出什么？
  foo()
}

b(a.foo)
```
