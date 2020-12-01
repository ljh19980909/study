Page({
    toast() {
        wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000,
        });
    },
    modal() {
        wx.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            success(res) {
                if (res.confirm) {
                    console.log('用户点击确定');
                } else if (res.cancel) {
                    console.log('用户点击取消');
                }
            },
            confirmColor: '#576B95',
            cancelColor: '#000',
        });
    },
    loading() {
        wx.showLoading({
            title: '加载中',
        });
    },
    sheet() {
        wx.showActionSheet({
            itemList: ['A', 'B', 'C'],
            success(res) {
                console.log(res.tapIndex);
            },
            fail(res) {
                console.log(res.errMsg);
            },
        });
    },
    navigation() {
        // wx.showNavigationBarLoading({
        //     complete: res => {},
        // });
        // wx.setNavigationBarTitle({
        //     title: '当前页面',
        // });
    },
    reddot() {
        wx.showTabBarRedDot({
            index: 2,
        });
        wx.setTabBarBadge({
            index: 1,
            text: '我同桌来大姨妈了',
        });
        wx.hideTabBar({
            animation: true,
        });
    },
    pulldown() {
        wx.startPullDownRefresh({
            complete: res => {
                console.log('我同桌来大姨妈了');
            },
        });
    },
    saveS() {
        wx.setStorage({
            data: '我同桌来大姨妈了',
            key: '真的吗???',
            complete: res => {
                console.log('完成');
            },
            fail: function () {
                console.log('失败');
            },
            success: function () {
                console.log('成功');
            },
        });
        wx.setStorageSync('流血了吗????', new Date().toLocaleDateString());
        console.log('666', new Date().toLocaleDateString);
    },
    getS() {
        wx.getStorage({
            key: '流血了吗????',
            complete: res => {
                console.log('完成', res);
            },
            fail: function (res) {
                console.log('失败', res);
            },
            success: function (result) {
                console.log('成功', result);
            },
        });
    },
    removeS() {
        wx.removeStorage({
            key: '流血了吗????',
        });
    },
    findS() {
        wx.getStorageInfo({
            complete: res => {
                console.log(res);
            },
        });
    },
    /**
     * 页面的初始数据
     */
    data: {
        starIndex1: 3,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log('我同桌来大姨妈了!!');
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},
});
