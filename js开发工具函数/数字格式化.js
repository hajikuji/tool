// 数字超过规定大小加上加号“+”，如数字超过99显示99+
/**
 * @param { number } val 输入的数字
 * @param { number } maxNum 数字规定界限
 */
export const outOfNum = (val, maxNum) =>{
  val = val ? val-0 :0;
  if (val > maxNum ) {
      return `${maxNum}+`
  }else{
      return val;
  }
};
