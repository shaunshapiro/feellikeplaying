window.getRandomGame = function() {
	var h2Element = $('h2');
	var randomGame = Math.floor((Math.random() * 50000) + 1);
	var gameId = "3030-" + randomGame;

	$.ajax({    		
		url: "https://www.giantbomb.com/api/game/" + gameId + "/",
		dataType: "jsonp",
		jsonp: 'json_callback',
		type: "get",
		data: {  api_key: gon.giantbomb, format: "jsonp", field_list: name },
		success: gamer   
	});	

	function gamer(data) {
		var gameName = data.results.name;
		var gameUrl = data.results.site_detail_url
		var resultStr = '<a href="' + gameUrl + '">' + gameName + '</a>';	
		h2Element.html(resultStr);
	}
	return h2Element;
};