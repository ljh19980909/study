$('button').click(function() {
	currentClass = $(this).parent().parent().attr('class');
	console.log(currentClass)
	tr = $(this).parent().parent();
	name = tr.children().eq(0).html();
	price = tr.children().eq(1).html();
	trs = $('.Table').html();
	if (trs.indexOf(name) == -1) {
		before();

	} else if (trs.indexOf(name) > 0) {
		a = $(".Table").find("." + currentClass);
		b = $(a).find(".account");
		Total = $(a).find(".money");
		c = $(a).find(".price");
		$(b).val(function() {
			return parseInt($(b).val()) + 1;
		})
		$(Total).html(function() {
			return parseInt($(c).html()) * parseInt($(b).val())
		})
	}
	// 删除tr
	$('.remove').click(function() {
		$(this).parent().parent().remove();
		total();
	});
	total();
});
// 添加tr
function before() {
	$('#total').before('<tr class =' + currentClass + ' ><td>' + name + '</td><td class="price">' + price +'</td><td><button style="width: 20px;"class="subtract" onclick="decrease(this)">-</button><input type="text" style="width: 30px;text-align:center" value="1" class="account"/><button style="width: 20px;" class="plus" onclick="increase(this)">+</button></td><td class="money">' +price + '</td><td><button type="button" class="remove">删除</button></td></tr>');
};
//加法
function increase(add) {
	$(add).prev().val(function() {
		return parseInt($(add).prev().val()) + 1;
	});
	var pers = parseInt($(add).parent().prev().html());
	var piece = parseInt($(add).prev().val());
	$(add).parent().next().html(function() {
		return pers * piece;
	})
	total();
};
//减法
function decrease(adds) {
	if (parseInt($(adds).next().val()) <= 1) {
		$(adds).next().val(1);
	} else {
		$(adds).next().val(function() {
			return parseInt($(adds).next().val()) - 1;
		});
	};
	var pers = parseInt($(adds).parent().prev().html());
	var piece = parseInt($(adds).next().val());
	$(adds).parent().next().html(function() {
		return pers * piece;
	})
	total();
};
//总价计算
function total() {
	var sum = 0;
	$(".money").each(function(i, v) {
		sum += parseInt($(v).html())
	})
	$("#total td").eq(1).html(function() {
		return sum;
	});
};
