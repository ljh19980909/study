import Api from '../api/api';
import fetch from '../api/fetch';
const { $Message } = require('../../dist/base/index');
Page({
    /**
     * 页面的初始数据
     */
    handleLongPress(e) {
        let query = e.currentTarget.dataset.idx;
        wx.getStorageInfo({
            success: res => {
                if (res.keys.includes(query.postid)) {
                    $Message({
                        content: '您已取消收藏!!',
                        type: 'error',
                    });
                    wx.removeStorage({
                        key: query.postid,
                        success: () => {
                            console.log(2, res.keys);
                            this.shows();
                        },
                    });
                } else {
                    $Message({
                        content: '您已收藏成功!!',
                        type: 'success',
                    });
                    wx.setStorage({
                        data: {
                            title: query.title,
                            content: query.digest,
                            img: query.imgsrc,
                            id: query.postid,
                        },
                        key: query.postid,
                        success: () => {
                            console.log(4);
                            this.shows();
                        },
                    });
                }
            },
        });
    },
    shows() {
        // 寻找
        wx.getStorageInfo({
            success: res => {
                this.setData({
                    collections: res.keys,
                });
            },
        });
    },
    data: {
        news: [],
        collections: [],
        index: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.shows();
        fetch({ url: Api.news })
            .then(res => {
                this.setData({
                    news: res.data.T1348647853363.slice(1, 21),
                });
            })
            // digest  imgsrc
            .catch(err => {
                console.log(err);
            });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.shows();
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        this.shows();
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
