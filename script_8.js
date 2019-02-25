var titresElts = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(titresElts[0]); // Affiche le premier titre h2
console.log(titresElts.length); // Affiche 3

// Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

// Elément portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles"));

// Tous les éléments fils de l'élément d'identifiant "antiques" ayant la classe "existe"
console.log(document.getElementById("antiques").getElementsByClassName("existe").length); // Affiche 1

// Tous les paragraphes
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe")); // Affiche 8

console.log((document.getElementById("antiques").innerHTML = "coucou"))


document.getElementById("test").style.color = "blue";




var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.querySelector("div ul[1]");
element.appendChild(para);