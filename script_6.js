const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', Gates: 'Newton', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
console.log("**********Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")

var entrepreneurs_1970 = []

for (var index in entrepreneurs){

	if (entrepreneurs[index].year > 1969){
		entrepreneurs_1970.push(entrepreneurs[index])
	}
}

console.log(entrepreneurs_1970)



// Sors une array qui combine le prénom et le nom des entrepreneurs
console.log("**********Sors une array qui combine le prénom et le nom des entrepreneurs")


function name(first, last) {
  console.log(first + " " + last);
}

for (var index in entrepreneurs){
	name(entrepreneurs[index].first, entrepreneurs[index].last)
}



// Quel âge aurait chaque inventeur aujourd'hui ?
console.log("**********Quel âge aurait chaque inventeur aujourd'hui ?")


for (var index in entrepreneurs){
	entrepreneurs[index].age = 2019 - entrepreneurs[index].year
	console.log(entrepreneurs[index].first + " a " + entrepreneurs[index].age + " ans.")
}



//Trie les inventeurs par ordre alphabétique du nom de famille
console.log("**********Trie les inventeurs par ordre alphabétique du nom de famille")

let arr=[]

for (var index in entrepreneurs){
	arr.push(entrepreneurs[index].last)
}

console.log(arr.sort())





