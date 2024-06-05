/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

var maxProfit = function(prices, fee) {
  // 获取价格数组的长度
  let len = prices.length
  // 初始状态下持有股票的收益为负，因为买入股票花费了资金并支付了手续费
  let has = -prices[0] - fee
  // 初始状态下不持有股票的收益为0
  let notHas = 0

  // 从第二天开始遍历价格数组
  for(let i = 1; i < len; i++) {
    // 更新持有股票的收益，取之前的持有收益和当前不持有收益减去买入今天股票并支付手续费后的最大值
    has = Math.max(has, notHas - prices[i] - fee)
    // 更新不持有股票的收益，取之前的不持有收益和当前持有收益卖出今天股票后的最大值
    notHas = Math.max(notHas, has + prices[i])
  }
  // 返回最终不持有股票的最大收益
  return notHas
}

var maxProfit1 = function(prices, fee) {
  // 初始总利润为0
  let ret = 0
  // 记录当前的最低价格，初始为第一天的价格
  let minPrice = prices[0]

  // 遍历每一天的价格
  for(let i = 0; i < prices.length; i++) {
    // 如果当前价格低于记录的最低价格，更新最低价格
    if(prices[i] < minPrice) {
      minPrice = prices[i]
    }
    // 如果当前价格在最低价格与最低价格加上手续费之间，跳过，继续下一次循环
    if(prices[i] >= minPrice && prices[i] <= minPrice + fee) {
      continue
    }
    // 如果当前价格高于最低价格加上手续费，计算利润
    if(prices[i] > minPrice + fee) {
      // 将当前的利润加入总利润
      ret += prices[i] - minPrice - fee
      // 更新最低价格为当前价格减去手续费（考虑到卖出后再买入的情况）
      minPrice = prices[i] - fee
    }
  }

  // 返回总利润
  return ret
}
// @lc code=end

