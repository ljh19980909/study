const express = require("express");
const mongoose = require("mongoose");
let cors = require("cors");
// let bp = require("body-parser");
// let crypto = require("crypto");

const app = express();
app.use(cors());
// app.use(bp.urlencoded({
// 	extended: false
// }));
// app.use(bp.json());
// app.use(express.static("./dist"))
// app.use(express.static("./"));

//加密函数  传入明文,返回加密过后的密文
// function my_md5(initInfo) {
// 	let md5 = crypto.createHash("md5");
// 	let pw = md5.update(initInfo).digest("base64");
// 	return pw
// }

app.listen(3434, function() {
	console.log("服务器已建立，监听3434端口");
	mongoose.connect('mongodb://localhost/server', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	});
});

mongoose.connection.on("open", function() {
	console.log("数据库连接成功！");
	const Schema = mongoose.Schema;
	const schemaObj = new Schema({
		name: String,
		price: Number,
		desc: String,
		Category: String,
	}, {
		collection: "product"
	});
	const schemaObj1 = new Schema({
		username: String,
		password: String,
		user_token: String,
		expires_time: Date
	}, {
		collection: "users"
	});
	const schemaObj2 = new Schema({
		name: String,
		price: Number,
		count: Number
	}, {
		collection: "carts"
	});
	const a = mongoose.model('product', schemaObj);
	const b = mongoose.model('users', schemaObj1);
	const c = mongoose.model('carts', schemaObj2);

	function isOverTime(userToken) {
		return new Promise((resolve, reject) => {
			b.find({
				user_token: userToken
			}, (error, result) => {
				//获取上一次用户活跃时刻
				let activeDate = result[0].expires_time;
				// 获取当前时刻
				let nowDate = new Date();
				// 时间戳相减
				let s = (nowDate.getTime() - activeDate.getTime()) / 1000;
				if (s > 10) {
					resolve(1)
				} else {
					resolve(0)
				}
			})
		})
		/*
			取出token,验证是否超时;
			1.超时--- 返回超时状态码 status:409
			2.未超时--更新token,返回数据
		*/

	}
	app.all("*", async (req, res, next) => {
		let userToken = req.get("userAuth");
		if (userToken) {
			if (await isOverTime(userToken)) {
				console.log("已超时")
				res.status(409).end();
			} else {
				console.log("未超时")
				b.updateOne({
					user_token: userToken
				}, {
					$set: {
						expires_time: new Date()
					}
				}, (error, result) => {
					next()
				})
			}
		} else {
			next()
		}
	})
	app.get("/get", async function(req, res) {
		a.find({}, function(error, result) {
			if (!error) {
                console.log(result)
				res.json(result)
			} else {
				res.end()
			}
		});
	});
	app.post("/login", function(req, res) {
		b.find({
			username: req.body.username,
			password: req.body.password
		}, function(error, result) {
			if (result.length) {
				/*
					用户登录成功,生成token
					用户名+密码+盐值 ===> 加密 ===> 加密字符串
					MD5加密:
						明文 ===> 密文(反推不行)
							只要明文一致,加密出的密文一定是一样的
							
							加密模块:crypto模块
				*/
				//用户名+密码+盐
				let myInfo = req.body.username + req.body.password + "node";
				// 加密
				let md5Token = my_md5(my_md5(myInfo));
				// 生成当前时刻
				let loginDate = new Date();
				//存入对应用户的数据库,记录了本次用户的登录时刻
				b.updateOne({
					_id: result[0]._id
				}, {
					$set: {
						user_token: md5Token,
						expires_time: loginDate
					}
				}, function(error, result) {
					if (!error) {
						res.json({
							status: "ok",
							userInfo: {},
							userToken: md5Token
						})
					} else {
						res.json({
							status: "updateError"
						})
					}
				});
			} else {
				res.json({
					status: "noUser"
				})
			}
		})
	});
	app.get("/carts",async function(req, res) {
		c.find({
			name: req.query.name
		}, {}, await function(error, result) {
			if (result.length == 0) {
				c.create({
					name: req.query.name,
					price: req.query.price,
					count: req.query.count
				},function(error, result) {
					if (!error) {
						res.json(result)
					} else {
						res.end()
					}
				})
			} else {
				c.updateMany({
					name: req.query.name
				}, {
					"$inc": {
						"count": 1
					}
				},function(error, result) {
					if (!error) {
						res.json(result)
					} else {
						res.end()
					}
				})
			}
		})
	});
	app.get("/cart", async (req, res) => {
		c.find({},await function(error, result) {
			if (!error) {
				res.json(result)
			} else {
				res.end()
			}
		});
	});
	app.get("/delete",async (req, res) => {
		c.find({
			name: req.query.name
		},await function(error, result) {
			if (result[0].count > 1) {
				c.updateOne({
					name: req.query.name
				}, {
					"$inc": {
						"count": -1
					}
				},function(error, result) {
					if (!error) {
						console.log("数据修改成功！", result)
						res.json(result)
					} else {
						console.log("数据修改失败！", error)
						res.end()
					}
				})
			} else {
				c.remove({
					name: req.query.name
				},function(error, result) {
					if (!error) {
						console.log("数据删除成功！", result)
						res.json(result)
					} else {
						console.log("数据删除失败！", error)
						res.end()
					}
				})
			}
		})
	});
});
