export default {
  path(){
    let url=''

    if (location.hostname == 'localhost') {
      //url = 'http://portal.etransfar.com'
    }
    return url
  },//URL正式需置空
  apiUrl() {
    let url = ''
    if (location.hostname == 'localhost') {
      //url = '/api'
    }
    return url

  },//代理前缀，正式置空
  set_font(num=750){
    // 计算、转换布局单位
    let html = document.getElementsByTagName('html')[0];
    let designFontSize = 100;
    let designWidth = num;
    function setFontSize() {
      var winWidth = document.documentElement.getBoundingClientRect().width;
      winWidth=winWidth>750?750:winWidth;
      var fontSize = winWidth / designWidth * designFontSize;

      html.style.fontSize = fontSize + 'px';
    }
    setFontSize();
    window.addEventListener('resize', function () {
      setFontSize();
    });
    return this;
  },
  getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  },
  getLoacl(name){
    return localStorage[name];
  }
}
