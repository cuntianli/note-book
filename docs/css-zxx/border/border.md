# border

本章知识：

- 了解 border-width 属性；
- 深入了解各种 border-style 类型；
- border 在某些背景定位需求下的妙用；
- border 与三角等图形构建；
- border 与透明边框；
- 如何借助 border 使用有限标签完成我们的布局。

## 1. border-width 不支持百分比
**为何不支持？** 语义和使用场景决定的

![image-20200503194910311](./assets/image-20200503194910311.png)

拿手机和显示器边框来对比下，他们的内容边框，不会随着设备变大就按比例变大的。

所以不支持百分比单位；类似的还有 `outline、box-shadow、text-shadow`...

### 支持关的键字：（ie7除外）

- thin ： 薄薄的 1px
- medium ：薄厚均匀 3px（默认值）
- thick : 厚厚的 5px

**为什么 medium 是默认值 3px ，而不是常用的 1px 呢？**

因为 `border-style:double`至少3px 才有效果

## 2. 深入了解各种 border-style 类型
- solid ： 实线；很熟
- dashed ：虚线；
  
    在 ie 和其他浏览器下兼容性有问题，边框宽高 2:1 和 3:1
- dotted ： 点线，不熟但有故事

    在 ie 和其他浏览器下兼容性有问题，小圆和小方（点的形状）
    在 ie7 和 ie8 下可以利用小圆点来实现实线的圆（利用 overflow:hiden 指显示其中一个角的圆）
- double： 双线，非常不熟
- inset ： 内凹，大眼瞪小眼（基本不使用）    
- outset ：外凹，大眼瞪小眼 
- groove : 沟槽，大眼瞪小眼 
- ridge : 山脊，大眼瞪小眼

 后4个毫无价值，风格过时，各种浏览器间差异大，不兼容， 



### dashed

![image-20200503195329077](./assets/image-20200503195329077.png)

![image-20200503195356951](./assets/image-20200503195356951.png)

### dotted

![image-20200503195522308](./assets/image-20200503195522308.png)

![image-20200503195537981](./assets/image-20200503195537981.png)

实现圆角效果

![image-20200503195653770](./assets/image-20200503195653770.png)

![image-20200503195710895](./assets/image-20200503195710895.png)

### double

![image-20200503195815556](./assets/image-20200503195815556.png)

它的线计算规则如下，并且 **双线宽度永远相等，中间间隔±1**

![image-20200503195958611](./assets/image-20200503195958611.png)

![image-20200503200051858](./assets/image-20200503200051858.png)

### double 实现绘图三道杠

![image-20200503200458518](./assets/image-20200503200458518.png)

先三等分，然后 bottom 占用一分

### inset

![image-20200503200623157](./assets/image-20200503200623157.png)

### outset 

![image-20200503200841214](./assets/image-20200503200841214.png)

### groove :

![image-20200503200911505](./assets/image-20200503200911505.png)



### ridge 

![image-20200503200929287](./assets/image-20200503200929287.png)

### 后面 4 个毫无价值

![image-20200503200944228](./assets/image-20200503200944228.png)

## 3. border-color 与 color
简单说：border-color 默认颜色就是 color

看个例子

![image-20200503201153500](./assets/image-20200503201153500.png)

变个颜色，也会跟着变

![image-20200503201216537](./assets/image-20200503201216537.png)

不单独指定 border 的颜色，那么就使用 color 的

类似的还有 box-shadow、text-shadow 等

这个特性有什么用？

### hover 与图形变色

![image-20200503201329272](./assets/image-20200503201329272.png)

使用边框来处理，值需要一处就可以

![image-20200503201432496](./assets/image-20200503201432496.png)

![image-20200503201511763](./assets/image-20200503201511763.png)

## 4. border 与 background 定位
### background 定位的局限

只能相对左上角数值定位，不能相对右下（css2.1）

![image-20200503201709278](./assets/image-20200503201709278.png)

让图片距离容器左边框永远是 50 px，而不管他外部容器的高度宽度。

要样图片永远距离右边框 50 的化，方法有很多，在这里借助 border 来实现

![image-20200503202006327](./assets/image-20200503202006327.png)

使用了一个空白的 50px 的边框去填充右侧的空白

## 5. border 与三角等图形构建

温故而知新：前面讲解过两种了图形的实现

![image-20200503202238292](./assets/image-20200503202238292.png)

![image-20200503202308136](./assets/image-20200503202308136.png)

上图实现的原理是：下图是帮助我们认知边框的图

![image-20200503202345228](./assets/image-20200503202345228.png)

三角的形成：宽度和高度都为 0

![image-20200503202620569](./assets/image-20200503202620569.png)

到这里就很简单了，要实现一个三角，把其他边变成透明的

![image-20200503202716758](./assets/image-20200503202716758.png)

### 实际应用场景

![image-20200503202808124](./assets/image-20200503202808124.png)

### 模拟圆角

更高级的应用，模拟圆角

![image-20200503202905621](./assets/image-20200503202905621.png)

原理是![image-20200503202920574](./assets/image-20200503202920574.png)

上面的梯形优点小，放大一点，就能看清楚了

![image-20200503202938159](./assets/image-20200503202938159.png)

## 6. border 与透明边框

> border 的透明边框很有用！用途非常广！

因为，始于 IE7，足够兼容。

下面开始分享案例

![image-20200503203137925](./assets/image-20200503203137925.png)

![image-20200503203148988](./assets/image-20200503203148988.png)

以及...

### 优雅增加响应区域大小

 ![image-20200503203224183](./assets/image-20200503203224183.png)

 一般第一想法是下面这样

![image-20200503203345445](./assets/image-20200503203345445.png)

![image-20200503203427583](./assets/image-20200503203427583.png)

实现方式步骤：

1. 边框用来扩大点击区域的大小
2. 原来的边框使用内阴影实现； 第 2 行代码

### 增加可视渲染区域

![image-20200503203620729](./assets/image-20200503203620729.png)

![image-20200503203646971](./assets/image-20200503203646971.png)

让图标任意变色，想变色的时候 drop-shadow 出来一个，然后把原来的图标隐藏掉。就很方便了，如下图的示意图

![image-20200503203817917](./assets/image-20200503203817917.png)

但是这种方式，在 Chrome 浏览器下，**页面中不可见元素的 drop-shadow** 也是不可见的，还包括如下的投影都失败

![image-20200503203951930](./assets/image-20200503203951930.png)

那么在可视区域外元素无投影，区域内但透明的部分呢？

![image-20200503204138070](./assets/image-20200503204138070.png)

上面是最终实现效果的样子。

![image-20200503204211386](./assets/image-20200503204211386.png)

将隐藏属性去掉，左边是原始图标，显示的图标是投影到透明的 边框上的

![image-20200503204301747](./assets/image-20200503204301747.png)

## border 在布局中的应用

还是相当普遍和可靠的。

### 有限标签下的标题栏

由于不常使用，就不展开讲解

### border 与等高布局

先看他的效果

![image-20200503204934506](./assets/image-20200503204934506.png)

原理如下

![image-20200503204952533](./assets/image-20200503204952533.png)

- 黑色区域是： `.box border-left` 左边框模拟的
- 文字是：通过 margin-left -300px 定位到边框上面去的

此类实现的好处：之前讲解过，使用 锚点时有可能飞来飞去的效果，使用边框就没有这种问题。

但是也是有局限的：不支持百分比宽度