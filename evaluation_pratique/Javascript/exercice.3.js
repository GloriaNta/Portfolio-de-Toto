/*
ANAGRAMME

Une anagramme (le mot est féminin) est une construction fondée sur une figure de style qui inverse ou permute les lettres 
d'un mot ou d'un groupe de mots pour en extraire un sens ou un mot nouveau.
Il est sous-entendu que ce nouveau mot existe dans un dictionnaire.

https://fr.wikipedia.org/wiki/Anagramme

A partir de la liste de mot données, trouvez tout les anagrammes du mot "écran" et affichez les dans la console.

Note : Vous devez considérer les lettres é, è et ê comme la lettre "e"

*/

const words = [
  "entre",
  "ordre",
  "tinte",
  "étiré",
  "crane",
  "nacre",
  "roder",
  "sujet",
  "alése",
  "bayer",
  "vêcue",
  "rance",
  "itéré",
  "ancre",
  "tarte",
  "ardue",
  "nacer",
  "avare",
  "dorer",
  "argot"
];

/*
possibilité d'utiliser if mais trop répétitifs
*/

var anagramme = [];
var ecran = ['é', 'è', 'e', 'c', 'r', 'a', 'n'] /* TEST */


for (let i = 0; i < words.length; i++) {

  if (words[i].includes('é' || 'è' || 'e' + 'c' + 'r' + 'a' + 'n')) {
    ecran.forEach(letter => { ecran.push(words[i])}) /* TEST */
  }
};

console.log('les anagrammes du mot "écran" sont : ' + anagramme);