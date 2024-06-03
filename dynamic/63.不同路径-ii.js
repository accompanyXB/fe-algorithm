/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length

//   dp = [  
//   ['', '', ''],
//   ['', '', ''],
//   ['', '', '']
// ]
  
  const dp = new Array(m).fill('').map(() => new Array(n).fill(''));
  // 初始化第一列
  for(let i=0;i<m&&obstacleGrid[i][0]===0;i++){
    dp[i][0] = 1
  }
  for(let i=0;i<n&&obstacleGrid[0][i]===0;i++){
    dp[0][i] = 1
  }
//   dp = [  
//   [1, 1, 1],
//   [1, '', ''],
//   [1, '', '']
// ]

//   dp = [  
//   [1, 1, 1],
//   [1, 0, ''],
//   [1, '', '']
// ]

  // dp[1][1] = 0
  // dp[1][2] = dp[0][2] + dp[1][1] = 1 + 0 = 1
  // dp[2][1] = dp[1][1] + dp[2][0] = 0 + 1 = 1
  // dp[2][2] = dp[1][2] + dp[2][1] = 1 + 1 = 2
  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++){
      dp[i][j] = obstacleGrid[i][j]===1
                ? 0
                : dp[i-1][j]+dp[i][j-1]
    }
  }
  return dp[m-1][n-1]

};
// @lc code=end

