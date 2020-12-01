import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/*
	Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
	
	Vuex的核心思想：把组件需要共享的状态抽离出来，以一个全局单例对象进行管理
	注意：Vuex确实可以让我们的数据传递和共享变得容易，但是其附带了新的语法且需要下载插件，所以，项目不够复杂是，不建议使用Vuex

*/

export default new Vuex.Store({
	/*
	State：vuex中公共状态存放的地方，他里面存储的东西就是将来需要被多个组件共享的数据，数据的格式可以是任意格式
	*/
	state: {
		cart: [{
			pName: "苹果",
			pPrice: 2
		}, {
			pName: "橘子",
			pPrice: 3
		}, {
			pName: "西瓜",
			pPrice: 5
		}, {
			pName: "草莓",
			pPrice: 7
		}, {
			pName: "菠萝",
			pPrice: 10
		}],
		count: 666,
		stuScore: [{
			name: "张三",
			score: 59
		}, {
			name: "赵四",
			score: 61
		}, {
			name: "李五",
			score: 70
		}, {
			name: "王六",
			score: 80
		}, {
			name: "刘七",
			score: 90
		}, {
			name: "张二",
			score: 86
		}, {
			name: "依依",
			score: 100
		}, {
			name: "拿了托",
			score: 35
		}, {
			name: "萨斯给",
			score: 46
		}, {
			name: "撒苦辣",
			score: 18
		}, ],
		product: []
	},
	/*
		getters:vuex的计算属性,如果我们将来需要在多个组件里使用state的数据,而且还需要对数据先进行计算,此时,我们可以选择将计算的代码写入到getters里,这样不需要再每个组件里重复赋值计算代码
	*/
	getters: {
		JSScore: state => {
			return state.stuScore.filter(stu => {
				return stu.score >= 70;
			})
		},
		total:(state, v)=>{
			 return state.product.reduce((total, v) => {
				total += v.count*v.price;
				return total
			}, 0)
		},
		/*
			评级
				100-90 优秀 "A"
				90-80 良好	"B"
				80-70 及格	"C"
				70以下 不及格 "D"
				70以上所有通过的人 "P"
		*/
		scoreGrand: (state, getters) => (grand) => {
			// getters里的计算属性,函数可以接受第二个参数,我们可以在一个getters的计算属性里调用其他getters的计算属性
			switch (grand) {
				case "A":
					{
						return state.stuScore.filter(stu => {
							return stu.score >= 90;
						});
						break;
					};
				case "B":
					{
						return state.stuScore.filter(stu => {
							return stu.score < 90 && stu.score >= 80;
						});
						break;
					};
				case "C":
					{
						return state.stuScore.filter(stu => {
							return stu.score < 80 && stu.score >= 70;
						});
						break;
					};
				case "D":
					{
						return state.stuScore.filter(stu => {
							return stu.score < 70;
						});
						break;
					};
				case "P":
					{
						return getters.JSScore
						break;
					};
			}
		}
	},
	/*
		更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件
	*/
	mutations: {
		// 涨价的函数
		increment(state) {
			state.cart.forEach(pro => {
				pro.pPrice++;
			})
		},
		discount(state, n) {
			if (n > 1) {
				n = 1;
			}
			if (n < .5) {
				n = .5;
			}
			state.cart.forEach(pro => {
				pro.pPrice *= n;
			})
		},
		luckStudent(state) {
			state.stuScore[Math.floor(Math.random() * 10)].score += 10;
		},
		add: (state, v) => {
			if (state.product.indexOf(v) == -1) {
				state.product.push(v);
			} else {
				v.count++
			}

		},
		del: (state, v) => {
			if (v.count == 1) {
				state.product.splice(state.product.indexOf(v), 1);
			} else {
				v.count--
			}
		},
	},
	/*
		Actions:actions与mutations非常相似，不同在于：
			1、Action 提交的是 mutation，而不是直接变更状态。
			2、Action 可以包含任意异步操作。
	*/
	actions: {
		luckyStudent(context) {
			//actions里可以有异步的代码
			setTimeout(() => {
				context.commit('luckStudent')
			}, 5000)
		}
	},
	modules: {}
})
