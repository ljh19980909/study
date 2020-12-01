function normal() {
	$.ajax({
		url: 'https://elm.cangdu.org/v1/cities?type=group',
		// url: "http://10.10.12.215:8888/city",
		dataType: 'json',
		async: true,
		type: 'get',
		success: function(data) {
			var a = Object.keys(data).sort();
			var b = data[a[0]];
			for (var i = 0; i < a.length; i++) {
				$('ul').append('<div>' + a[i] + '</div>');
				for (var j = 0; j < data[a[i]].length; j++) {
					$('ul').append(
						'<li>' + data[a[i]][j].name + '</li>');
				};
			};
		},
	});
};
normal();

function hot() {
	$.ajax({
		url: 'https://elm.cangdu.org/v1/cities?type=hot',
		// url:'http://10.10.12.170:333/liu',
		dataType: 'json',
		async: true,
		type: 'get',
		success: function(data) {
			var b = Object.values(data);
			for (let i = 0; i < b.length; i++) {
				$('ul').before(
					'<p>' + b[i].name + '</p>');
			};
		},
	});
};
hot();
