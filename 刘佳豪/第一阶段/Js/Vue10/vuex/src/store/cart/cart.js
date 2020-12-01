export default {
	state: () => ({
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
		}]
	}),
	mutations: {
		upPrice: state => {
			state.cart.forEach(v => {
				v.pPrice += 5
			})
		},
		salePrice: (state, n) => {
			state.cart.forEach(v => {
				v.pPrice *= n
			})
		}
	},
	actions: {},
	getters: {
		// 获取价格小于等于5块的商品
		filterPrice: state => {
			return state.cart.filter(v => {
				return v.pPrice < 5
			})
		},
		//计算商品的总价格
		totalPrice:state=>{
			return state.cart.reduce((total,v)=>{
				return total+=v.pPrice
			},0)
		}
	},
	//命名空间
	namespaced: true,
}
