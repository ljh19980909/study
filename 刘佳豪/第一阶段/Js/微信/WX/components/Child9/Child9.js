Component({
    behaviors: [],
    properties: {},
    data: {
        c9Msg: '我是大智障吗?',
    },
    lifetimes: {
        created() {},
        attached() {},
        moved() {},
        detached() {},
    },
    methods: {
        action() {
            this.triggerEvent('c9', { c9: this.data.c9Msg }, { bubbles: true, composed: true });
        },
        c9Func() {
            console.log('child9里面响应了c9事件!!');
        },
    },
});
