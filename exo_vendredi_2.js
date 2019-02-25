//Modif 1

function changeTitle(){
	x = document.querySelector("h1")
	x.innerHTML = "Ce que j'ai appris à THP"
	console.log(x)
	y = document.querySelector("p.lead")
	y.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
	console.log(y)

}

changeTitle();



//Modif 2

function changeCallToActions(){
	x = document.querySelector("a.btn-primary")
	x.innerHTML = "OK je veux tester !"
	console.log(x)
	x.setAttribute("href", "http://www.thehackingproject.org")
	console.log(x.href)

	y = document.querySelector("a.btn-secondary")
	y.innerHTML = "Non Merci"
	console.log(x)
	y.setAttribute("href", "https://www.pole-emploi.fr/accueil/")
	console.log(y.href)

}

changeCallToActions();



//Modif 3

function changeLogoName(){
	x = document.querySelector("strong")
	x.innerHTML = "The THP Experience"
	console.log(x)
	x.style.size = "2em";

}

changeLogoName();



//Modif 4

let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

function populateImages(){
	x = document.querySelectorAll("img.card-img-top")
	console.log(x)

		for(i=0; i < imagesArray.length; i++){
		x[i].setAttribute("src", imagesArray[i])
		}

}

populateImages();



//Modif 5


function deleteLastCards(){
	x = document.querySelectorAll("img.card-img-top")
	console.log(x)
	
		for(i=0; i < 3; i++){
		console.log(x[8-i].parentNode.remove())
		}

}

deleteLastCards();




//Modif 6


function changeCardsText(){
	x = document.querySelectorAll("p.card-text")
	x[0].innerHTML = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
	x[1].innerHTML = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
	x[2].innerHTML = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."

	console.log(x)

}

changeCardsText();



//Modif 7


function changeViewButtons(){
	x = document.querySelectorAll("button.btn-outline-secondary")
	
	console.log(x)
			for(i=0; i < 12; i++){
		x[i].setAttribute("class", "btn btn-success")
		}

}

changeViewButtons();



//Modif 8


function changeViewButtons(){
	var division = document.createElement("div");
	division.classList.add("row");
	console.log(division);

	division_sup = document.querySelectorAll("div.bg-light")[0].childNodes[1].childNodes[1]
	division_sup.appendChild(division);
	console.log(division_sup);

	third_card = document.querySelectorAll("div.bg-light")[0].childNodes[1].childNodes[1].childNodes[5]
	console.log(third_card);
	division_sup.appendChild(third_card);



	/*
	var node = document.createTextNode("This is new.");
	para.appendChild(node);

	var element = document.getElementById("div1");
	element.appendChild(para);
	*/
}

changeViewButtons();