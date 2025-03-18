/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
// "判断左叶子 + 递归左右"
var sumOfLeftLeaves = function(root) {
  let leftSum = 0; // 存储左叶子节点的总和

  function traverse(node) {
    if (node === null) {
      return; // 1️⃣ 递归终止条件
    }

    let left = node.left;
    // 2️⃣ 判断 node.left 是否是左叶子节点
    if (left && !left.left && !left.right) {
      leftSum += left.val; // 是左叶子节点，累加到 leftSum
    }

    // 3️⃣ 继续递归左右子树
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return leftSum;
};
// @lc code=end

