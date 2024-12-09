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

var levelOrder = function(root) {
  let ret = [] //结果
  if(root===null){
    // 表示层序遍历的结果没有任何节点
    return []
  }
  let queue = [root] //遍历中用的队列
  while(queue.length){
    let len = queue.length //一层的数据量
    let curLevel = []
    while(len--){
      let node = queue.shift()  
      curLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    ret.push(curLevel)
  }
  return ret
};
// @lc code=end

