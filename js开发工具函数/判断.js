// 判断小数是否相等

function epsEqu(x,y) { 
  return Math.abs(x - y) < Math.pow(2, -53);
 }
 // 举例
 0.1 + 0.2 === 0.3 // false
 epsEqu(0.1 + 0.2, 0.3) // true
 