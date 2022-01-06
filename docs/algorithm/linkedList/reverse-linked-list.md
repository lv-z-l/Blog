---
title: K 个一组翻转链表
author: lvzl
---

来源 [LeeCode](https://leetcode-cn.com/problems/reverse-nodes-in-k-group)

> 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表

> 输入：head = [1,2,3,4,5], k = 2
> 输出：[2,1,4,3,5]

```js
var reverseKGroup = function (head, k) {
  let arr = [];
  i = 0;
  while (head) {
    arr.push(head.val)
    head = head.next
    ++i
    if (i === k) {
      const current = arr.slice(arr.length - k, arr.length).reverse()
      arr.splice(arr.length - k, k)
      arr = arr.concat(current)
      i = 0
    }
  }
  let res = temp = new ListNode();
  arr.forEach(item => {
    temp.next = new ListNode(item)
    temp = temp.next
  })
  return res.next
};

```


