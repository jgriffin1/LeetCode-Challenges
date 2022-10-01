class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> results = new ArrayList<Integer>();
        if(nums.length==0){
            return results;
        }
        Arrays.sort(nums);
        //start at one and add until the first number
        for(int i=1;i<nums[0];i++){
            results.add(i);
        }
        for(int i =0;i<nums.length-1;i++){
            for(int j=nums[i]+1;j<nums[i+1];j++){
                results.add(j);
            }
        }
        //add from max value to the length
        for(int i = nums[nums.length-1]+1;i<=nums.length;i++){
            results.add(i);
        }
        return results;
    }
}