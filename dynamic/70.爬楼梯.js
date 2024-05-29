/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // n层台阶 有多少种方法
  // n-1层 +1
  // n-2层 +2
  let dp = [1,2]
  for(let i=2;i<n;i++){
    // 当我们考虑到达第 i 层时，我们只需要考虑最后一步是从第 i-1 层跨一步到达或者从第 i-2 层跨两步到达的情况。
    // 这两种情况是不重叠且包含所有可能性的，因此它们的总数即为到达第 i 层的方法数。
    dp[i] = dp[i-1]+dp[i-2]
  }
  // dp[0] 表示到达第 1 层台阶的方法数。
  //dp[1] 表示到达第 2 层台阶的方法数。
  // 依此类推，dp[i] 表示到达第 i+1 层台阶的方法数。
  return dp[n-1]
};
// @lc code=end

