Page({
    /**
     * 页面的初始数据
     */
    data: {},
    gotoNetwork() {
        wx.switchTab({
            url: '../Nework/Nework',
        });
    },
    gotoCt() {
        wx.navigateTo({
            url: 'url',
            events: {
                
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options, 'circle-one页面触发onload');
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log('circle-one页面触发onReady');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('circle-one页面触发onShow');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('circle-one页面触发onHide');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log('circle-one页面触发onUnload');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log('circle-one页面触发onPullDownRefresh');
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
