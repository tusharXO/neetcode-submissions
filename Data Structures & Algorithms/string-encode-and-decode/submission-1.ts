class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedString = "";

        for(const i of strs){
            encodedString += i.length + "#" + i
        }

        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let decodedArray: string[] = new Array();
        let i = 0;
        console.log(str)
        while(i < str.length){
            let j = i
            while(str[j] !== "#"){
                j += 1;
            }
            const length = Number(str.slice(i,j))
            decodedArray.push(str.slice(j+1, j+1+length))
            i = j + 1 + length;
        }
        return decodedArray;
    }
}
