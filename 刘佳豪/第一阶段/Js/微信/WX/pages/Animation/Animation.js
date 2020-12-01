Page({
    data: {},

    tranEnd() {
        console.log('过渡动画结束!!');
    },
    anEnd() {
        console.log('关键帧动画结束!!');
    },
    anIter() {
        console.log('关键帧动画中间!!');
    },
    anStart() {
        console.log('关键帧动画开始!!');
    },
    animation() {
        this.animate(
            '.v3',
            [
                { width: '200rpx', height: '300rpx', backgroundColor: 'green' },
                { width: '300rpx', height: '400rpx', backgroundColor: 'red' },
                { width: '200rpx', height: '300rpx', backgroundColor: 'pink' },
            ],
            5000,
            () => {
                console.log('动画结束');
                this.clearAnimation(
                    '.v3',
                    { width: true, height: true, backgroundColor: true },
                    () => {
                        console.log('清除样式完毕');
                    }
                );
            }
        );
    },
    onLoad(options) {},
    onReady() {},
    onShow() {},
    onHide() {},
    onUnload() {},
    onShareAppMessage() {
        return {
            title: '',
        };
    },
});
