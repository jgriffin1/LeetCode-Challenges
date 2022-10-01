/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();
    let oldval = nums[0];
    for(let i = 1; i<nums.length; i++){
        if(nums[i]==oldval){
            return true;
        }else{
            oldval = nums[i];
        }
    }
    return false;
};