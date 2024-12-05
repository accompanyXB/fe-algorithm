/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // 如果当前节点为空，返回 null
  // 这是递归的终止条件，表示已经遍历到了叶子节点的子节点
  if(root==null){
    return null
  }
  // 如果当前节点是 p 或 q，返回当前节点
  // 这是我们找到目标节点的条件，当我们找到 p 或 q 时，直接返回当前节点
  if(root==p || root==q){
    return root
  }
  // 递归查找左子树和右子树
  // 如果 p 和 q 不在当前节点的子树中，递归会返回 null
  let left = lowestCommonAncestor(root.left,p,q)
  let right = lowestCommonAncestor(root.right,p,q)
  // 如果左子树和右子树都找到了 p 或 q
  // 说明当前节点是 p 和 q 的最近公共祖先
  if(left && right){
    return root
  }
  // 如果左子树找到了 p 或 q，就返回左子树的结果
  // 否则返回右子树的结果
  // 如果左子树为空，表示右子树找到了目标节点，返回右子树
  return left?left:right
};
// @lc code=end

