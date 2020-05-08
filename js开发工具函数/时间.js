/**1.时间格式化
 * 
 * yyyy年MM月dd -> 2019年09月7日
 * hh分mm秒 -> 16分53秒
 * 
 * */ 

function formatDate (oldDate, fmt) { 
 let date = new Date() 
 if (typeof oldDate === 'string' || typeof oldDate === 'number') { 
 date = new Date(+oldDate) 
 } else { 
 date = oldDate 
 } 
if (/(y+)/.test(fmt)) { 
 fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) } 
 let o = { 
 'M+': date.getMonth() + 1, 
 'd+': date.getDate(), 
 'h+': date.getHours(), 
 'm+': date.getMinutes(), 
 's+': date.getSeconds() } 
 function padLeftZero (str) { 
 return ('00' + str).substr(str.length) 
 } 
 for (let k in o) { 
 if (new RegExp(`(${k})`).test(fmt)) { 
 let str = o[k] + '' 
 fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str)) 
 } 
 } 
 return fmt
}

/**2.以“天”为单位获取响应的时间戳
 * 
 * 12 个小时之前的时间 -> setDate(-.5)
 * 24 个小时之前的时间 -> setDate(-1)
 * 三天后的时间 -> setDate(3)
 * 
 * */
function setDate(num) { return Date.now() + num * 24 * 60 * 60 * 1000}
