export default function fetch(v) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: v.url,
            data: v.data,
            dataType: 'json',
            enableCache: true,
            enableHttp2: true,
            enableQuic: true,
            header: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            method: v.method,
            responseType: 'text',
            timeout: 0,
            success: resolve,
            fail: reject,
            complete: res => {},
        });
    });
}
