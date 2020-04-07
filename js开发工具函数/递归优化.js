// 递归优化（尾递归）
/**
 * @param { function } f
 */
export function tco(f) {
  let value;
  let active = false;
  let accumulated = [];

  return function accumulator() {
      accumulated.push(arguments);
      if (!active) {
          active = true;
          while (accumulated.length) {
              value = f.apply(this, accumulated.shift());
          }
          active = false;
          return value;
      }
  };
}
