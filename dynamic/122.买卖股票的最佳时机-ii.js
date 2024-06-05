/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

 var maxProfit = function(prices) {
  // dp = []
  // dp[i] = dp[]递推
  
  // has 表示持有股票的最大利润（初始时是 -prices[0]，表示买入第一天的股票）。
  // notHas 表示不持有股票的最大利润（初始时是 0，表示不持有任何股票）。
  let len = prices.length
  let has = -prices[0]
  let notHas = 0
  // 持有  不持有后，手里的现金
  for(let i=1;i<len;i++){
   // 如果选择保持持有状态，has 维持不变。
   // 如果选择当前买入，notHas - prices[i] 表示在之前不持有股票的基础上买入当前的股票，利润减少 prices[i]。
    has = Math.max(has,notHas-prices[i])
   // 如果选择保持不持有状态，notHas 维持不变。
   // 如果选择当前卖出，has + prices[i] 表示在之前持有股票的基础上卖出当前的股票，利润增加 prices[i]。
    notHas = Math.max(notHas, has+prices[i])
  }
  // notHas 表示最后一天不持有股票的最大利润，因为我们假设最终一定会卖出手中的股票来获得最大利润。
  return notHas
};

var maxProfit1 = function(prices) {
  let ret = 0
  // [4,1,3,5,7]
  for(let i=1;i<prices.length;i++){
    if(prices[i]-prices[i-1]>0){
      ret += prices[i]-prices[i-1]
    }
    // resut += Math.max(prices[i]-prices[i-1],0)
  }

  return ret
};
// @lc code=end

