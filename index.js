window.addEventListener('load', init, false);
function init() {
	// console.log('App running!');
	//1. Declare variables
	 var dataManager = new DataManager();

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

			data.forEach(e => {
				var cityData = e;	
							
				dataManager.cities.push(cityData);
				dataManager.setCurrentCity(cityData);

				var cityComponent = new CityComponent(cityData, dataManager);
			});

			}
			else {
				console.log('Server Error');
			}
		}
	}
}