/*
LES ILES

Une carte sous forme de tableau à deux dimensions est à notre disposition,
avec la lettre 'X' pour désigner la présence de terre, et '-' pour désigner la présence d'eau.

Vous devez déterminer et afficher dans la console le nombre d'iles présentes.

Conseil du capitaine : N'hésitez pas à utiliser des fonctions pour automatiser certaines tâches.
*/

const map = [
  "----------",
  "---X---X--",
  "-X--------",
  "---X----X-",
  "----------",
  "----X-----"
];


let terre = [];

for(let i = 0; i < map.length; i++){
  if(map[i].includes("X")) {
    terre.push(map[i])
  }
}

let iles = terre.join("");

let nbIles = iles.split("X");

console.log((nbIles.length - 1) + " îles sont présentent.");