var greenhousegasUrl = 'https://raw.githubusercontent.com/WilliamTrojniak/williamtrojniak.github.io/master/UN%20Goals%20Site/data/greenhousegasemissions.json';
var powersourceconsumptionUrl = 'https://raw.githubusercontent.com/WilliamTrojniak/williamtrojniak.github.io/master/UN%20Goals%20Site/data/powersourceconsumption.json';

var powerGraphContainers = [document.getElementById("graph1"), document.getElementById("graph2")];


var gasGraphContainers = [document.getElementById("graph3"), document.getElementById("graph4")];
var gasGraphCountries;
var gasGraphPlaceInputs = [document.getElementById("graph3Place"), document.getElementById("graph4Place")];




function setupGasGraph(){
	$.getJSON(greenhousegasUrl, function(data){
		console.log(data);
		var unfilteredCountries = [];

		//Create an array with all the countries
		for(i = 0; i < data.length; i++){
			unfilteredCountries.push(data[i].Entity);
		}

		//Filter out duplicates
		gasGraphCountries = Array.from(new Set(unfilteredCountries));

		//Add options to both the year in selects for all countries
		for(t = 0; t < gasGraphPlaceInputs.length; t++){
			for(i = 0; i < gasGraphCountries.length; i++){
				var option = document.createElement("option");
				gasGraphPlaceInputs[t].appendChild(option);
				option.setAttribute("value", gasGraphCountries[i]);
				option.innerHTML = gasGraphCountries[i];

			}
		}


	});
}

function genGasGraph(){
	$.getJSON(greenhousegasUrl, function(data){
		console.log(data);
		cntr = 0;
		for(i = 0; i < data.length; i++){
			
		}


	});
}

setupGasGraph();