/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 方法一：
   let ans = 0;
    let minPrice = prices[0];
    for (const p of prices) {
        ans = Math.max(ans, p - minPrice);
        minPrice = Math.min(minPrice, p);
    }
    return ans;

   // 方法二：
  // 初始值
  // 循环
  //   递推 dp[i]
  // dp 数组
  // dp[i] = [持有股票所得的最多的现金， 不持有股票最多的现金]
  // const dp = new Array(prices.length).fill([0,0])
  // dp[0] = [-prices[0],0]
  // for(let i=1;i<prices.length;i++){
  //   dp[i] = [
  //     Math.max(dp[i-1][0],-prices[i]),
  //     Math.max(dp[i-1][1],prices[i]+dp[i-1][0]),
  //   ]
  // }
  // return dp[prices.length-1][1]

};
// @lc code=end

