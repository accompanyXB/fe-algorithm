/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 双指针
// 两个指针分别扫描长串和短串，目标是为短串中的字符在长串中找到匹配
// 如果指向的字符相同，两个指针都移动考察下一个字符
// 如果不相同，短串的指针不动，长串的指针移动考察下一个字符
// 如果短串走完了，说明短串的字符在长串中都找到匹配
// 如果短串没有走完，长串走完了，说明考察了整个长串也没能找齐短串的所有字符

var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++;
    j++;
  }
  return i === s.length;
};



var isSubsequence1 = function(s, t) {
  let m = s.length
  let n = t.length
  let dp = new Array(m+1).fill(0).map(i=>{
    return new Array(n+1).fill(0)
  })
  for(let i=1;i<=m;i++){
    for(let j=1;j<=n;j++){
      
      if(s[i-1]===t[j-1]){
        dp[i][j] = dp[i-1][j-1]+1
      }else{
        dp[i][j] = dp[i][j-1]
      }
    }
  }
  return dp[m][n] == m 
  // dp 
  //   下标i结尾的字符串s，和下边j结尾的字符串t，相同子序列的长度
  // //     dp[i][j]

  //   if(s[i-1]===t[j-1]){

  //   }else{
  //     // 删除元素
  //   }
};
// @lc code=end

