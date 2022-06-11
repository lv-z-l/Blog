# CSS-display 属性

## 块级元素，内联元素

**块级元素(block)特性：**

- 总是独占一行，表现为另起一行开始，而且其后的元素也必须另起一行显示;
- 宽度(width)、高度(height)、内边距(padding)和外边距(margin)都可控制;

**内联元素(inline)特性：也叫行内元素**

- 和相邻的内联元素在同一行;
- 宽度(width)、高度(height)、内边距的 top/bottom(padding-top/padding-bottom)和外边距的 top/bottom(margin-top/margin-bottom)都不可改变，就是里面文字或图片的大小;

**块级元素主要有：**

- address , blockquote , center , dir , div , dl , fieldset , form , h1 , h2 , h3 , h4 , h5 , h6 , hr , isindex , menu , noframes , noscript , ol , p , pre , table , ul , li

**内联元素主要有：**

- a , abbr , acronym , b , bdo , big , br , cite , code , dfn , em , font , i , img , input , kbd , label , q , s , samp , select , small , span , strike , strong , sub , sup ,textarea , tt , u , var

## 隐藏元素 - display:none 或 visibility:hidden

隐藏一个元素可以通过把 display 属性设置为"none"，或把 visibility 属性设置为"hidden"。

- visibility:hidden 可以隐藏某个元素，但隐藏的元素仍需占用与未隐藏之前一样的空间。也就是说，该元素虽然被隐藏了，但仍然会影响布局。
- display:none 可以隐藏某个元素，且隐藏的元素不会占用任何空间。也就是说，该元素不但被隐藏了，而且该元素原本占用的空间也会从页面布局中消失。

## display

利用 CSS 我们可以摆脱上面表格里 HTML 标签归类的限制，自由地在不同标签/元素上应用我们需要的属性。

主要用的 CSS 样式有以下三个：

- display:block -- 显示为块级元素, 拥有块级元素的特性。
- display:inline -- 显示为内联元素，拥有内联元素的特性。
- display:inline-block -- 显示为内联块元素，表现为同行显示并可修改宽高内外边距等属性。

比如将所有<li>元素加上 display:inline-block 样式，原本垂直的列表就可以水平显示了。

## overflow 属性

有时候元素的内容会溢出元素的边框，简单来说也就是盒子太小装不下这么多东西，这时候如果不想改变盒子的大小就可以使用 overflow 属性；

| 值      | 描述                                                     |
| :------ | :------------------------------------------------------- |
| visible | **默认值**。溢出内容不会被修剪，会呈现在元素框之外。     |
| hidden  | 内容会被修剪，溢出内容不可见。                           |
| scroll  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 |
| auto    | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 |
| inherit | 规定应该从父元素继承 overflow 属性的值。                 |

## overflow-x 属性

如果元素的内容溢出了元素的内容区-剪辑 div 元素的左/右边缘内容；

| 值         | 描述                                   |
| :--------- | :------------------------------------- |
| visible    | 不裁剪内容，可能会显示在内容框之外。   |
| hidden     | 裁剪内容 - 不提供滚动机制。            |
| scroll     | 裁剪内容 - 提供滚动机制。              |
| auto       | 如果溢出框，则应该提供滚动机制。       |
| no-display | 如果内容不适合内容框，则删除整个框。   |
| no-content | 如果内容不适合内容框，则隐藏整个内容。 |

## overflow-y 属性

如果元素的内容溢出了元素的内容区-剪辑 div 元素的顶部/底部边缘内容；

| 值         | 描述                                   |
| :--------- | :------------------------------------- |
| visible    | 不裁剪内容，可能会显示在内容框之外。   |
| hidden     | 裁剪内容 - 不提供滚动机制。            |
| scroll     | 裁剪内容 - 提供滚动机制。              |
| auto       | 如果溢出框，则应该提供滚动机制。       |
| no-display | 如果内容不适合内容框，则删除整个框。   |
| no-content | 如果内容不适合内容框，则隐藏整个内容。 |
