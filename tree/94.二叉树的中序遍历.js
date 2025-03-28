/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
中序遍历（左→根→右）
    1
   / \
  2   3
 / \
4   5
遍历路径：4 → 2 → 5 → 1 → 3
var inorderTraversal = function(root) {

  let arr = []
  function dfs(root){
    if(root==null){
      return
    }
    dfs(root.left)
    arr.push(root.val)
    dfs(root.right)
  }
  dfs(root)
  return arr
};
// @lc code=end

