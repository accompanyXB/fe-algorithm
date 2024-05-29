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
// 规划这个最小值
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    function dfs(i) {
        if (i <= 1) { // 递归边界
            return 0;
        }
        return Math.min(dfs(i - 1) + cost[i - 1], dfs(i - 2) + cost[i - 2]);
    }
    return dfs(n);
};


