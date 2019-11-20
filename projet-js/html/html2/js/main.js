function getArea(){
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    return width * height;
}

var $btn = document.getElementById("btn");
$btn.onclick = function(event) {

    event.preventDefault();
    console.log("area : " + getArea());
    document.getElementById("result").value = getArea();
}
$btn.onmouseover = function(){
    this.style.backgroundColor = "black";
    this.style.color = "white";
    this.style.cursor = "pointer";
}
var defaultBackgroundColor = document.getElementById("btn").style.backgroundColor;
var defaultColor = document.getElementById("btn").style.color;
$btn.onmouseleave = function(){
    this.style.backgroundColor = defaultBackgroundColor;
    this.style.color = defaultColor;
    this.style.cursor = "default";
}
var cars = ["peugeot","bmw","renault"];


console.log("cars : "+cars);
console.log("splice : "+cars.splice(2, 1));// supprime 1 element à partir du deuxième
console.log("cars après splice : "+cars);

var cars = ["peugeot","bmw","renault"];
console.log("cars : "+cars);
console.log("slice : "+cars.slice(0, 1)); // récupère de 0 à 1 exclu
console.log("cars après slice : "+cars);

