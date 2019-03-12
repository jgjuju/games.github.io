/**
 * 浏览器+设备终端检测
 * @author lpg
 */

//移动端检测
var isMobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)

//设备系统检测
var isiPad = /iPad/i.test(navigator.userAgent);//ipad
var isiPhone = /iPhone|iPod/i.test(navigator.userAgent);//iphone
var isAndroid = /Android/i.test(navigator.userAgent);//android
var isIOS = /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(navigator.userAgent)//IOS
var isWechat = /MicroMessenger/i.test(navigator.userAgent);//wechat
var isPalmchat = /palmchat/i.test(navigator.userAgent);//连信
var isQQ = /QQ/i.test(navigator.userAgent);//QQ
var isWeibo = /Weibo/i.test(navigator.userAgent);//weibo

//浏览器检测
var isQQBro = /MQQBrowser/i.test(navigator.userAgent)//QQ浏览器
var isUCBro = /UCBrowser/i.test(navigator.userAgent)//UC浏览器
var isChrome = /Chrome\/([\d\.]+)/i.test(navigator.userAgent)//Chrome
var isFireFox = /Firefox\/([\d\.]+)/i.test(navigator.userAgent)//FireFox
var isIE = navigator.userAgent.indexOf("compatible") > -1 && navigator.userAgent.indexOf("MSIE") > -1 && !isOpera//IE
var isSafari = /Safari/i.test(navigator.userAgent)//Safari
var isOpera = /Opera/i.test(navigator.userAgent)//Opera
var isMaxthon = navigator.userAgent.indexOf("Maxthon") > -1//遨游broswer



