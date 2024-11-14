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

