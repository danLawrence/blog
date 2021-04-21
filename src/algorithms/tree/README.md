# JS 算法之深度优先遍历(DFS)和广度优先遍历(BFS)

### 背景

---

在开发页面的时候，我们有时候会遇到这种需求：在页面某个 dom 节点中遍历，找到目标 dom 节点，我们正常做法是利用选择器 document.getElementById()，document.getElementsByName()或者 document.getElementsByTagName()，但在本文，我们从算法的角度去查找 dom 节点，同时理解一下深度优先遍历(DFS)和广度优先遍历(BFS)的原理。

### 准备

---

假设页面上的 dom 结构如下：

```
<div id="root">
    <ul>
        <li>
            <a href="">
                <img src="" alt="">
            </a>
        </li>
        <li>
            <span></span>
        </li>
        <li>
        </li>
    </ul>
    <p></p>
    <button></button>
</div>
```

让我们来把这个 dom 结构转化成树的样子

![](https://files.mdnice.com/user/9761/f71da256-10bf-44e1-9a8c-10fedf77b50e.png)

这样之后，dom 结构似乎清楚了不少。

## 深度优先遍历（Depth-First Search）

该方法是以纵向的维度对 dom 树进行遍历，从一个 dom 节点开始，一直遍历其子节点，直到它的所有子节点都被遍历完毕之后在遍历它的兄弟节点。即如图所示（遍历顺序为红字锁标）：

![](https://files.mdnice.com/user/9761/e85afe6e-c31f-4a7d-99af-13a02587f369.png)

js 实现该算法代码(递归版本)：

```
function deepFirstSearch(node,nodeList) {
    if (node) {
        nodeList.push(node);
        var children = node.children;
        for (var i = 0; i < children.length; i++)
        //每次递归的时候将 需要遍历的节点 和 节点所存储的数组传下去
        deepFirstSearch(children[i],nodeList);
    }
    return nodeList;
}
```

非递归版本：

```
function deepFirstSearch(node) {
    var nodes = [];
    if (node != null) {
        var stack = [];
        stack.push(node);
        while (stack.length != 0) {
        var item = stack.pop();
        nodes.push(item);
        var children = item.children;
        for (var i = children.length - 1; i >= 0; i--)
            stack.push(children[i]);
        }
    }
    return nodes;
}
```

deepFirstSearch 接受两个参数，第一个参数是需要遍历的节点，第二个是节点所存储的数组，并且返回遍历完之后的数组，该数组的元素顺序就是遍历顺序，调用方法：

```
let root = document.getElementById('root')
deepTraversal(root,nodeList=[])
```

控制台输出结果

![](https://files.mdnice.com/user/9761/b5ca7e52-646b-4942-b492-746463310f37.png)

## 广度优先遍历（breadth-first traverse）

该方法是以横向的维度对 dom 树进行遍历，从该节点的第一个子节点开始，遍历其所有的兄弟节点，再遍历第一个节点的子节点，完成该遍历之后，暂时不深入，开始遍历其兄弟节点的子节点。即如图所示（遍历顺序为红字锁标）：

![](https://files.mdnice.com/user/9761/be07dd16-4d48-4ccb-bd80-3d3e029df334.png)

js 实现算法代码（递归版本）：

```
function breadthFirstSearch(node) {
    var nodes = [];
    var i = 0;
    if (!(node == null)) {
        nodes.push(node);
        breadthFirstSearch(node.nextElementSibling);
        node = nodes[i++];
        breadthFirstSearch(node.firstElementChild);
    }
    return nodes;
}
```

递归版本的 BFS 由于层级太深，会导致堆栈溢出：Maximum call stack size exceeded，但遍历的顺序依旧没有问题，可以在遍历过程中进行操作，不返回遍历数组即可。
非递归版本：

```
function breadthFirstSearch(node) {
    var nodes = [];
    if (node != null) {
        var queue = [];
        queue.unshift(node);
        while (queue.length != 0) {
            var item = queue.shift();
            nodes.push(item);
            var children = item.children;
            for (var i = 0; i < children.length; i++)
                queue.push(children[i]);
        }
    }
    return nodes;
}
```

控制台输出结果：

![](https://files.mdnice.com/user/9761/8c46ee16-f062-488c-a578-3699734c5257.png)

### 总结

BFS 和 DFS 都是图的算法之一，本文所阐述的版本较为简单，为无向且非连通图，在日后会更新更多基于 JavaScript 的算法。
