/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
记住3步框架：

终止条件（null 直接返回 false）
叶子节点检查路径和
递归左右子树，计算剩余 targetSum
🌟 超简化记忆口诀
"先终止，再判断叶子，最后递归左右"

var hasPathSum = function(root, targetSum) {

  if(root==null){
    return false
  }
  if(!root.left && !root.right){
    return root.val ===targetSum
  }
  let offset = targetSum - root.val
  // 1. 检查左子树是否存在一条路径，其和等于剩余目标 offset。
  // 2. 检查右子树是否存在一条路径，其和等于剩余目标 offset
  return hasPathSum(root.left,offset) || hasPathSum(root.right,offset)
};
// @lc code=end

