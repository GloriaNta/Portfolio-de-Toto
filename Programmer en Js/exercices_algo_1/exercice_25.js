/*
SECURITE INFORMATIQUE

Les serveurs de la Team B ont été compromis.

A partir des données fournies (et non modifiables),
vous devez retrouver et afficher l'adresse IP du hacker qui s'est introduit sur leur réseau.
Pour se faire, nous avons les informations suivantes :

- Le piratage s'est passé le 07-09-2017
- Le pirate a modifié le fichier 'access.inf'
- Il s'est identifié sous le login 'hooper'
- La somme des données transférés est de 10 ko

*/

const ip_address = [
	'231.226.224.62',
	'180.237.8.195',
	'110.238.144.152',
	'54.204.186.244',
	'106.170.89.232',
	'35.162.62.130',
	'211.37.223.46',
	'213.186.33.16',
	'52.36.109.75',
	'44.35.73.26'
];
const dates = [
	'06-09-2017',
	'06-09-2017',
	'07-09-2017',
	'07-09-2017',
	'07-09-2017',
	'07-09-2017',
	'07-09-2017',
	'07-09-2017',
	'08-09-2017',
	'08-09-2017'
];

const login = ['shazam', 'hooper', 'shazam', 'kingston', 'shazam', 'vador', 'shazam', 'hooper', 'hooper', 'kingston'];

const file_edited = [
	'access.inf',
	'logo.png',
	'score.doc',
	'access.inf',
	'access.inf',
	'logo.png',
	'match.xls',
	'access.inf',
	'score.doc',
	'access.inf'
];
const transfered_ko = [[2, 5, 3], [1, 4, 1, 3], [3, 1, 8], [8, 2, 1], [5, 5, 1], [6, 6, 1], [2, 2, 6], [1, 5, 4], [3, 3, 3], [1, 7, 3]];
