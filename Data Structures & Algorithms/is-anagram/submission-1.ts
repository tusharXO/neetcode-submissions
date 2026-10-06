class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false;
        }
        let sSet: Map<string, number> = new Map();
        let tSet: Map<string, number> = new Map();

        for(let i = 0; i < s.length;i++){
            if(sSet.has(s[i])){
                let count = sSet.get(s[i]) + 1;
                sSet.set(s[i], count);
                continue;
            }
            sSet.set(s[i], 1)
        }

        for(let i = 0; i < s.length;i++){
            if(tSet.has(t[i])){
                let count = tSet.get(t[i]) + 1;
                tSet.set(t[i], count);
                continue;
            }
            tSet.set(t[i], 1)
        }


        for(let i = 0; i < s.length;i++){
            if(sSet.get(s[i]) !== tSet.get(s[i])){
                return false;
            }
        }

        return true;
    }
}
