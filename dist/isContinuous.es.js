/**
 * 判断字符串是否存在连续字符，默认子序列长度为 6 
 * @param {string} str 字符串
 * @param {number} step  步长
 */function index(a,b=6){if("string"!=typeof a)return!1;if(6>a.length)return!1;// 小于步长不做判断
for(let c=0;c<a.length;c+=b){let d=a.substr(c,c+b).split("");if(6>d.length)// 小于步长不做判断
return!1;let e=d.map(a=>+a.charCodeAt()),f=[];// 顺序 123456 abcdef
for(let a=1;a<e.length;a++)f[a-1]=!(e[a-1]+1!==e[a]);if(f.every(a=>!0===a))// 一组内全部匹配，返回true
return!0;f=[];// reset
// 逆序 654321 fedbca
for(let a=1;a<e.length;a++)f[a-1]=!(e[a-1]-1!==e[a]);if(f.every(a=>!0===a))// 一组内全部匹配，返回true
return!0}return!1}export default index;
