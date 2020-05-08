// 获取URL的参数

// 简单实现
var urlParams = new URLSearchParams('?post=1234&action=edit'); // 不支持
console.log(urlParams.get('action')); // "edit"

// 复杂实现
/**getUrlParams('a') -> 3
 * getUrlParams('b') -> 5
 * getUrlParams('c') -> 8888
 */
function getUrlParams(param) {
  // 有赖于浏览器环境， window.location.search 是浏览器函数
  // 意思是:设置或返回从问号 (?) 开始的 URL（查询部分）。 
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == param) { return pair[1]; }
  }
  return (false);
}
