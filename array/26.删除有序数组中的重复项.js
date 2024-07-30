/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // [1,1,2,2,3,3,3]
  // [1,2,3,2,3,3,4,]
  // [1,2,3,4,3,4,4]
  // slow fast
  // []
  // if(nums.length===0){
  //   return 0
  // }
  // let slow = 0
  // let fast = 0
  // while(fast<nums.length){
  //   if(nums[fast]!==nums[slow]){
  //     slow++
  //     nums[slow] = nums[fast]
  //   }
  //   fast++
  // }
  // return slow+1

  // 初始化 k=1，表示保留的元素要填入的下标。
  // 从 i=1 开始遍历 nums。
  // 如果 nums[i]=nums[i−1]，那么 nums[i] 是重复项，不保留。
  // 如果 nums[i] != nums[i−1]，那么 nums[i] 不是重复项，保留，填入 nums[k] 中，然后把 k 加一。
  // 遍历结束后，k 就是 nums 中的唯一元素的数量，返回 k
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) { // nums[i] 不是重复项
            nums[k] = nums[i]; // 保留 nums[i]
            k++
        }
    }
    return k;
};
// @lc code=end

