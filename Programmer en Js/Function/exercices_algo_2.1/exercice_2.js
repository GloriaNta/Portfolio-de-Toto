/*
AUTOMATE NASDAQ

Nous avons comme mission de programmer l'automate du NASDAQ.
Celui-ci a pour objectif de traiter des ordres bancaires en continue.

Les ordres bancaires sont enregistrées dans un tableau comme suite :

[V,C, V,C, V,C ...]

- V: la valeur de l'ordre (Number)
- C: les opérations que nous devons appliquer à la valeur (String)

Voici les opérations possibles:

- MAX : arrondir à l'entier supérieur
- MIN : arrondir à l'entier inférieur
- XA1 : ajouter 12% de la valeur de l'ordre
- CZE : si la valeur est négative, la passer à zero
- NEG : passer la valeur en négatif
- TR4 : soustraire 1 à la valeur

A partir des données fournies (et non modifiables),
vous devez effectuer les opérations suivantes :

1 - Déclarez les 6 fonctions qui permettent d'effectuer chaque opération
2 - Déclarez la fonction run() qui permet de traiter les ordres.
3 - Affichez les ordres traités.
*/

const orders = [
	456.3,
	'XA1-MAX-TR4',
	112.1,
	'NEG-CZE',
	-3502.21,
	'CZE',
	41.09,
	'MIN-CZE',
	23541.77,
	'XA1-MIN-TR4-CZE',
	8741.99,
	'MAX-TR4-CZE',
	9104.89,
	'XA1-MAX-TR4',
	106.09,
	'MAX',
	401203.51,
	'TR4-XA1-MIN',
	-23.59,
	'CZE'
];
