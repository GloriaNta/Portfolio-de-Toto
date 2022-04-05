/*
INSCRIPTION AU SITE WEB

Nos utilisateurs peuvent s'inscrire grace à un formulaire d'inscription.
Ils doivent alors donner leur mail, leur futur login et choisir un mot de passe (2 fois)

Les règles de validation sont les suivantes :

Mail
- Entre 8 et 30 caractère
- Un arobase présent
- minimum 2 caractères avant l'arobase

Login
- Entre 8 et 30 caractère
- Caractères interdits : *$&#\@

Password
- Entre 8 et 20 caractère
- Les deux passe doivent être identiques


A partir des données fournies par l'utilisateur,
vous devez effectuer les opérations suivantes :

1 - Déclarez les 3 fonctions qui valident chaque informations (mail, login, password)
3 - Affichez le résultat.

ATTENTION:
- Ce code nécessite le package 'prompts'
- Vous devez placer votre code à l'endroit indiqué
*/

const prompts = require('prompts');

(async function() {
	const request = [
		{
			type: 'text',
			name: 'mail',
			message: `Mail ?`
		},
		{
			type: 'text',
			name: 'login',
			message: `Login ?`
		},
		{
			type: 'text',
			name: 'pass',
			message: `Password ?`
		},
		{
			type: 'text',
			name: 'pass2',
			message: `Password (bis) ?`
		}
	];

	const answers = await prompts(request);

	const mail = answers.mail;
	const login = answers.login;
	const password = answers.pass;
	const password2 = answers.pass2;

	// ----- Votre code ici -----

	// --------------------------
})();
