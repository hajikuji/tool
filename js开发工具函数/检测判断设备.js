// Windows根据详细版本号判断当前系统名称
/**
 * @param { string } osVersion 
 */
export function OutOsName(osVersion) {
  if(!osVersion){
      return
  }
  let str = osVersion.substr(0, 3);
  if (str === "5.0") {
      return "Win 2000"
  } else if (str === "5.1") {
      return "Win XP"
  } else if (str === "5.2") {
      return "Win XP64"
  } else if (str === "6.0") {
      return "Win Vista"
  } else if (str === "6.1") {
      return "Win 7"
  } else if (str === "6.2") {
      return "Win 8"
  } else if (str === "6.3") {
      return "Win 8.1"
  } else if (str === "10.") {
      return "Win 10"
  } else {
      return "Win"
  }
}

// 判断手机是Andoird还是IOS
/**
 *  0: ios
 *  1: android
 *  2: 其它
 */
export function getOSType() {
  let u = navigator.userAgent, app = navigator.appVersion;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS) {
      return 0;
  }
  if (isAndroid) {
      return 1;
  }
  return 2;
}

// 判断数据类型
/**
 * @param {*} target 
 */
export function type(target) {
  let ret = typeof(target);
  let template = {
      "[object Array]": "array",
      "[object Object]":"object",
      "[object Number]":"number - object",
      "[object Boolean]":"boolean - object",
      "[object String]":'string-object'
  };

  if(target === null) {
      return 'null';
  }else if(ret == "object"){
      let str = Object.prototype.toString.call(target);
      return template[str];
  }else{
      return ret;
  }
}

// 检测移动/PC设备
export const detectDeviceType = () => { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'; };

