const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];



console.log(books)




// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
console.log("**********Est-ce que tous les livres ont été au moins empruntés une fois ?")

var rented = true

for(var index in books){

	if(books[index].rented == 0){
		rented = false;
	}
}

console.log(rented)



//Quel est livre le plus emprunté ?
console.log("**********Quel est livre le plus emprunté ?")

var more_rented = books[0]

for(var index in books){

	if(books[index].rented > more_rented.rented){
		more_rented = books[index];
	}
}

console.log(more_rented)



//Quel est livre le moins emprunté ?
console.log("**********Quel est livre le moins emprunté ?")

var less_rented = books[0]

for(var index in books){

	if(books[index].rented < less_rented.rented){
		less_rented = books[index];
	}
}

console.log(less_rented)



//Trouve le livre avec l'ID: 873495'
console.log("**********Trouve le livre avec l'ID: 873495")

var book =[]

for(var index in books){

	if(books[index].id == 873495){
		book = books[index];
	}
}

console.log(book)



//Supprime le livre avec l'ID: 133712
console.log("**********Supprime le livre avec l'ID: 133712")

for(var index in books){

	if(books[index].id == 133712){
		books.splice(index, 1);
	}
}

console.log(books)



//Trie les inventeurs par ordre alphabétique du nom de famille
console.log("**********Trie les inventeurs par ordre alphabétique du nom de famille")

var arr = []

for(var index in books){
	arr.push(books[index].title)
}

console.log(arr.sort())
