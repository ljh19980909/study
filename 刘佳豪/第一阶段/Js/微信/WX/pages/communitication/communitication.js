// pages/communitication/communitication.js
Page({
    getVTC4(v) {
        console.log(v);
        this.setData({
            pageMsg: v.detail.c4Msg,
        });
    },
    getC7Data() {
        let c = this.selectComponent('#c7');
        console.log(c);
        this.setData({
            c7: c.data.c7,
        });
    },
    getC7RandNum() {
        let c = this.selectComponent('#c7');
        console.log(c);
        this.setData({
            c7V: c.__proto__.randomNumber(10, 20),
        });
    },
    page1Func() {
        console.log('page1里面响应了c9事件!!');
    },
    page2Func() {
        console.log('page2里面响应了c9事件!!');
    },
    /**
     * 页面的初始数据
     */
    data: {
        fMsg: '这是父组件页面的数据fMsg',
        news: [
            {
                title: '666',
                content: '你好棒棒哒!!!',
            },
            {
                title: '777',
                content: '你是大傻逼!!!',
            },
            {
                title: '888',
                content: '你竟然喊我爸爸!!!',
            },
            {
                title: '999',
                content: '你这样我就很害羞!!!',
            },
        ],
        pageMsg: '',
        c7: '',
        c7V: '',
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
