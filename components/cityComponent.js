class CityComponent extends Component {

    constructor(model, dataManager){
        super(model, dataManager);
		this.parent = document.getElementById('citiesContainer');
		// console.log(this.dataManager);
		console.log(model);


        //Create Elements
        this.cityContainer = document.createElement('button');
		this.name = document.createElement('h3');
		this.country = document.createElement('p');

		//Add Elements
		this.cityContainer.className = 'cityContainer';	
		this.cityContainer.appendChild(this.name);
		this.cityContainer.appendChild(this.country);
		this.parent.appendChild(this.cityContainer);

		//Fill Element
		this.name.innerText = model.city.name;
		this.country.innerText = 'Country:  ' +  model.city.country;

		this.cityContainer.onclick = this.cityContainerBtnClick.bind(this);
	}

	cityContainerBtnClick(e) {
		console.log(e.target);
		this.dataManager.setCurrentCity(this.model);

		var weatherComponent = new WeatherComponent(this.model);

    }
    
}