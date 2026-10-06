class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency = new Map<number, number>();

        for(const i of nums){
            frequency.set(i, (frequency.get(i) ?? 0) + 1)
        }

        const arr: number[][] = Array.from({length: nums.length + 1},() => [])

        for (const [num, count] of frequency) {
            arr[count].push(num);
        }

        const result: number[] = []

        for(let i = arr.length-1;i >= 0;i--){
            for(const j of arr[i]){
                result.push(j);
                if(result.length === k){
                    return result;
                }
            }
        }

        return result;
    }
}

// class MinHeap {
//     private heap: [number,number][] = []

//     push(item : [number,number]): void{
//         this.heap.push(item);
//         this.bubbleUp();
//     }

//     pop(): [number, number] | undefined {
//         const min = this.heap[0];

//         const last = this.heap.pop();

//         if (this.heap.length > 0) {
//             this.heap[0] = last;
//             this.bubbleDown();
//         }

//         return min;
//     }

//     peek(): [number, number] | undefined {
//         return this.heap[0];
//     }

//     size(): number {
//         return this.heap.length;
//     }

//     bubbleUp(): void {
//         let index = this.heap.length - 1;

//         while (index > 0) {
//             const parent = Math.floor((index - 1) / 2);

//             if (this.heap[parent][1] <= this.heap[index][1]) {
//                 break;
//             }

//             [this.heap[parent], this.heap[index]] =
//                 [this.heap[index], this.heap[parent]];

//             index = parent;
//         }
//     }

//     bubbleDown(): void {
//         let index = 0;

//         while (true) {
//             let smallest = index;

//             const left = 2 * index + 1;
//             const right = 2 * index + 2;

//             if (
//                 left < this.heap.length &&
//                 this.heap[left][1] < this.heap[smallest][1]
//             ) {
//                 smallest = left;
//             }

//             if (
//                 right < this.heap.length &&
//                 this.heap[right][1] < this.heap[smallest][1]
//             ) {
//                 smallest = right;
//             }

//             if (smallest === index) {
//                 break;
//             }

//             [this.heap[index], this.heap[smallest]] =
//                 [this.heap[smallest], this.heap[index]];

//             index = smallest;
//         }
//     }
// }