//引入再次对http封装的插件
const express = require("express");
const https = require("https");
const cors=require("cors");
//初始化一个模块
let app = express();
app.use(cors());
let  netEaseUrl2 = "http://c.m.163.com/nc/article/headline/T1348647853363/0-140.html";
app.get("/get2",function (req,res) {
    https.get(netEaseUrl2,function (resObj2) {
        let allData2 = "";
        resObj2.on("data",function (chunk2) {
            allData2 += chunk2;
        });
        resObj2.on("end",function () {
            res.end(`callback(${allData2})`)
        })
    })
});
app.listen(5678,function () {
    console.log("5678服务器创创建成功")
});