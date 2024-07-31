/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 使用虚拟节点（dummy node）以简化边界情况的处理
  let dummy = {
    next: head
  };
  
  // 初始化快慢指针
  let slow = dummy;
  let fast = dummy;
  
  // 先让快指针移动 n 步
  while (n--) {
    fast = fast.next;
  }
  
  // 然后快慢指针一起移动，直到快指针到达链表的末尾
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  
  // 此时慢指针的下一个节点就是要删除的节点，移除它
  slow.next = slow.next.next;
  
  // 返回新的链表头节点
  return dummy.next;
};
// @lc code=end

