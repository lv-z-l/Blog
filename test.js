const d = { val: 3, next: null }
const c = { val: 1, next: d }
const b = { val: 2, next: c }
const a = { val: 4, next: b }


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const sortList = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  const mid = getMid(head)

  const left = sortList(head)
  const right = sortList(mid)
  return merge(left, right)
};

const getMid = function (head) {
  let slow = head, fast = head
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  const mid = slow.next
  slow.next = null
  return mid
}

const merge = function (list1, list2) {
  let p1 = list1, p2 = list2
  let merged = new ListNode(0)
  let temp = merged
  while (p1 != null && p2 != null) {
    if (p1.val < p2.val) {
      temp.next = p1
      p1 = p1.next
    } else {
      temp.next = p2
      p2 = p2.next
    }
    temp = temp.next
  }
  if(p1 != null){
    temp.next = p1
  } else if(p2 != null){
    temp.next = p2
  }
  return merged.next
}


console.log(sortList(a))