class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const output: number[] = [];
        let product: number = 1;
        let zeroCount: number = 0;

        for(const i of nums){
            if(i === 0){
                zeroCount++;
            }else{
                product *= i;
            }
        }

        for(let i = 0;i < nums.length;i++){
            if(zeroCount > 1){
                output[i] = 0;
            }else if(zeroCount === 1){
                output[i] = nums[i] === 0 ? product : 0;
            }else{
                output[i] = product / nums[i]
            }
        }

        return output;
    }
}
