/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let dp = new Array(nums.length).fill(1)
  // dp[i] i之前的数组的连续递增子序列的长度是dp[i]
  for(let i=0;i<nums.length;i++){
    // 如果当前元素 nums[i] 大于前一个元素 nums[i - 1]，则当前元素可以延续前一个元素结尾的递增子序列
    if(nums[i]>nums[i-1]){
      dp[i] = dp[i-1]+1
    }
  }
  // dp 数组中保存了以每个元素结尾的最长连续递增子序列的长度
  return Math.max(...dp)
};
// @lc code=end

