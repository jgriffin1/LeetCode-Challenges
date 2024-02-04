/**
Two sums
https://leetcode.com/problems/two-sum/
*/
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for(int i = 0; i < nums.length; i++) {
            for( int x = 0; x<nums.length; x++) {
                if ( i == x) continue;

                if( (nums[i]+nums[x]) == target) {
                    return new int[] {i, x}; //success
                }
            }
        }
        return new int[]{0, 0}; //fail... apparently we were given a bad nums or bad target
    }
}