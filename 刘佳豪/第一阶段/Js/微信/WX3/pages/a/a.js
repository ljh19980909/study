Page({
    /**
     * 页面的初始数据
     */
    data: {},

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
        //可以在b页面获取a页面的数据，还可以直接调用上个页面的setData方法
        let pages = getCurrentPages(); // 获取当前页面栈
        let prevPage = pages[pages.length - 2]; // -2 是上一页的数据。上上页的数据就是-3
        // 直接操作上一个页面的 index数据 之后返回
        console.log(prevPage.change);
        // prevPage.setData({
        //     msg: '你是大傻逼！！',
        // });
        prevPage.change();
    },
    changes() {
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.setData({
            msg: '你是傻逼！！',
        });
    },
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
