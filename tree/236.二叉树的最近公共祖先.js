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

      3
     / \
    5   1
   / \ / \
  6  2 0  8
    / \
   7   4
递归到根节点 3：
root == 3，不是 p 或 q，继续递归左右子树。
递归到左子树根节点 5：
root == 5，是 p，所以直接返回节点 5。
递归到右子树根节点 1：
root == 1，是 q，所以直接返回节点 1。
回到根节点 3：
左子树返回节点 5，右子树返回节点 1。
因为 left && right 都有值，所以最近公共祖先是根节点 3。

解释
当递归到节点 5 和节点 1 时，条件 root == p || root == q 为 true，我们直接返回当前节点。这是因为 p 或 q 必然是自己的祖先，包括自己。
一旦我们找到了目标节点（p 或 q），递归就会回溯到父节点，最终确定最近的公共祖先。

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

