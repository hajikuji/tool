// 数组降维

// 二维数组
let arr = [[1], [2], [3]]
arr = Array.prototype.concat.apply([], arr); // [1, 2, 3]复制代码

// 多维数组降维 常用于手机端
let arr = [1, 2, [3], [[4]]]
arr = arr.flat(3) // [1,2,3,4]复制代码


// 获取数组极值

function smallest(array) {
  return Math.min.apply(Math, array);
}
function largest(array) {
  return Math.max.apply(Math, array);
}
smallest([0, 1, 2.2, 3.3]); // 0
largest([0, 1, 2.2, 3.3]); // 3.3

// es6

let list = [1, 2, 3, 4, 5]
Math.max(...list) // 5
Math.min(...list) // 1