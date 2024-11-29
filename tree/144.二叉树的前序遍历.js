/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// var preorderTraversal1 = function(root) {
//   let arr = []
//   // travese， walk
//   function dfs(root){
//     if(root==null){
//       return
//     }
//     arr.push(root.val)
//     dfs(root.left)
//     dfs(root.right)
//   }
//   dfs(root)
//   return arr
// }

栈（后进先出）：每次处理节点，先压右，再压左
       1
     /   \
    2     3
   / \
  4   5
栈变化：
[1] → [3, 2] → [3, 5, 4] → [3, 5] → [3] → []
结果：[1, 2, 4, 5, 3]
var preorderTraversal = function(root){
  let res = []
  if(root===null){
    return res
  }
  let stack = [root]
  while(stack.length){
    let cur = stack.pop()
    res.push(cur.val)
    cur.right&& stack.push(cur.right)
    cur.left&& stack.push(cur.left)
  }
  return res
}
// @lc code=end

