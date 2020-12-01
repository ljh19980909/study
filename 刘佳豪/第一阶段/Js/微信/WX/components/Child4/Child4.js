// components/Child4/Child4.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        c4Msg: '我是child4组件',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        sendToPage() {
            // 微信小程序触发自定义事件
            this.triggerEvent('cusC4', { c4Msg: this.data.c4Msg });
        },
    },
});
