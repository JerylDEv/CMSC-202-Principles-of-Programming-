// Weather Update JS
var api_path = 'http://api.openweathermap.org/data/2.5/weather?q=';
var app_key = '&APPID=cd4b80ffa7a59f7415f0b8a62e2e141e';
var weatherUnit;
var inputCityName;
var weatherMessage;
var helloSample = document.getElementById('hello-sample');

// inputCityName = document.getElementById('city_name').value;
// weatherUnit = document.getElementById('weather_unit').value;
// var url = api_path + inputCityName + app_key + weatherUnit;
// var url = 'http://api.openweathermap.org/data/2.5/weather?q=Manila&APPID=cd4b80ffa7a59f7415f0b8a62e2e141e';

function displayWeather() {
	inputCityName = document.getElementById('city_name').value;
	weatherUnit = document.getElementById('weather_unit').value;
	var url = api_path + inputCityName + app_key + weatherUnit;

	// AJAX = Asynchronous JavaScript and XML
	// My goal is to use JavaScript and AJAX (technically, I can name it as AJAJ) to visit
	// the 'url' and download the JSON data on the fly so I can use it on the app.
	// The process of sending or receiving data on the fly without a page reload is known as AJAX.
	// Web browsers has a built in tool call 'XMLHttpRequest' that will establish the connection
	// between the 'url' and allows us to send or receive data.

	var myRequest = new XMLHttpRequest();
	// Now I'm ordering my app to 'get' data from the 'url'
	// myRequest.open('Get', url);
	myRequest.open('Get', url);
	// Now I'm defining my request
	myRequest.onload = function() {
		// By default, the browser is interpreting the data as plain text string.
		// Thus I need to tell the app to interpret the data as JSON that contains objects and arrays.
		var weatherData = JSON.parse(myRequest.responseText);
		// all weather data about the city
		console.log(weatherData);
		// temperature of the city
		console.log(weatherData.main.temp);
		// humidity of the city
		console.log(weatherData.main.humidity);
		// dataPresentation(weatherData);
		// dataPresentation(weatherData);
		displayWeatherDialog(weatherData);
	};
	// Now I'm sending my request.
	myRequest.send();
}

// Data Assembly Function
function dataPresentation(data) {
	// helloSample.insertAdjacentHTML('beforeend', 'testing123');
	var messageTest = data;
	var weatherUpdateDisplay = document.getElementById('jeryl');
	weatherUpdateDisplay.innerHTML = messageTest;
	// console.log(data);
	console.log(weatherUpdateDisplay);
	// weatherUpdateDisplay.innerHTML = messageTest;
	// displayWeatherDialog();
}

// I'm creating another function to display data through a dialog box.
function displayWeatherDialog(data) {
	// Refer to the Template ID
	var dialog = document.getElementById('weather-update-dialog-id');

	var jerylTest = document.getElementById('jeryl');
	jerylTest.innerHTML = 'hello world!';
	// var messageTest = data;
	// var weatherUpdateDisplay = document.getElementById('jeryl');
	// weatherUpdateDisplay.innerHTML = messageTest;

	if (dialog) {
		dialog.show();
	} else {
		ons.createElement('weather-update-dialog-template.html', { append: true }).then(function(dialog) {
			dialog.show();
		});
	}
}
