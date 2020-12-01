//app.js
/*
    使用步骤：
        1.引入wxministore
        2.实例化store对象
        3.将store对象注入到小程序中
*/
import Store from 'wxministore';
let store = new Store({
    // 数据源
    state: {
        msg: 'hello!!!',
        arr: [
            { name: '张三', age: 18 },
            { name: '李四', age: 19 },
            { name: '王五', age: 20 },
            { name: '赵六', age: 21 },
        ],
    },
    // 启用局部注入
    openPart: true,
    // 开启全局的page生命周期监听
    pageLisener: {
        onLoad(options) {
            console.log('我在' + this.route, '参数为', options);
        },
    },
});
App({
    store,
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            },
        });
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo;

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res);
                            }
                        },
                    });
                }
            },
        });
    },
    globalData: {
        userInfo: null,
    },

    // 设置监听器
    watch: function (ctx, obj) {
        Object.keys(obj).forEach(key => {
            this.observer(ctx.data, key, ctx.data[key], function (value) {
                obj[key].call(ctx, value);
            });
        });
    },
    // 监听属性，并执行监听函数
    observer: function (data, key, val, fn) {
        Object.defineProperty(data, key, {
            configurable: true,
            enumerable: true,
            get: function () {
                return val;
            },
            set: function (newVal) {
                if (newVal === val) return;
                fn && fn(newVal);
                val = newVal;
            },
        });
    },
});
