/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length
  if(len===0){
    return 0
  }
  if(len===1){
    return nums[0]
  }
  // 原[1,2,3,4]
  // 不考虑最后一个房屋 [1,2,3]
  // 不考虑第一个房屋 [2,3,4]
  // 计算两种情况的最大金额：
  // ret1 = robRange(nums, 0, len - 2)：不考虑最后一个房屋（从第一个房屋到倒数第二个房屋）。
  // ret2 = robRange(nums, 1, len - 1)：不考虑第一个房屋（从第二个房屋到最后一个房屋）。

  const ret1 = robRange(nums,0,len-2)
  const ret2 = robRange(nums,1,len-1)
  return Math.max(ret1,ret2)
};
function robRange(nums,start,end){
  // 如果 end 等于 start，表示只有一个房屋，直接返回该房屋的值。
  if(end===start){
    return nums[start]
  }
  const dp = new Array(nums.length).fill(0)
  dp[start] = nums[start]
  dp[start+1] = Math.max(nums[start],nums[start+1])
  for(let i=start+2;i<=end;i++){
    dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
  }
  return dp[end]
}
// @lc code=end

