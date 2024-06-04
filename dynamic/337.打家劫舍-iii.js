/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
 */

       3
      / \
     2   3
      \   \
       3   1

// 调用顺序
// 调用 dfs(3) 根节点
// 调用 dfs(2) 左子树
// 调用 dfs(3) 左子树的右子节点
// 调用 dfs(3) 右子树
// 调用 dfs(1) 右子树的右子节点
// 自底向上计算

// 从叶子节点 dfs(1) 和 dfs(3) 开始计算
// 计算 dfs(2)
// 计算 dfs(3) 右子树
// 最后计算根节点 dfs(3)

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
var rob = function(root) {
  
  const ret = dfs(root)
  return Math.max(...ret)
  function dfs(node){
    if(node===null){
      return [0,0]
    }
    // left[0] 表示在不偷取当前节点的情况下，左子树能够获取的最大收益。
    // right[0] 表示在不偷取当前节点的情况下，右子树能够获取的最大收益。
    const left = dfs(node.left)
    const right = dfs(node.right)
    const doSelf = node.val + left[0]+right[0]
    const doNotself = Math.max(...left)+ Math.max(...right)
    // [不偷当前节点，偷当前节点]
    return [doNotself,doSelf]
  }
};
// @lc code=end

