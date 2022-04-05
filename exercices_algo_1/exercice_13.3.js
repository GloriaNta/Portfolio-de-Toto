/*
VOYAGE A LA CONVENTION DES DEVELOPPEURS
Afin de préparer notre voyage, nous avons besoins d'effectuer quelques calcules.
A partir des données fournies (et non modifiables),
vous devez calculer et afficher les informations suivantes :

1 - La distance Paris -> Varsovie
Nous prendrons un train de Varsovie à Moscou
2 - La distance Moscou -> Paris
*/

const paris_berlin = 1055;
const berlin_moscou = 1824;
const berlin_varsovie = 579;
const moscou_varsovie = 1257;

const Paris_varsovie =(paris_berlin + berlin_moscou + moscou_varsovie);
console.log("La distance Paris -> Varsovie est de " + Paris_varsovie + " km");

const Moscou_paris =(berlin_moscou + paris_berlin);
console.log("La distance Moscou -> Paris est de " + Moscou_paris + " km");
