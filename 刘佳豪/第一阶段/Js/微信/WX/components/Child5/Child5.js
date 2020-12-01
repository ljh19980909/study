// components/Child5/Child5.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        c5Msg: '',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        getVTC6(v) {
            console.log(v);
            this.setData({
                c5Msg: v.detail.c6Msg,
            });
        },
    },
});
