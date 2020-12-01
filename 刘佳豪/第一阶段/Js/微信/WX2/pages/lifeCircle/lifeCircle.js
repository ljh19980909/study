Page({
    data: {},
    onLoad(options) {
        console.log(options, 'onload');
    },
    onReady() {
        console.log('onReady');
    },
    onShow() {
        console.log('onShow');
    },
    onHide() {
        console.log('onHide');
    },
    onUnload() {
        console.log('onUnload');
    },
    onShareAppMessage() {
        console.log('onShareAppMessage');
        return {
            title: '',
        };
    },
});
