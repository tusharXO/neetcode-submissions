class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = new Map();

        for(const i of strs){
            const count = new Array(26).fill(0)
            for(const j of i){
                count[j.charCodeAt(0) - 97] += 1
            }
            const key = String.fromCharCode(...count)
            const list = res.get(key)
            if(list){
                list.push(i)
            }else{
                res.set(key, [i])
            }
        }

        return [...res.values()]
    }
}
