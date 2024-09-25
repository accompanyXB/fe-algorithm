/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 双指针
  双指针法（快慢指针法）： 通过一个快指针和慢指针在一个for循环下完成两个for循环的工作。

  // 定义快慢指针：
  // 快指针：寻找新数组的元素 ，新数组就是不含有目标元素的数组
  // 慢指针：指向更新 新数组下标的位置
  let slow = 0
  let fast = 0
  while(fast<nums.length){
    if(nums[fast]){
      [nums[slow],nums[fast]] = [nums[fast],nums[slow]]
      // let tmp = nums[slow]
      // nums[slow] = nums[fast]
      // nums[fast] = tmp
      slow++
    }
    fast++
  }

};


// 非零元素全部按顺序前置，剩下空间存放0
var moveZeroes = function(nums)  {
    let count = 0 // 用于计数非零元素的数量
    for(let i=0; i<nums.length; i++) {
        if (nums[i] != 0) {
            nums[count] = nums[i] // 将非零元素放在前面
            count++ // 增加非零元素的计数
        }
    }
    // 由于已经按照正确的顺序填充了非零元素，现在只需要填充零即可
    for(let i=count; i<nums.length; i++) {
        nums[i] = 0
    }
}
// @lc code=end

