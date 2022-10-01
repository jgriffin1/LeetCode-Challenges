class Solution {
    public boolean validMountainArray(int[] arr) {
        int swapdir = 0;
        if(arr.length<3 || arr[0]>arr[1]) {
            return false;
        }
        for (int i=0;i<arr.length-1;i++){
            if(arr[i]==arr[i+1]) {
                return false;
            }
            if(swapdir % 2 == 0){

                if(arr[i]-arr[i+1] >0){//stops increasing
                    swapdir++;
                }
            }else{
                if(arr[i]-arr[i+1] <0){//stops decreasing
                    swapdir++;
                }
            }
            if(swapdir>=2){
                return false;
            }

        }
        if(swapdir==1)
        return true;
        else return false;
    }
}