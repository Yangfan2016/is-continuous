function calcAcsII(str) {
    return str.charCodeAt(0);
}
/**
 * 判断字符串是否存在连续字符，默认子序列长度为 6 
 * @param {string} str 字符串
 * @param {number} step  步长
 */
export default function(s, step=6) {
    // 只有一位字符串不判断
    if (s.length <= 1 || step <= 1)
        return false;
    var index = 0; // 计数
    var flag = calcAcsII(s[0]); // 游标
    var isAsc = true; // 默认升序
    var once = false; // 第一次赋值

    for (let i = 1; i < s.length; i++) {
        let item = calcAcsII(s[i]);
        if (!once) {
            isAsc = item - flag > 0;
            once = true;
        }
        if (item - flag === 1 * (isAsc ? 1 : -1)) {
            index++;
            flag = item;
        }
        if (index === step - 1) {
            return true;
        }
    }
    return false;
}
