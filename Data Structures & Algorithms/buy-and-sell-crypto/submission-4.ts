class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let minPrice = prices[0]

        for(let i = 0;i < prices.length;i++){
            if(minPrice > prices[i]){
                minPrice = prices[i]
            }else if(prices[i] - minPrice > maxProfit){
                maxProfit = prices[i] - minPrice;
            }
        }

        return maxProfit;
    }
}
