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

const participants = ['john', 'lilly', 'bo', 'gille', 'daphné', 'sandy'];

// Liste par ordre alphabétique
participants.sort();

//Rajouter Arthur
participants.splice(5, 0,"arthur");

//Rajouter Rose
participants.unshift("rose");

// Inverser l'order des participants
participants.reverse();

// Liste d'attente
const liste_attente = participants.splice(-3, 3);
// "-" dans splice permet de partir de la fin du tableau


// Listes des participants
console.log("Les participants sur liste d'attente sont : " + "\n- " + liste_attente.join("\n- "));
console.log("La liste de participants sont : " + "\n- " + participants.join("\n- "));