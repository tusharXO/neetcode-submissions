class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedString = [];

        for(const i of strs){
            encodedString.push(`${i.length}#${i}`)
        }

        return encodedString.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let decodedArray = [];
        let i = 0;

        while(i < str.length){
            const j = str.indexOf("#", i)
            const length = parseInt(str.substring(i,j),10)
            decodedArray.push(str.substring(j+1, j+1+length))
            i = j + 1 + length;
        }
        return decodedArray;
    }
}
