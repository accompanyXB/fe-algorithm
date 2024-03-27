/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */

      1
     / \
    2   3
   / \
  4   5
     / \
    6   7

var diameterOfBinaryTree = function(root) {
  let len=0
  function dfs(root){
    if(root===null){
      return 0
    }
    // if(root===null){
    //   return null
    // }
    let left = dfs(root.left) // 递归计算左子树的深度
    let right = dfs(root.right) // 递归计算右子树的深度
    len = Math.max(len,left+right) // 更新当前路径上的直径长度，取左右子树深度之和的最大值

    // 比如节点2 左子树 的深度是 2 和 右子树的深度是 3 取最大值
    return Math.max(left,right)+1 // 返回以当前节点为根的子树的深度，加1是因为当前节点也要算进去
  }
  dfs(root)
  return len
};
// @lc code=end

