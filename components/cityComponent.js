class CityComponent{

    constructor(model, parent){
	
		this.model = model;
		this.parent = document.getElementById('citiesContainer');

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
		this.name.innerText = 'Name:  ' + model.city.name;
		this.country.innerText = 'Country:  ' +  model.city.country;

		this.cityContainer.onclick = this.cityContainerBtnClick;

	}
	cityContainerBtnClick() {
        console.log('Show Add Comment UI');

    }
    
}