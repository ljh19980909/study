const { $Message } = require('../../dist/base/index');
Page({
    isChange(e) {
        wx.showModal({
            title: '提示',
            content: '您确定要删除吗??',
            success: res => {
                if (res.confirm) {
                    wx.removeStorage({
                        key: e.currentTarget.dataset.id,
                        success: () => {
                            this.show();
                        },
                    });
                    console.log('用户点击确定');
                } else if (res.cancel) {
                    console.log('用户点击取消');
                }
            },
        });
    },
    /**
     * 页面的初始数据
     */
    data: {
        collects: [],
        actions: [
            {
                name: '删除',
                color: '#000',
                fontsize: '20',
                width: 100,
                background: '#ed3f14',
            },
        ],
    },
    show() {
        wx.getStorageInfo({
            success: res => {
                var arr = [];
                res.keys.forEach(v => {
                    wx.getStorage({
                        key: v,
                        success: res => {
                            if (res.data.title) {
                                arr.push(res.data);
                            }
                            this.setData({
                                collects: [...arr],
                            });
                        },
                    });
                });
            },
        });
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
    onShow: function () {
        this.show();
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        this.show();
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},
});
