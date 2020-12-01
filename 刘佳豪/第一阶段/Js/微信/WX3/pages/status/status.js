const app = getApp();
Page({
    // 开启本页的state
    useStore: true,
    // 修改ministore的数据通过store实例调用setState方法修改
    change() {
        // getApp().store.setState({
        //     msg: '1234',
        // });
        this.setData({
            msg: '7777',
        });
    },
    a() {
        console.log('999');
        this.setData({
            msg: '888',
        });
    },
    /**
     * 页面的初始数据
     */
    data: {
        msg: '6666',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const app = getApp();
        // 调用监听器，监听数据变化
        app.watch(this, {
            msg: newVal => {
                if (newVal == '7777') {
                    this.a();
                }
            },
        });
    },
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
