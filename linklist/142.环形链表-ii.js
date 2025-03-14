/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
  //     a     --b--*--
  // ---------|        |
  //           ---c----
  // // 2(a+b) =  a+b+圈*n
  // fst走过的路: a+b+n(b+c）
  // slow   2(a+b)
  // a+b = n(b+c)
  // 想找a
  // a = n(b+c)-b
  // a = (n-1)(b+c)+c
 // 从头节点 head 到环入口的距离 a，等于相遇点到环入口的距离 c 加上若干圈 (n-1)(b + c)
// 一句话总结：用快慢指针检测环，找到相遇点后，一个从头开始，一个从相遇点开始走，最终相遇即为环的入口。

  let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            while (slow !== head) {
                slow = slow.next;
                head = head.next;
            }
            return slow;
        }
    }
    return null;
};
// @lc code=end

