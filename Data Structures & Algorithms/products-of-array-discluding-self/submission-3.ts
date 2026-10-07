class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const output: number[] = [];
        let postfix: number = 1;
        let prefix: number = 1;
        for(let i = 0;i < nums.length;i++){
            output.push(prefix)
            prefix *= nums[i]
        }

        for(let i = nums.length - 1;i >= 0;i--){
            output[i] *= postfix;
            postfix *= nums[i]
        }

        return output;
    }
}
