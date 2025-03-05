/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// [3]  1
// [9,20]  2

队列（先进先出）：从队头取节点，按顺序将左右节点加入队尾
       1
     /   \
    2     3
   / \
  4   5
队列变化：

[1] → [2, 3] → [3, 4, 5] → [4, 5] → [5] → []
结果：[1, 2, 3, 4, 5]

用口诀记住逻辑：
"逐层扫描，左进右出"（层序遍历特点）
"队列先进先出（FIFO）"（保证层次顺序）
"一层一层处理，每层遍历一次"

var levelOrder = function(root) {
  let ret = [] // 存放结果
  if(root === null) return [] // 如果树为空，直接返回空数组

  let queue = [root] // 用队列存放待遍历的节点
  while(queue.length) { // 当队列不为空时，继续遍历
    let len = queue.length // 当前层的节点数
    let curLevel = [] // 存放当前层的节点值
    while(len--) { // 遍历当前层的所有节点
      let node = queue.shift() // 取出队列头部节点
      curLevel.push(node.val) // 记录该节点值
      if (node.left) queue.push(node.left) // 左子节点入队
      if (node.right) queue.push(node.right) // 右子节点入队
    }
    ret.push(curLevel) // 存储当前层遍历结果
  }
  return ret
};
// @lc code=end

