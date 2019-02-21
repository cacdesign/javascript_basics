// Un prompt s'affiche avec la question suivante
nombre = prompt("De quel nombre veux-tu calculer la factorielle ?")
// Utilisateur rentre un nombre (par ex 4)
console.log("**********Calculons :")

var factoriel = 1
for(let count = 1; count <=nombre; count++){
  factoriel = count*factoriel
  console.log(`voici count : ${count}`);
  console.log(`voici factoriel : ${factoriel}`);
}





