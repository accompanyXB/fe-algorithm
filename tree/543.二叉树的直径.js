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
    let left = dfs(root.left)
    let right = dfs(root.right)
    len = Math.max(len,left+right)

    // 递归过程：
    // 求dpth(1) 必求dpth(2)、dpth(3)
    // 求dpth(2) 必求dpth(4)、dpth(5)
    // 递归公式：dpth(rt) = max(dpth(rt左子树)，dpth(rt右子树)) + 1
    return Math.max(left,right)+1
  }
  dfs(root)
  return len
};
// @lc code=end

