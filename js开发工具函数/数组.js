// 数组乱序
/**
 * @param {array} arr
 */
export function arrScrambling(arr) {
  let array = arr;
  let index = array.length;
  while (index) {
      index -= 1;
      let randomIndex = Math.floor(Math.random() * index);
      let middleware = array[index];
      array[index] = array[randomIndex];
      array[randomIndex] = middleware
  }
  return array
}

// 数组交集
/**
 * @param { array} arr1
 * @param { array } arr2
 */
export const similarity = (arr1, arr2) => arr1.filter(v => arr2.includes(v));

// 数组中某元素出现的次数
/**
 * @param { array } arr
 * @param {*} value
 */
export function countOccurrences(arr, value) {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
}

// 查询数组中是否存在某个元素并返回元素第一次出现的下标
/** 
 * @param {*} item 
 * @param { array } data
 */
export function inArray(item, data) {
  for (let i = 0; i < data.length; i++) {
      if (item === data[i]) {
          return i;
      }
  }
  return -1;
}
