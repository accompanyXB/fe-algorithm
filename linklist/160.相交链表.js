/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // if(headA===null || headB===null){
  //   return null
  // }

  // 链表 A：1 -> 2 -> 3 -> 4 -> 5
  // 链表 B：6 -> 7 -> 3 -> 4 -> 5
  
  // 初始时，curA 指向 1，curB 指向 6。
  // curA 和 curB 都逐步向前移动，直到分别到达链表的末尾。
  // curA 到达 5 后移动到 null，然后切换到 6。
  // curB 到达 5 后移动到 null，然后切换到 1。
  // 第二次遍历时，curA 和 curB 会在节点 3 相遇。

  let curA = headA
  let curB = headB
  while(curA!==curB){
    curA = curA===null ? headB:curA.next
    curB = curB===null ? headA:curB.next
  }
  return curA
  
    // while(headA)
    // while(headB)

    // 1=>2=>3=>4
    // 5=>3=>4

    // 1=>2=>3=>4=>5=>3=>4 
    // 5=>3=>4=>1=>2=>3=>4
    
};
// @lc code=end

