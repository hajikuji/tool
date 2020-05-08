// 手机端判断浏览器类型
// 目前主要支持 安卓 & 苹果 & ipad & 微信 & 支付宝 & 是否是手机端
BrowserInfo = {
  isAndroid: Boolean(navigator.userAgent.match(/android/ig)),
  isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),
  isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),
  isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),
  isAli: Boolean(navigator.userAgent.match(/AlipayClient/ig)),
  isPhone: Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))
}
