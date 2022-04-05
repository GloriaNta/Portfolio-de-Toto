/*
IDENTIFICATION
A partir des données fournies par l'utilisateur,
vous devez afficher la réponde adaptée à la situation :

- login: admin et password: shazam => Bienvenue administrateur
- login: modo et password: alibaba => Bienvenue modérateur
- Si login ou password incorrecte  => Informations incorrectes, accés refusé

*/

const prompts = require('prompts');

(async function() {
	const request = [
		{
			type: 'text',
			name: 'login',
			message: `What's your login ?`
		},
		{
			type: 'text',
			name: 'password',
			message: `What's your password ?`
		}
	];

	const answers = await prompts(request);

	const login = answers.login;
	const password = answers.password;

	// ----- Votre code ici -----

	console.log(login, password);

	if (login == 'admin' && password == 'shazam') {
		console.log("Bienvenue administrateur");
	} else if (login == 'modo' && password == 'alibaba') {
		console.log("Bienvenue modérateur");
	} else {
		console.log('Informations incorrectes, accés refusé')
	}
	

	// --------------------------
})();
