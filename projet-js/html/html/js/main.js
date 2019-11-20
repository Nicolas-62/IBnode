/*window.onload = function(){
	var e = document.getElementById("anime");
	var pas = 0;
	var animation = setInterval(function(){
		pas++;
		if(pas === 350){
			clearInterval(animation);
		}else{
			pas++;
			e.style.top = pas +"px";
			e.style.left = pas + "px";
		}

	}, 5);

}*/

var a = 5;
var b = 5;
console.log(b);

console.log(a+b);

var car = "peugeot";

switch (car){
	case "bmw":
		console.log("c'est une bmw");
		break;
	case "austin":
	case "peugeot":
		console.log("c'est une peugeot ou une austine");
		break;
	default :
	console.log("ce n'est pas une voiture");
}

var count = 1;

do{
console.log("count is now : "+ count);
count++;
}while(count <10)

var malist = ["car","boat","bike"];

for(var i = 0; i<malist.length; i++){
	console.log(malist[i]);
}

for(var i =0, listlength = malist.length; i < listlength; i++){

}

var person = {
	firstname: "john",
	lastname: "Doe",
	age: 25
}
for(var attribute in person){
	console.log(attribute + " : " + person[attribute]); // firstname : john, lastname : Doe, age : 25
}
var groupMembers = [ "Amanda","steve","john"];

for( var index in groupMembers){
	console.log(groupMembers[index]);
}