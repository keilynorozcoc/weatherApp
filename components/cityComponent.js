class CityComponent{

    constructor(model, parent){
		console.log(model.city.name, model.city.country);
		this.model = model;
		this.parent = document.getElementById('citiesContainer');

        //Create Elements
        this.cityContainer = document.createElement('div');
		this.name = document.createElement('h3');
		this.country = document.createElement('p');

		//Add Elements
	
		this.cityContainer.appendChild(this.name);
		this.cityContainer.appendChild(this.country);
        this.cityContainer.className = 'cityContainer';
		this.parent.appendChild(this.cityContainer);
		//Fill Element
		this.name.innerText = 'Name:  ' + model.city.name;
		this.country.innerText = 'Country:  ' +  model.city.country;
 
    }
    
}