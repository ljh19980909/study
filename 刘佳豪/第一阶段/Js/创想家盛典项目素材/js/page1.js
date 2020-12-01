$(function() {
	//music
	var angle = 0;
	setInterval(function() {
		angle += 8;
		$('#music').rotate(angle);
	}, 50);
	//切换图片
	var Bool = true;
	var played = document.querySelector('.play');
	$("#music").click(function() {
		if (Bool) {
			$("#music").prop("src", "./img/musicoff.png");
			played.pause();
			Bool = !Bool;
		} else {
			$("#music").prop("src", "./img/music.png");
			played.play();
			Bool = !Bool;
		};
	})
	//slide
	setInterval(function() {
		$('#slide').animate({
			top: 647
		}, 500);
		$('#slide').animate({
			top: 637
		}, 500)
	}, 1000)
	//流星
	setInterval(function() {
		$('#starred').animate({
			left: 3,
			top: 448,
			opacity: 0
		}, 1000, function() {
			$('#starred').css({
				left: -125,
				top: 428,
				opacity: 1
			}, 1000);
		});
	}, 1500);
	setInterval(function() {
		$('#staryellow').animate({
			left: 53,
			top: 76,
			opacity: 1
		}, 1000, function() {
			$('#staryellow').css({
				left: 180,
				top: 118,
				opacity: 0
			}, 1000);
		});
	}, 1500);
	setInterval(function() {
		$('#starblue').animate({
			left: 187,
			top: 442,
			opacity: 1
		}, 1000, function() {
			$('#starblue').css({
				left: 340,
				top: 342,
				opacity: 0
			}, 1000);
		});
	}, 1500);
	//logo
	$('#logo>img:first').animate({
		left: 34,
	}, 500);
	$('#logo>img').eq(1).animate({
		top: 123,
	}, 600);
	$('#logo>img').eq(2).animate({
		top: 248,
	}, 700);
	$('#logo>img').eq(3).animate({
		top: 123,
	}, 800);
	$('#logo>img').eq(4).animate({
		top: 123,
	}, 900);
	$('#logo>img').eq(5).animate({
		left: 34,
		top: 234,
	}, 1000);
	$('#logo>img').eq(6).animate({
		left: 48,
		top: 248,
		width: 38,
	}, 300, function() {
		$('#logo>img').eq(10).show();
		$('#logo>img').eq(10).animate({
			left: 103,
			top: 237,
			height: 198,
		}, 300, function() {
			$('#logo>img').eq(9).show();
			$('#logo>img').eq(9).animate({
				left: 153,
				top: 237,
				width: 42,
			}, 300, function() {
				$('#logo>img').eq(11).show();
				$('#logo>img').eq(11).animate({
					left: 198,
					top: 229,
					width: 145,
				}, 300, function() {
					$('#logo>img').eq(13).show();
					$('#logo>img').eq(13).animate({
						left: 117,
						top: 394,
						width: 226,
					}, 300, function() {
						$('#dreamMaker').show();
						$('#dreamMaker').animate({
							fontSize: 40,
						}, 600, function() {
							$('.name').show();
							$('.name').animate({
								fontSize: 20,
							}, 600, function() {
								$('.blue').animate({
									top: 410,
									left: 20,
									opacity: .8,
								}, 2000);
								$('.red').animate({
									top: 410,
									left: 80,
									opacity: .8,
								}, 2000);
							});
							$('#dreamMaker').addClass('animated bounce');
						});
					})
				});
			});
		});
	});
	$('#logo>img').eq(7).animate({
		left: 103,
		top: 193.8,
	}, 600);
	$('#logo>img').eq(8).animate({
		left: 117,
		top: 310,
	}, 1000);
	$('#logo>img').eq(12).animate({
		left: 117,
		top: 251,
	}, 1000);
	//第二页
	var wordImg = document.querySelector('.wordImg');
	var index = 1;

	function changImg() {
		index++;
		if (index > 47) {
			index = 1;
		}
		wordImg.src = './img/' + index + '.jpg';
	}
	setInterval(function() {
		changImg();
	}, 100);
	$('#changeWord img').eq(0).addClass('animated bounceInLeft');
	$('#changeWord img').eq(1).addClass('animated bounceInRight');
})
// 第三页
setInterval(function() {
	$('#circle>img').eq(0).animate({
		left: 181,
		top: 60,
	}, 1000);
	$('#circle>img').eq(0).animate({
		left: 184,
		top: 70
	}, 1000);
}, 1200);
setInterval(function() {
	$('#circle>img').eq(1).animate({
		left: 200,
		top: 118,
	}, 1200);
	$('#circle>img').eq(1).animate({
		left: 196,
		top: 121
	},1200)
},1100);
setInterval(function() {
	$('#circle>img').eq(2).animate({
		left: 17,
		top: 230
	}, 1300);
	$('#circle>img').eq(2).animate({
		left: 14,
		top: 236
	},1300)
},900);
setInterval(function() {
	$('#circle>img').eq(3).animate({
		left: 293,
		top: 293
	}, 1400);
	$('#circle>img').eq(3).animate({
		left: 288,
		top: 296
	},1400)
},800);
setInterval(function() {
	$('#circle>img').eq(4).animate({
		left: 140,
		top: 302
	}, 1000);
	$('#circle>img').eq(4).animate({
		left: 135,
		top: 306
	},1000)
},1000);
setInterval(function() {
	$('#circle>img').eq(5).animate({
		left: 32,
		top: 428
	}, 1200);
	$('#circle>img').eq(5).animate({
		left: 28,
		top: 433
	},1200)
},1200);
setInterval(function() {
	$('#circle>img').eq(6).animate({
		left: 188,
		top: 475
	}, 900);
	$('#circle>img').eq(6).animate({
		left: 192,
		top: 482
	},900)
},800);
setInterval(function() {
	$('#circle>img').eq(7).animate({
		left: 78,
		top: 590
	}, 1300);
	$('#circle>img').eq(7).animate({
		left: 73,
		top: 582
	},1300)
},1100);