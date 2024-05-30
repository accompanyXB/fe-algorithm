/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */
解答:https://leetcode.cn/problems/min-cost-climbing-stairs/solutions/2569116/jiao-ni-yi-bu-bu-si-kao-dong-tai-gui-hua-j99e/
// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    // 初始化 dp 数组，其中 dp[0] 和 dp[1] 表示到达第 0 层和第 1 层的最小花费 免费
    let dp = [0, 0];

    // 填充 dp 数组
    for (let i = 2; i <= n; i++) {
        // 计算从第 i-1 层到第 i 层的最小花费，加上到达第 i-1 层的花费：dfs(i - 1) + cost[i - 1]。
        // 计算从第 i-2 层到第 i 层的最小花费，加上到达第 i-2 层的花费：dfs(i - 2) + cost[i - 2]
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    // 返回到达第 n 层的最小花费
    return dp[n];
};
