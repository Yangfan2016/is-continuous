/**
 * 计算字符的ASCII码
 * @param {string} str 
 */
function calcASCII(str: string): number {
    return str.charCodeAt(0);
}
/**
 * 判断字符串是否存在连续字符，默认连续子序列长度为 6 
 * @param {string} str 字符串
 * @param {number} step  步长
 */
export default function (str: string, step: number = 6): boolean {
    // 边界
    if (typeof str !== "string" || str.length <= 1 || step <= 1 || isNaN(step)) return false;
    var index = 0; // 计数
    var flag = calcASCII(str[0]); // 游标
    var isAsc = true; // 默认升序
    var oldIsAsc = isAsc; // 存储历史记录

    for (let i = 1; i < str.length; i++) {
        let item = calcASCII(str[i]);
        // 计算符号，确定升序还是降序
        isAsc = item - flag > 0;
        // 两数相差为1，进行计数，否则计数复位为0
        if (item - flag === 1 * (isAsc ? 1 : -1)) {
            // 如果连续升序，进行计数累加，否则计数置位1
            if (oldIsAsc === isAsc) {
                index++;
            } else {
                index = 1;
            }
        } else {
            index = 0;
        }
        // 游标前移
        flag = item;
        // 更新历史记录
        oldIsAsc = isAsc;
        // 如果计数等于步长-1 ，则视为达到连续字符的条件
        if (index === step - 1) {
            return true;
        }
    }
    return false;
}

