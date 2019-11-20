//dowait();
// alert("coucou");
/*var none = prompt("type your name");
Doucment.write(none);*/
var p1 = document.getElementById("p1");
p1.innerHTML = "content from javascript";

var createdTag = document.createElement("p");
createdTag.innerHTML = "new content from js";
document.getElementById("main").appendChild(createdTag);

var newElement = document.createElement("p");
newElement.innerHTML = "new content from new element";
newElement.setAttribute("data-count", 1);
document.getElementsByTagName("body")[0].appendChild(newElement); // appendChild : après le dernier enfant



function dowait(){
	setTimeout(function(){
		alert("time's up !");
	}, 5000);
}

var listItem = document.getElementsByTagName("li");
console.log("we have " + listItem.length , "elements");

var images = [
"https://www.ouestfrance-immo.com/photo-vente-maison-saint-mars-d-outille-72/207/maison-a-vendre-saint-mars-d-outille-13553399_1_1544113633_354792db95f142e420df9336e5246fb9.jpg",
"https://medias.maison-natilia.fr/images/news/view-full/finitions-exterieures-pour-une-maison-ossature-bois.jpg",
"https://www.maisons-moyse.fr/typo3temp/_processed_/csm_slide2_3fdeabc763.jpg"
];

var index = 0;
var $visual = document.getElementById("visual");

function changerSource(){
	$visual.setAttribute("src", images[index]);
	index++;
	if(index >= images.length){
		index = 0;
	}
}
setInterval(changerSource, 3000);