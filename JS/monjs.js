/*Ceci est la fonction officielle je l'ai changé pour pouvoir choisir la photo que l'on veut en dessous
function displayNextImage() {
	x = ( x === images.length - 1) ? 0 : x + 1;
	document.getElementById("actualite_picture").src = images[x];
	document.getElementById("actualite_link").src = link[x];
}
			
function displayPreviousImage(){
	x = (x <= 0) ? images.length - 1 : x - 1;
	document.getElementById("actualite_picture").src = images[x];
	document.getElementById("actualite_link").src = link[x];
}
			
function startTimer() {
	setInterval(displayNextImage, 5000);
}


var images = [], x = -1;
images[0] = "IMG/medhi_moussaid_conference.png";
images[1] = "IMG/fouloscopie_livre.png";
images[2] = "IMG/foule_mecque.jpg";

var link = [], x = -1;
link[0] = "https://www.youtube.com/watch?v=xNpryHiyb8g";
link[1] = "https://www.amazon.fr/Fouloscopie-que-foule-dit-nous/dp/2379310122";
link[2] = "https://oumma.com/la-mecque-un-tragique-mouvement-de-foule-a-fait-au-moins-717-morts-et-450-blesses/";*/

function displayNextImage() {
	x = ( x === images.length - 1) ? 0 : x + 1;
	document.getElementById("actualite_picture").src = images[x];
	document.getElementById("actualite_link").href = link[x];
}
			
function displayImage(n){
	document.getElementById("actualite_picture").src = images[n];
	document.getElementById("actualite_link").href = link[n];
	x = n
}
			
function startTimer() {
	setInterval(displayNextImage, 5000);
}


var images = [], x = -1;
images[0] = "https://i.ytimg.com/vi/ppSrAHoGwrI/maxresdefault.jpg";
images[1] = "IMG/fouloscopie_livre.png";
images[2] = "IMG/foule_mecque.jpg";
var link = [], x = -1;
link[0] = "https://www.youtube.com/watch?v=ppSrAHoGwrI";
link[1] = "https://www.amazon.fr/Fouloscopie-que-foule-dit-nous/dp/2379310122";
link[2] = "https://oumma.com/la-mecque-un-tragique-mouvement-de-foule-a-fait-au-moins-717-morts-et-450-blesses/";