/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  // let len = nums.length
  // let result = len+1
  // for (let i = 0; i < len; i++) {
  //   let sum = 0
  //   for (let j = i; j < len; j++) {
  //     sum+= nums[j]
  //     if(sum>=target){
  //       let subLen = j-i+1
  //       result = result<subLen ?result:subLen
  //       break
  //     }
  //   }
    
  // }
  // return result>len?0:result
  // slow fast一起，fast走的快
  // [2,3,1,2,4,3]
  //    |     | 
  
  // let len = nums.length
  // let slow = fast = 0
  // let sum = 0
  // let result = len+1
  // while(fast<len){
  //   // sum+=nums[fast++]
  //   sum+=nums[fast]
  //   fast++
  //   while(sum>=target){
  //     let subLen = fast-slow
  //     result = (result<subLen)?result:subLen
  //     // sum -=nums[slow++]
  //     sum -=nums[slow]
  //     slow++
  //   }
  // }
  // return result>len?0:result


// 滑动窗口思路：先移动右边界，让窗口中的值满足题目的解，然后移动左窗口，找到最优解
let left = 0, sum = 0;
let minLength = Number.MAX_VALUE;
for (let right = 0; right < nums.length; right++) {
  // 由于数组中的所有数字都是正整数，因此在子数组中添加新的数字能得到更大的子数组之和
  sum += nums[right];
  // sum>=target 已经是找到了可行解了
  while (left <= right && sum >= target) {
    //  移动左边界，在可行解里面寻找最优解
    minLength = Math.min(minLength, right - left + 1);
    sum -= nums[left++];
  }
}
  return minLength == Number.MAX_VALUE ? 0 : minLength;
};
// @lc code=end

