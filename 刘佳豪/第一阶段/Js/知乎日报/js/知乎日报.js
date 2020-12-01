$.ajax({
	url: "https://zhihu-agent.herokuapp.com/get?api=/4/news/latest",
	type: 'get',
	success: function(data) {
		var a = JSON.parse(data);
		//日期
		$('.date').append(a.date);
		//轮播图
		for (var i = 0; i < a.top_stories.length; i++) {
			$('.swiper-wrapper').append('<div class="swiper-slide"><img src=' + a.top_stories[i].image + '><p class="title">' + a.top_stories[i].title + '</p></div>');
		};
		//li
		for (var i = 0; i < a.stories.length; i++) {
			$('.wrap2').append('<li><img src="' + a.stories[i].images[0] + '"><p><a href="' + a.stories[i].url + '">' + a.stories[i].title + '</a></p></li>');
		};
		//轮播
		lun();
	}
});
// 轮播图
function lun() {
	var swiper = new Swiper('.swiper-container', {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: 3000,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});
};
var dates = 20200907;
function getReq(a) {
	console.log(dates)
	$.ajax({
		url: 'https://zhihu-agent.herokuapp.com/get?api=/4/news/before/' + a,
		type: 'get',
		success: function(data) {
			var b = JSON.parse(data);
			$('.wrap2').append('<p class="Date">' + b.date + '</p>');
			for (var i = 0; i < b.stories.length; i++) {
				$('.wrap2').append('<li><img src="' + b.stories[i].images[0] + '"><p><a href="' + b.stories[i].url + '">' + b.stories[i].title + '</a></p></li>');
			};
		}
	});
};
var a = 0;
var number = 0;
$(window).scroll(function() {
	var  scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if (scrollTop < 230 + 800 * number && scrollTop > 200 + 800 * number) {
		a++;
		if (a == 1) {
			getReq(dates);
			dates--;
			number++;
			a = 0;
			if(dates == 20200900){
				dates = 20200831;
			}else if(dates == 20200800){
				dates = 20200731;
			}
		};
	};
});
