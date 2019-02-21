nombre = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
  // Utilisateur rentre un nombre (par ex 5)

for(let step = 1; step <=nombre; step++){
  let space = nombre-step
  console.log(" ".repeat(space) + "#".repeat(step))
}
