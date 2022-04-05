/*
QUIZZ
3 questions sont posées à l'utilisateur.

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

	let score = 0
	let message = ' '

// calcul du score

	if (reponse_1 = '1995') {
		score++;
	} 

	if (reponse_2 = 'Brendan') {
		score++;
	} 
	
	if (reponse_3 = '2009') {
		score++;
	}

// Apréciation

	switch (score) {
		case 0:
			message = "pas terrible..."
			break;
		case 3:
			message = "Super !"	
	
		default:
			message = "Essayez encore...";
			break;
	}

// affichage final

	console.log('Votre score : ' + score + ' /3');
	console.log(message);
	// --------------------------
})();
