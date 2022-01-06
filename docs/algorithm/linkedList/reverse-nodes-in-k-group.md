---
title: 链表反转
author: lvzl
---

来源 [LeeCode](https://leetcode-cn.com/problems/reverse-linked-list/)

> 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

> 输入：head = [1,2,3,4,5]
> 输出：[5,4,3,2,1]

> 输入：head = [1,2]
> 输出：[2,1]

```js
var reverseList = function (head) {
  let prev = null; //上一个
  let current = head; // 当前
  while (current) {
    const next = current.next; // 
    current.next = prev;
    prev = current;
    current = next;
   }
  return prev
};
```