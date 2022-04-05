/*
ANALYSE TEXTUELLE

Suite à notre bon travail sur l'analyse textuelle,
nous désirons créer un outil plus solide qui permette de facilement utiliser
notre programme d'analyse.

A partir des données fournies par l'utilisateur,
vous devez afficher afficher :

1 - Le nombre de fois ou chaque mot apparait
2 - Les 10 mots les plus utilisés

ATTENTION:
- Ce code nécessite le package 'prompts'
- Vous devez placer votre code à l'endroit indiqué
*/

const prompts = require('prompts');

(async function() {
	const response = await prompts({
		type: 'text',
		name: 'value',
		message: 'Quel est le texte à analyser ?'
	});

	const text = response.value;

	// ----- Votre code ici -----

	console.log(text);

	// --------------------------
})();
