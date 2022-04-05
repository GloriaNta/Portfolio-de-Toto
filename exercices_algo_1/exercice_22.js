/*
E-SPORT
La grande finale va commencer, et la liste des participants doit être préparée.
Cependant, des changements de dernière minute doivent être effectués.

A partir des données fournies (et non modifiables),
vous devez réaliser les opérations suivantes :

1 - Classez la liste par ordre alphabétique
3 - Il faut rajouter 'arthur' après daphné
2 - Il faut rajouter 'rose' avant 'john'
4 - Pour faire la vérification, il faut commencer par la fin de la liste : inversée l'odre des participants.
5 - Les trois derniers participants sont sur la liste d'attente : créer un tableau pour eux.
6 - Afficher la liste des participants et la liste d'attente. 

*/

const { table } = require("console");

const participants = ['john', 'lilly', 'bo', 'gille', 'daphné', 'sandy'];

participants.sort();

participants.splice(5, 0, 'arthur');
participants.unshift('rose');

participants.reverse();

const liste_attente = participants.slice(-3);

console.log("la liste d'\attente est : \n - " + liste_attente.join('\n - '))
console.log('la liste finale est : \n - ' + participants.join('\n - '));