// page里如何获取App实例
import Api from '../api/api';
import fetch from '../api/fetch';
let app = getApp();
console.log(app.api);
Page({
    netRequest() {
        wx.request({
            url: app.api.city,
            data: { type: 'group' },
            dataType: 'json',
            method: 'get',
            responseType: 'text',
            success: result => {
                console.log(result.data);
            },
            fail: res => {
                console.log(res);
            },
        });
    },
    net() {
        fetch({ url: Api.cities, data: { type: 'group' }, method: 'GET' })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    },
    wyy() {
        fetch({ url: 'https://api.apiopen.top/videoHomeTab', method: 'GET' })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    },
    data: {},
    onLoad(options) {},
    onReady() {},
    onShow() {},
    onHide() {},
    onUnload() {},
    onShareAppMessage() {
        return {
            title: '',
        };
    },
});
