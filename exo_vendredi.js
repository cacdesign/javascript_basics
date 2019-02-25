//Nombre de p
console.log("**********Nombre de p")

var elements_p = document.getElementsByTagName("p")
var elements_p2 = document.querySelectorAll("p")

console.log(elements_p.length)
console.log(elements_p2.length)


//Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
console.log("**********Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.")

var elements_coucou = document.getElementById("coucou").textContent
console.log(elements_coucou)


//Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
console.log("**********Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.")

var elements_url = document.querySelectorAll("a")[2]
console.log(elements_url.href)


//Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
console.log("**********Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.")
var elements_compte_moi = document.getElementsByClassName("compte-moi");
console.log(elements_compte_moi.length)


//Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
console.log("**********Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.")
var elements_li = document.querySelectorAll("li.compte-moi")
console.log(elements_li.length)

//Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
console.log("**********Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.")
var elements_li_ol = document.querySelectorAll("ol > li.compte-moi");
console.log(elements_li_ol)


//8
var huit = document.querySelectorAll("div > ul > li")[0].textContent
console.log(huit);