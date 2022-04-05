/*

Construction de l'alphabet crypté

Pour cette seconde séance du club du chiffre, toute l’équipe est mis à contribution afin de développer un chiffre de César plus solide.

Le club part de cette citation de Auguste Kerckhoffs (https://fr.wikipedia.org/wiki/Auguste_Kerckhoffs) :

    “La sécurité d’un système de chiffrement ne soit pas dépendre de la préservation du secret de l’algorithme. La sécurité ne repose que sur le secret de la clef”

Il est donc décidé de fabriquer le décalage des lettres - non pas à partir d’un nombre comme le ROT13 - mais à partir d’une clé secrète qui sera un mot.

L’alphabet crypté commencera par ce mot dont les lettres sont unique, et sera suivie par le reste de l’alphabet.

Notre clé sera le mot MULTIMEDIA.

1er étape : on retire les lettres en doublon pour que chaque lettre soit unique : MULTIEDA

2eme étape : on place le reste des lettres dans l’ordre de l’alphabet. Notre alphabet crypté sera donc : MULTIEDABCFGHJKNOPQRSVWXYZ

A vous de jouer ! Votre but est d’écrire le code qui permet d’afficher un alphabet crypté à partir d’une clé donnée.  

*/


const secret_key = "MULTIMEDIA";

// écrivez votre code ici

console.log("Voici l'aphabet chiffré ...");