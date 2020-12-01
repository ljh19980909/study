Component({
    behaviors: [],
    properties: {},
    data: {
        c7: 'hello,你个大傻逼!!!!!',
    },
    lifetimes: {
        created() {},
        attached() {},
        moved() {},
        detached() {},
    },
    methods: {
        randomNumber(x, y) {
            return Math.floor(Math.random() * (y - x + 1) + x);
        },
    },
});
