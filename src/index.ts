/**
 * 判断字符串是否存在连续字符，默认子序列长度为 6 
 * @param {string} str 字符串
 * @param {number} step  步长
 */
export default function (str:string, step:number = 6):boolean {
    if (typeof str!=="string") return false;
    if (typeof step!=="number" || isNaN(step)) return false;
    if (str.length < step) return false; // 小于步长不做判断

    let i:number = 0;
    for (; i < str.length; i = i + step) {
        let first = str.substr(i, i + step).split("");

        if (first.length < step) { // 小于步长不做判断
            return false;
        }

        let arr:number[] = first.map(m => {
            return +m.charCodeAt(0);
        });


        let res:boolean[] = [];
        // 顺序 123456 abcdef
        for (let j = 1; j < arr.length; j++) {
            if (arr[j - 1] + 1 === arr[j]) {
                res[j - 1] = true;
            } else {
                res[j - 1] = false;
            }
        }
        if (res.every(item => { return item === true })) {
            // 一组内全部匹配，返回true
            return true
        }

        res = []; // reset

        // 逆序 654321 fedbca
        for (let j = 1; j < arr.length; j++) {
            if (arr[j - 1] - 1 === arr[j]) {
                res[j - 1] = true;
            } else {
                res[j - 1] = false;
            }
        }
        if (res.every(item => { return item === true })) {
            // 一组内全部匹配，返回true
            return true
        }
    }
    return false;
};