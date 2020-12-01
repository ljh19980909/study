$.ajax({
	url: "http://127.0.0.1:2222/neteaseNews",
	dataType: 'jsonp',
	type: 'get',
	jsonpCallback: "callback",
	success: function(data) {
		a = Object.values(data)[0];
		b = Object.values(data)[0].length;
		news();
		let News = [];
		$("button").click(function() {
			//存记录
			imgUrl = $(this).parent().parent().children().eq(0).children()[0].currentSrc;
			Title = $(this).parent().parent().children().eq(1).children()[0].innerHTML;
			Content = $(this).parent().parent().children().eq(1).children()[1].innerHTML;
			Shoucang = $(this).html();
			let newsObj = {
				imgsrcs: imgUrl,
				titles: Title,
				contents: Content,
				shouCang: Shoucang
			}
			//是否收藏
			if ($(this).html() == "收藏") {
				$(this).html("已收藏");
			} else if ($(this).html() == "已收藏") {
				$(this).html("收藏");
				News = JSON.parse(localStorage.news);
				for (let i = 0; i < News.length; i++) {
					if (newsObj.imgsrcs == News[i].imgsrcs) {
						News.splice(i, 1);
						localStorage.news = JSON.stringify(News);
						shoucang(News);
					}
				}
				return;
			}
			//添加记录
			News.push(newsObj);
			localStorage.news = JSON.stringify(News);
			shoucang(News);
		});
		News = JSON.parse(localStorage.news);
		shoucang(News);
		//判断是否已添加
		var x = $(".left>ul>li>.imgs>img");
		var y = $(".right>ul>li>.imgs>img");
		for (let i = 0; i < $("button").length; i++) {
			for (let j = 0; j < $(".right li").length; j++) {
				if (x[i].src == y[j].src) {
					$(x[i]).parent().next().children()[2].innerHTML = ("已收藏");
				}
			}
		}

	}
});
//左边添加
function news() {
	for (let i = 0; i < b; i++) {
		$(".left").append(
			`<ul>
				<li>
					<div class="imgs">
						<img src="${a[i].imgsrc}">
					</div>
					<div class="contents">
						<h3>${a[i].title}</h3>
						<p>${a[i].digest}</p>
						<button type="button">收藏</button>
					</div>
				</li>
			</ul>`
		)
	};
};
//右边添加
function shoucang(News) {
	$(".right li").remove();
	for (let i = 0; i < News.length; i++) {
		$('.right>h1').after(
			`<ul>
				<li>
					<div class="imgs">
						<img src="${News[i].imgsrcs}">
					</div>
					<div class="contents">
						<h3>${News[i].titles}</h3>
						<p>${News[i].contents}</p>
					</div>
				</li>
			</ul>`
		)
	}
}
