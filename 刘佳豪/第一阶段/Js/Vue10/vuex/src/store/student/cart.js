export default {
	state: () => ({
		student: [{
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
		}]
	}),
	mutations: {
		luckStudent(state) {
			state.student[Math.floor(Math.random() * 10)].score += 10;
		},
	},
	actions: {
		rand(context){
			setTimeout(() => {
				context.commit('luckStudent')
			}, 1000)
		}
	},
	namespaced: true,
}
