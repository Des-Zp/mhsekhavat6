
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/addressList/addressList","pages/my/my","pages/login/login","pages/activityes/activityes","pages/activityDetail/activityDetail"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"HC掌上物业","navigationBarBackgroundColor":"#00AA00","backgroundColor":"#00AA00"},"tabBar":{"color":"#272636","selectedColor":"#00AA00","borderStyle":"black","backgroundColor":"#ffffff","height":"50px","fontSize":"10px","iconWidth":"24px","spacing":"3px","list":[{"pagePath":"pages/index/index","iconPath":"static/image/home.png","selectedIconPath":"static/image/home-selected.png","text":"首页"},{"pagePath":"pages/addressList/addressList","iconPath":"static/image/addressList.png","selectedIconPath":"static/image/addressList-selected.png","text":"通讯录"},{"pagePath":"pages/my/my","iconPath":"static/image/my.png","selectedIconPath":"static/image/my-selected.png","text":"我的"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"HC掌上物业","compilerVersion":"2.5.1","entryPagePath":"pages/index/index","networkTimeout":{"request":6000,"connectSocket":6000,"uploadFile":6000,"downloadFile":6000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"HC掌上物业"}},{"path":"/pages/addressList/addressList","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"通讯录"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/login/login","meta":{},"window":{"navigationStyle":"custom","titleNView":false,"bounce":"none","scrollIndicator":"none"}},{"path":"/pages/activityes/activityes","meta":{},"window":{"navigationBarTitleText":"小区文化"}},{"path":"/pages/activityDetail/activityDetail","meta":{},"window":{"navigationBarTitleText":"文化详情"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});
