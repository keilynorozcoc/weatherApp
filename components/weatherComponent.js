class WeatherComponent{
	constructor(model, parent) {
		console.log(model.time, 
					model.main.temp, 
					model.main.pressure, 
					model.main.humidity, 
					// model.weather.main, 
					// model.weather.description
				);
				
		this.model = model;
		this.parent = document.getElementById('weathersContainer');
        
        //Create Elements
        this.weatherContainer = document.createElement('div');
		this.time = document.createElement('h3');
        this.temp = document.createElement('p');
		this.pressure = document.createElement('p');
		this.humidity = document.createElement('p');
		this.weather = document.createElement('p');
		this.description = document.createElement('p');

		//Add Elements
		this.parent.appendChild(this.weatherContainer);
		this.weatherContainer.appendChild(this.time);
        this.weatherContainer.appendChild(this.temp);
		this.weatherContainer.appendChild(this.pressure);
		this.weatherContainer.appendChild(this.humidity);
		this.weatherContainer.appendChild(this.weather);
		this.weatherContainer.appendChild(this.description);        

        this.weatherContainer.className = 'weatherContainer';

		//Fill Element
		this.time.innerText = 'Time:  ' + model.time;
        this.temp.innerText =  'Temp:  ' + model.main.temp;
		this.pressure.innerText = 'Pressure:  ' +  model.main.pressure;
		this.humidity.innerText = 'Humidity:  ' + model.main.humidity;
		// this.weather.innerText = model.weather;
		// this.description.innerText = model.weather.description;

        
	}
}