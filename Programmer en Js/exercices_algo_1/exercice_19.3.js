/*
QUIZZ
5 questions sont posées à l'utilisateur.

A partir des données fournies par l'utilisateur,
vous devez afficher les informations suivantes :

- Le score de l'utilisateur (1 bonne réponse = 1 point)
- Une appréciation pour les score de 0 et 3
- Un encourragement pour les scores intermédiaires

ATTENTION:
- Ce code nécessite le package 'prompts'
- Vous devez placer votre code à l'endroit indiqué
*/

const prompts = require('prompts');

(async function() {
	const request = [
		{
			type: 'text',
			name: 'r1',
			message: `En quelle année a été créé Javascript ?`
		},
		{
			type: 'text',
			name: 'r2',
			message: `Quel est le prénom du créateur de Javascript ?`
		},
		{
			type: 'text',
			name: 'r3',
			message: `En quelle année a été créé Node.js ?`
		}
	];

	const answers = await prompts(request);

	const reponse_1 = answers.r1;
	const reponse_2 = answers.r2;
	const reponse_3 = answers.r3;

	// ----- Votre code ici -----

	console.log(reponse_1, reponse_2, reponse_3);

	// --------------------------
})();
