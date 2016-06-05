$(document).ready(function() {
	var long;
	var latitude;
	var location;
	var encodedLat;
	var encodedLong;
	$.get("http://ipinfo.io", function(response) {
			location = response.loc.split(',');
			latitude = location[0];
			long = location[1];

			$.get("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + long + "&appid=a81e586ba64fbea6c9129410329f4a3a", function(result) {
					JSON.stringify(result);
					console.log(result);
					$("#city").text(result.name);
					$("#temperature").text(result.main.temp);
					$("#weatherDescription").text(result.weather[0].main);
					$("#country").text(result.sys.country);
					$("#icon").attr("src", "http://openweathermap.org/img/w/" + result.weather[0].icon + ".png");
					//http://openweathermap.org/img/w/10d.png
					celsius = Math.round(result.main.temp - 273.15);
					fahrenheit = Math.round(result.main.temp * 9 / 5 - 459.67);
					$("#temperature").text(celsius);
					var weatherDescription = result.weather[0].main;
if (weatherDescription === "Clear") {
$(".container").css('background-image', 'url(images/sun.jpg)');
				}
				else if(weatherDescription === "Clouds"){
$(".container").css('background-image', 'url(images/clouds.jpg)');

				}

						else if(weatherDescription === "Snow" || weatherDescription === "snow"){
$(".container").css('background-image', 'url(images/snow.jpg)');

				}

						else if(weatherDescription === "Rain" || weatherDescription === "rain"){
$(".container").css('background-image', 'url(images/rain.jpg)');

				}
				else{
					$(".container").css('background-image', 'url(images/default.jpg)');

				}



				}


		);


		encodedLat = encodeURI(latitude); encodedLong = encodeURI(long); console.log("http://api.openweathermap.org/data/2.5/weather?lat=" + encodedLat + "&lon=" + encodedLong + "&appid=a81e586ba64fbea6c9129410329f4a3a");

		console.log("long: " + long + " lat: " + latitude);



	}, "jsonp");
// alert(demo);
// alert(myDemo.location.latitude);
var preferredDegKind = $.cookie("preferredDegKind");

var weatherData;
var celsius;
var fahrenheit;
var isC;

var myUrl = "http://api.openweathermap.org/data/2.5/weather?lat="; myUrl += latitude; myUrl += "&lon"; myUrl += long; myUrl += "&appid=a81e586ba64fbea6c9129410329f4a3a";

if (preferredDegKind == null || preferredDegKind === "C") {
	$("#degreeKind").text('C');
	$("#temperature").text(celsius);
	isC = true;
} else if (preferredDegKind === "F") {
	$("#degreeKind").text('F');
	$("#temperature").text(fahrenheit);
	isC = false;
}

$("#degreeKind").text = preferredDegKind;

$("#degreeKind").click(function() {
	if (isC) {
		$(this).text('F');
		$("#temperature").text(fahrenheit);
		isC = false;
	} else if (!isC) {
		$(this).text('C');
		$("#temperature").text(celsius);
		isC = true;
	}

});

});
