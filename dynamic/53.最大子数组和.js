/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */


// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 这两个函数都是用来解决最大子数组和问题。第一个函数使用动态规划的思路，使用 dp 数组记录以每个元素结尾的最大子数组和，然后在遍历过程中更新最大值。
// 第二个函数则采用贪心算法，通过一个变量 count 累加当前子数组和，并在累加过程中实时更新最大值，同时在当前子数组和小于 0 时重置为 0，开始新的子数组。两种方法都能有效地找到最大子数组和。

var maxSubArray = function(nums) {
  // 创建一个与 nums 长度相同的数组 dp 并初始化为 0
  let dp = new Array(nums.length).fill(0)
  // dp[0] 初始化为 nums[0]
  dp[0] = nums[0]
  // 初始化结果 ret 为 nums[0]
  let ret = nums[0]
  
  // 从第二个元素开始遍历数组
  for(let i = 1; i < nums.length; i++) {
    // dp[i] 表示以第 i 个元素结尾的最大子数组和
    // 如果前一个子数组和 dp[i-1] 加上当前元素的值大于当前元素值，继续累加
    // 否则，从当前元素重新开始新的子数组
    dp[i] = Math.max(dp[i-1] + nums[i], nums[i])
    // 更新结果 ret 为当前最大子数组和
    ret = Math.max(dp[i], ret)
  }
  // 返回最大子数组和
  return ret
  // dp[i】表示以第 i 个元素结尾的子数组的最大和是 dp[i]
}

var maxSubArray1 = function(nums) {
  // 初始化结果 ret 为负无穷大，以确保任何子数组和都比它大
  let ret = -Infinity
  // 初始化当前子数组和 count 为 0
  let count = 0
  
  // 遍历数组
  for(let i = 0; i < nums.length; i++) {
    // 累加当前元素到当前子数组和
    count += nums[i]
    // 如果当前子数组和大于结果 ret，更新 ret
    if(count > ret) {
      ret = count
    }
    // 如果当前子数组和小于 0，重置为 0，开始新的子数组
    if(count < 0) {
      count = 0
    }
  }
  // 返回最大子数组和
  return ret
}
// @lc code=end

