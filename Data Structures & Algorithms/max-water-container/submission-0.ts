class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let maxProduct = 0;

        while(left < right){
            const width = right - left;
            const product = width * Math.min(heights[left],heights[right])
            if(product > maxProduct){
                maxProduct = product;
            }
            if(heights[left] < heights[right]){
                left++;
            }else{
                right--;
            }
        }

        return maxProduct;
    }
}
