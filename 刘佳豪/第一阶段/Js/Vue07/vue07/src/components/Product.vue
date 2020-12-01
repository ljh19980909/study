<template>
	<div class="product">
		<!-- 容器 -->
		<div class="container-fluid">
			<!-- 行 -->
			<div class="row">
				<!-- 左边的按钮组 -->
				<div class="col-md-3">
					<!-- 分类按钮 -->
					<button class="btn btn-default btn-block" @click="Btn('全部')" :class="{'btn-primary':'全部' == s}">全部</button>
					<!-- 以下按钮需要通过数据过滤得到 -->
					<button class="btn btn-default btn-block" v-for="(v,i) in cartBtns" @click="Btn(v)" :class="{'btn-primary':v == s}">{{v}}</button>
				</div>
				<!-- 右边的商品列表 -->
				<div class="col-md-9">
					<!-- 以下商品将来需要v-for -->
					<div v-for="(n,i) in pagesArr" :key="i">
						<h3>{{n.name}}
							<span class="pull-right label label-primary">{{n.price}}</span>
						</h3>
						<button class="btn btn-success pull-right" @click="addCart(n)">加入购物车</button>
						<p class="clearfix"></p>
						<p class="lead">{{n.desc}}</p>
					</div>
					<!-- 按钮组 将来循环渲染-->
					<div class="pull-right">
						<button class="btn btn-default" v-for="v in pageArr" @click="Btns(v)" :class="{'btn-primary':v == t}">{{v}}</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Product",
		data() {
			return {
				products: [],
				btns: [],
				s: "全部",
				//存储每一种分类的所有商品
				Products: [],
				// 存储每一种分类的一页的商品
				pageArr: 0,
				t: 1,
				pagesArr: [],
				index:0
			}
		},
		created() {
			let url="/get"
			this.axios.get(url, {}).then(data => {
				this.products = data
				this.Btn('全部')
			}).catch(err => {
				console.log(err)
			});
		},
		methods: {
			Btn(t) {
				this.s = t;
				this.t = 1;
				if (t == '全部') {
					this.Products = this.products
				} else {
					this.Products = this.products.filter(v => {
						return v.Category == t;
					})
				}
				//处理分页按钮数量
				this.handelPageCount();
			},
			Btns(v) {
				this.t = v;
				//处理分页商品
				this.handelPagePros(v);
			},
			// 添加购物车按钮点击事件
			addCart(n) {
				//调用父组件的方法
				this.$parent.addPros(n);
				this.totalVue.$emit("pro_event", this.$parent.sendCartPros(n))
				this.axios.get("/carts", {
					params:{
						name:n.name,
						price:n.price,
						count:1
					}
				}).then(data => {
					console.log(data)
				}).catch(err => {
					console.log(err)
				})
			},
			//处理按钮分页数量
			handelPageCount() {
				this.pageArr = Math.ceil(this.Products.length / 3)
				//处理分页商品
				this.handelPagePros(1);
			},
			//处理分页商品的方法：
			handelPagePros(n) {
				this.pagesArr = this.Products.slice((n - 1) * 3, n * 3);
			}
		},
		computed: {
			//处理this.products数组,过滤出分类的字符串
			cartBtns() {
				return this.products.reduce((btns, v) => {
					btns.push(v.Category)
					return [...new Set([...btns])]
				}, [])
			}
		}
	}
</script>

<style scoped>
</style>
