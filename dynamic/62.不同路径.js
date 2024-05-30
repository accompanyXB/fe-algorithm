/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
初始化
[['1', '1', '1'],
 ['1', '', ''],
 ['1', '', '']]
var uniquePaths = function(m, n) {
  // const dp = new Array(n).fill(m).map(()=>{
  //   return new Array(n).fill(1)
  // })
  const dp = new Array(m).fill('').map(i=>new Array(n).fill(''))
  for(let i=0;i<m;i++){
    dp[i][0] = 1
  }
  for(let i=0;i<n;i++){
    dp[0][i] = 1
  }
  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++){
      // 到达 (i, j) 的路径可以从 (i-1, j) 向下移动一步到达，或者从 (i, j-1) 向右移动一步到达。因此，路径数 dp[i][j] 就是这两种路径数的总和
      dp[i][j] = dp[i-1][j]+dp[i][j-1]
    }
  }
  return dp[m-1][n-1]

};
// @lc code=end

