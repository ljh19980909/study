// components/Child6/Child6.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        c6Msg: '我是Child6组件',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        sendToChild5() {
            // 微信小程序触发自定义事件
            this.triggerEvent('cusC6', { c6Msg: this.data.c6Msg });
        },
    },
});
