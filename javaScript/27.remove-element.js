/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    if(!nums) return 0;
    
    for(let i = 0; i < nums.length ; i++) {
        if(val === nums[i]){
            nums.splice(i, 1);
            i--
        }
    }
    return nums.length
};