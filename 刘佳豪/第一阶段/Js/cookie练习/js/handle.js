//添加cookie
function addNewCookie(key, value, time) {
	/**
	 * time
	 * 不填:默认
	 * 对象类型:expires
	 * 数字:max-age
	 * */
	if (typeof time == 'number') {
		document.cookie = key + '=' + value + ';max-age=' + time;
	} else if (typeof time == 'object') {
		document.cookie = key + '=' + value + ';expire=' + time.toString();
	} else {
		document.cookie = key + '=' + value;
	}
};

//通过key获取cookie里对应键值对的value
function getValueByKey(key) {
	var arr1 = document.cookie.split("; ");
	var cookieV = "";
	arr1.forEach(function(v){
		var arr2 = v.split("=");
		if (arr2[0] == key) {
			cookieV = arr2[1];
		}
	});
	return cookieV;
}
//删除cookie
function removeCookie(key) {
	document.cookie = key + '=;max-age=-1';
}
