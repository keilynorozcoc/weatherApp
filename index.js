window.addEventListener('load', init, false);

function init() {
	// console.log('App running!');
	//1. Declare variables

	// var citiesContainer = document.getElementById('citiesContainer');
	// var weatherContainer = document.getElementById('weatherContainer');

	//2. Initialize variables
	
	//3. Program Logic
	loadWeather();

	function loadWeather() {
		var request = new XMLHttpRequest();
		request.open('GET', './data/weather.json', true);
		request.onreadystatechange = loadWeatherCallback;
		request.send();
	}

	function loadWeatherCallback(e) {
		var request = e.target;

		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var data = JSON.parse(request.responseText);


				// cityData = new City(data.name, data.country, null);

				// var cityComponent = new CityComponent(cityData, citiesContainer);

				// console.log(data);

			data.forEach(e => {
				var weatherData = e;
				var cityData = e;

				// console.log(e);
				// console.log(weatherData.time, 
				// 		weatherData.main.temp, 
				// 		weatherData.main.pressure, 
				// 		weatherData.main.humidity,
						// weatherData.weather.main,
						// weatherData.weather.description
					// );

				// console.log(cityData.city.name, cityData.city.country);
				

				var cityComponent = new CityComponent(cityData);
				

				var weatherComponent = new WeatherComponent(weatherData);

				
			});

				// for(var key in data){
				// 	var weatherData = data[key];
				// 	var cityData = data[key];

				// 	var cityData = new CityComponent(cityData.city.name, 
				// 						cityData.city.country);
				// 	console.log(cityData);
					
				// 	var weather = new WeatherComponent(weatherData.time, 
				// 							weatherData.main.temp, 
				// 							weatherData.main.pressure, 
				// 							weatherData.main.humidity, 
				// 							weatherData.weather.main, 
				// 							weatherData.weather.description);

				// }
			}
			else {
				console.log('Server Error');
			}
		}
	}
}