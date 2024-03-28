/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {

  function dfs(root1,root2){
    // 如果没有root1则返回root2
    if(!root1){
      return root2
    }
    // 如果没有root2则返回root1
    if(!root2){
      return root1
    }
    // 如果root1和root2都存在，则值相加
    root1.val += root2.val
    // 遍历左子树
    root1.left =dfs(root1.left,root2.left)
    // 遍历右子树
    root1.right =dfs(root1.right,root2.right)
    return root1
  }
  return dfs(root1,root2)
};
// @lc code=end

