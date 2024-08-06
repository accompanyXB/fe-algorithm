/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    // 如果 left是3 并且 right是7
    // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
    // dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

    // 初始化 dummy 节点和找到 left 的前一个节点
    let dummy ={
        next:head
    }
    let tmp = dummy
    // 找到 left 的前一个节点 tmp 2
    for(let i=0;i<left-1;i++){
        tmp = tmp.next
    }

    let prev = tmp
    let cur = tmp.next

    for(let j = 0; j < right - left + 1; j++){
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next // cur = cur.next
    }
    // dummy -> 1 -> 2
    // 7 -> 6 -> 5 -> 4 -> 3

    // cur  -> 7 -> 6 -> 5 -> 4 -> 3
    // next -> 8
    // prev -> 7 -> 6 -> 5 -> 4 -> 3

    // dummy -> 1 -> 2 -> 7 -> 6 -> 5 -> 4 -> 3 -> 8 -> 9
    // 3 -> 8
    tmp.next.next = cur
    // 2 -> 7
    tmp.next = prev

    return dummy.next
};
// @lc code=end

