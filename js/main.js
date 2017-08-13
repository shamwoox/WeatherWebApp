$(document).ready(function() {
	
	var longitude;
	var latitude;
	var api;
	

	function getLocation() {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				latitude = position.coords.latitude;
				longitude = position.coords.longitude;
				api = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=683893b603f190c1856195dd78d1bdb0";
				console.log(latitude);
				console.log(longitude);
				
				$.getJSON(api, function(data) {
					var cityName = data.name;
					var country = data.sys.country;
					var weather = data.weather[0].description;
					var temp = ((1.8 * (data.main.temp - 273)) + 32).toFixed(2);
					$('#name').text("Location: " + cityName + ", " + country);
					$('#weather').text("Weather: " + weather);
					$('#temp').text("Temperature: " + temp + " Degrees Fahrenheit");
					
				});
			});
		};
	};
	getLocation();

	$("#searchZip").click(function() {
		var zip = $("#zip").val();
		var country = $('#country').val();
		
		api = "http://api.openweathermap.org/data/2.5/weather?zip="+zip+","+country+"&appid=683893b603f190c1856195dd78d1bdb0";
		$.getJSON(api, function(data) {
			
			var cityName = data.name;
					var country = data.sys.country;
					var weather = data.weather[0].description;
					var temp = ((1.8 * (data.main.temp - 273)) + 32).toFixed(2);
					$('#name').text("Location: " + cityName + ", " + country);
					$('#weather').text("Weather: " + weather);
					$('#temp').text("Temperature: " + temp + " Degrees Fahrenheit");
		})
		console.log(zip);
		
	});
	
	
});