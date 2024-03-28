/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
// -1
var isBalanced = function(root) {
  let flag = true;

  function travese(node){
    if(node===null){
      return 0
    }
    let  leftDepth = travese(node.left)
    let  rightDepth = travese(node.right)
    if(Math.abs(leftDepth-rightDepth)>1){
      flag = false;
    }else{
      flag =  1 + Math.max(leftDepth,rightDepth)
    }
  }

  travese(root)
  return flag;

};
// @lc code=end

