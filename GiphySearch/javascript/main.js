
// 1. grab the input value

document.querySelector(".js-go").addEventListener('click', function(){

	var input = document.querySelector("input").value;
		pushToAPI(input);



});

document.querySelector(".js-userinput").addEventListener('keyup', function(e){

	var input = document.querySelector("input").value;

	if(e.which === 13) {
		pushToAPI(input);
	}

});



// 2. do the data stuff with the API

function pushToAPI(input) {

	var url = "http://api.giphy.com/v1/gifs/search?q="+ input +"&api_key=dc6zaTOxFJmzC"

	console.log(url);

	//AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open('Get', url);
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load', function (e) {
			
		var data = e.target.response;
		pushToDOM(data);

	});

}



//3. return and show the GIFs

function pushToDOM(data) {

	var container = document.querySelector(".js-container");

	var response = JSON.parse(data);

	var imageUrls = response.data;

	container.innerHTML = "";

	imageUrls.forEach(function(image){

	var gifUrl = image.images.fixed_height.url;

	container.innerHTML += "<img src=\"" + gifUrl + "\" class=\"container-image\">";	

	});
}






