/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 使用快慢指针找到链表的中点。
// 反转前半部分链表。
// 比较前半部分和后半部分的节点值。

var isPalindrome = function(head) {
  // 通过双指针，把前半截翻转了
  //    |
  // 2 1 2 1
  let slow = fast = head
  let prev

  //循环过程中，每次操作如下：
  // 快指针 fast 每次移动两步，用于定位中点。
  // 慢指针 slow 每次移动一步，同时将经过的节点反转，构建反转后的前半部分链表。
  // 当 fast 为 null 或指向链表末尾时，结束循环，此时 prev 指向前半部分反转后的链表头，slow 指向中间节点（或后半部分的起始节点）。
  while(fast && fast.next){
    fast = fast.next.next
    
    let next = slow.next
    slow.next = prev
    prev = slow 
    slow = next // slow = slow.next
  }

  // 21321
  // slow在中间  
  if(fast){
    slow = slow.next  //奇数个节点
  }
  while(prev && slow){
    if(prev.val!==slow.val){
      return false
    }
    prev = prev.next
    slow = slow.next
  }
  return true
};
// @lc code=end

