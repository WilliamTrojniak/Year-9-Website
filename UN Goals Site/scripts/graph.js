var staticUrl1 = "https://raw.githubusercontent.com/WilliamTrojniak/williamtrojniak.github.io/master/UN%20Goals%20Site/data/energy.json";
var staticUrl2 = "https://raw.githubusercontent.com/WilliamTrojniak/williamtrojniak.github.io/master/UN%20Goals%20Site/data/data.json";

var graphs = [document.getElementById("graph1"), document.getElementById("graph2"), document.getElementById("graph3"), document.getElementById("graph4")];

var graph1TypeSelects = [document.getElementById("graph1SelectGraph"), document.getElementById("graph2SelectGraph")];
var graph1YearIns = [document.getElementById("yearIn1"), document.getElementById("yearIn2")];
var headerYears = document.getElementsByClassName("year");
var headerOvertimes = document.getElementsByClassName("overtime");

var regions = ["Global: ", "African Region: ", "Americas: ", "Eastern and Mediterranean Region: ", "European Regions: ", "South-East Asia Regions: ", "Western Pacific Region: ", "High Income Countries: "];



function graph1(){
	generateGraphs(1);
}

function graph2(){
	generateGraphs(2);
}

function graph3(){
	generateGraphs(2);
}

function graph4(){
	generateGraphs(3);
}

function generateGraphs(slideIndex){

	for(t = 0; t < graphs.length; t++){
		while (graphs[t].getElementsByClassName("graphVisElement").length > 0) {
            graphs[t].removeChild(graphs[t].childNodes[2])
    	}
	}
	

	if(slideIndex == 1){
		generateGraph1(0);
	}else if(slideIndex == 2){
		generateGraph1(1);
		generateGraph2(2);
	}else{
		generateGraph2(3);
	}


}

function generateGraph1(graphIndex){
	var width = graphs[graphIndex].clientWidth;
	var yearIn = graph1YearIns[graphIndex].value;


	$.getJSON(staticUrl1, function(data) {

		for(i = 0; i < graph1YearIns.length; i++){
			for(t = 1; t < data.length; t++){
				var option = document.createElement("option");
				graph1YearIns[i].appendChild(option);
				option.setAttribute("value", data[t].year);
				option.innerHTML = data[t].year;
			}
		}


		if(graph1TypeSelects[graphIndex].value == "year"){
			for(i = 0; i < data.length; i++){
				if(yearIn == data[i].year){
					prodData = [data[i].data.production.biomass, data[i].data.production.coal, data[i].data.production["crude oil"], data[i].data.production["fossil fuels"], data[i].data.production.geothermal, data[i].data.production.hydroelectric, data[i].data.production["natural gas"], data[i].data.production.nuclear, data[i].data.production.solar, data[i].data.production.wind];
					prodNames = ["Biomass: ", "Coal: ", "Crude Oil: ", "Fossil Fuels: ", "Geothermal: ", "Hydroelectric: ", "Natural Gas: ", "Nuclear: ", "Solar: ", "Wind: " ]
					prodDataColours = ["darkgreen", "pink", "gray", "brown", "red", "cyan", "orange", "green", "blue", "lightblue"];


					var largest = prodData[0];
					for(t = 0; t < prodData.length; t++){
						if(largest < prodData[t]){
							largest = prodData[t];
						}
					}


					for(t = 0; t < prodData.length; t++){
						var div = document.createElement("div");
		            	graphs[graphIndex].appendChild(div);
		            	div.setAttribute("class","graphVisElement");
		            	div.setAttribute("id","div"+t);

		            	percentage = prodData[t]/largest * 0.95;
		            	percentage = percentage * graphs[graphIndex].clientWidth;


		            	div.style.width = percentage + "px";  
		            	document.getElementById("div"+t).style.backgroundColor = prodDataColours[t];

		            	if(percentage == 0){
		            		document.getElementById("div"+t).style.backgroundColor = "transparent";
		            	}


		            	var p = document.createElement("p");        
		            	document.getElementById("div"+t).appendChild(p);                
		            	p.setAttribute("id","p"+t);
		            	p.innerHTML = "<pre>" + prodNames[t]+prodData[t]+ "</pre>";

		            	 
					}
	            
				}
			}

			
		}else{
			var barWidth = (graphs[graphIndex].clientWidth-5)/data.length;
			for(i = 0; i < data.length; i++){
				percentOfRenewableEnergy = data[i].data.production["total renewable"] / data[i].data.production.total;
				var div = document.createElement("div");
            	graphs[graphIndex].appendChild(div);
            	div.setAttribute("class","graphVisElement");
            	div.setAttribute("id","div"+i);

            	percentage = percentOfRenewableEnergy * graphs[graphIndex].clientHeight;


            	div.style.height = percentage + "px";  
            	document.getElementById("div"+i).style.backgroundColor = "green";
            	document.getElementById("div"+i).style.width = barWidth + "px";
            	document.getElementById("div"+i).style.margin = "0px";
            	document.getElementById("div"+i).style.padding = "0px";
            	document.getElementById("div"+i).style.display = "inline-block";
            	document.getElementById("div"+i).style.marginTop = (graphs[graphIndex].clientHeight-100) * (1 - percentOfRenewableEnergy) + "px";
            	document.getElementById("div"+i).style.borderRadius = "2px 2px 0px 0px";

            	if(percentage == 0){
            		document.getElementById("div"+i).style.backgroundColor = "transparent";
            	}



			}

			var div = document.createElement("div");
        	graphs[graphIndex].appendChild(div);
        	div.setAttribute("class","graphVisElement");
        	div.setAttribute("id","bottom");
        	div.style.height = "34px";
        	div.style.padding = "2px";
        	div.style.backgroundColor = "gray";
        	div.style.marginTop = "-4px";
        	div.style.borderRadius = "0px 0px 5px 5px";
        	div.style.borderBottom = "2px solid black";
        	div.style.textAlign = "center";
        	div.innerHTML = "<p>1949 - 2014</p>";

        	for(i = 10; i > 0; i--){
        		var fifty = document.createElement("div");
        		graphs[graphIndex].appendChild(fifty);
        		fifty.setAttribute("class","graphVisElement");
        		fifty.style.height = "2px";
        		fifty.style.padding = "0px";
        		fifty.style.backgroundColor = "black";
        		fifty.style.marginTop = (-(graphs[graphIndex].clientHeight-100)/10)*i-50+"px";
        		fifty.style.textAlign = "center";
        		fifty.style.position = "absolute";
        		fifty.innerHTML = "<p>"+(i)*10+"%</p>";
        	}

        	
		}
	});

}

function generateGraph2(graphIndex){
	var width = graphs[graphIndex].clientWidth;
	$.getJSON(staticUrl2, function(data){
		console.log(data);
		var largest = data.fact[0].Value;
		for(i = 0; i < data.fact.length; i++){
			if(data.fact[i].dims.GHO == "Climate change attributable deaths"){
				if(largest < data.fact[i].Value){
					largest = data.fact[i].Value;
				}

			}
		}

		maxWidth = graphs[graphIndex].clientWidth * 0.95;
		barHeight = (graphs[graphIndex].clientHeight - 60)/8;

		ctr = 0;
		for(i = 0; i < data.fact.length; i++){
			if(data.fact[i].dims.GHO == "Climate change attributable deaths"){
				var div = document.createElement("div");
            	graphs[graphIndex].appendChild(div);
            	div.setAttribute("class","graphVisElement");
            	div.setAttribute("id","div"+i);

            	newWidth = (data.fact[i].Value / largest) * maxWidth;

            	document.getElementById("div"+i).style.width = newWidth + "px";
            	document.getElementById("div"+i).style.backgroundColor = "red";
            	document.getElementById("div"+i).style.height = barHeight+ "px";

            	var p = document.createElement("p");        
            	document.getElementById("div"+i).appendChild(p);                
            	p.setAttribute("id","p"+i);
            	p.innerHTML = "<pre>" + regions[ctr] + data.fact[i].Value + "</pre>";
            	ctr++;

			}
		}
	});
}

function changeMenuBar1(){
		graph1();
		if(graph1TypeSelects[0].value == "year"){
			graph1YearIns[0].style.display = "inline";
		}else{
			graph1YearIns[0].style.display = "none";
		}
		updateTitle(0);
		
}

function changeMenuBar2(){
		graph2();
		if(graph1TypeSelects[1].value == "year"){
			graph1YearIns[1].style.display = "inline";
		}else{
			graph1YearIns[1].style.display = "none";
		}
		updateTitle(1);
}

function updateTitle(index){
	if(graph1TypeSelects[index].value == "year"){
			for(i = 0; i < headerYears.length; i++){
				headerYears[i].style.display = "block";
				headerOvertimes[i].style.display = "none";
			}
	}else{
			for(i = 0; i < headerYears.length; i++){
				headerYears[i].style.display = "none";
				headerOvertimes[i].style.display = "block";
			}
	}
}


graph1TypeSelects[0].addEventListener("change", changeMenuBar1);
graph1TypeSelects[1].addEventListener("change", changeMenuBar2);



graph1YearIns[0].addEventListener("change", graph1);
graph1YearIns[1].addEventListener("change", graph2);

graph1();