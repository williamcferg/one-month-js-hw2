
//1. Grab the input value!

var input = document.querySelector("input");
var inputVal0 = input.value;

document.querySelector("input").addEventListener('click', function(){ 
	var inputVal1 = document.querySelector("input").value;
	
	if(inputVal1 === inputVal0){input.value = "";}
	else {input.select();}
})

document.querySelector("button").addEventListener('click', function(e){
	var input = document.querySelector("input").value;
	queryGiphy(input);
})

document.querySelector(".js-userinput").addEventListener('keyup', function(e){
	var input = document.querySelector("input").value;
	if(e.which === 13){
	queryGiphy(input);
	}
	
})



//2. Query Giphy API!!

function queryGiphy(input){
	var key = "dc6zaTOxFJmzC";
	var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + key;
	console.log("API url: " + url);

	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open('GET', url);
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load', function(e){
		var data = e.target.response;
		pushToDOM(data);
	});
	document.querySelector(".searchtitle").innerHTML = input.toUpperCase() + " TV";

}



//3. Push to DOM

var timeouts = [];

function pushToDOM(input){
	var response = JSON.parse(input); 
	var imageUrls = response.data;
	var container = document.querySelector(".js-container");
	container.innerHTML = "";
	for(var i = 0; i < timeouts.length; i++){ 
		clearTimeout(timeouts[i]);
	}

	imageUrls.forEach(function(image){ 
		timeouts.push(setTimeout(function(){ 
			var imageURL = image.images.downsized_large.url;
			container.innerHTML = "<img src = \"" + imageURL + "\" class = \"container-image\">";
			}, imageUrls.indexOf(image) * 5000)); //
	});

}





