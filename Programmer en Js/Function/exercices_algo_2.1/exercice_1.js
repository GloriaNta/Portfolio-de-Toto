/*
METACRITICS

Nous désirons faire apparaitre sur notre site une classificiation
des jeux vidéos par rapport à leur score sur le site Metacritic.com comme suite :

- A : Note supérieur ou égale à 90
- B : Notre supérieur ou égale à 75
- C : Notre supérieur ou égale à 50
- D : Notre supérieur ou égale à 20
- E : Notre inférieur à 20

A partir des données fournies (et non modifiables),
vous devez calculer et afficher les informations suivantes :

1 - Créer une fonction qui permet de connaitre le classement par rapport au score
2 - Créer une fonction qui affiche les informations d'un jeu vidéo : NOM (CLASSEMENT)
3 - Affichez tout les jeux avec leur classement
*/

const video_games = [
	"MARVEL'S SPIDER-MAN",
	'INSIDE',
	'THE CREW 2',
	'V-RALLY 4',
	'NEW GUNDAM BREAKER',
	'HALF-LIFE 2',
	'VROOM IN THE NIGHT SKY',
	'GHOSTBUSTERS',
	'JOURNEY',
	'UNDERTALE'
];
const score_metacritic = [87, 91, 64, 59, 43, 96, 17, 30, 92, 92];

// Display classement

/**
 * Transforme Metacritic score to classement letter
 * @param {Number} score The metacrtic score
 * @returns String
 */
function classementScoreMetacritics(score){
	if (score >= 90){
		return "A";
	}if (score >= 75){
		return "B";
	}if (score >= 50){
		return "C";
	}if (score >= 20){
		return "D";
	}if (score <20){
		return "E";
	}
}

console.log(classementScoreMetacritics(43));



/**
 * Display game information in the console
 * @param {String} name Name of the game
 * @param {String} classement classement of the game
 */

function displayGame(name, classement){
	//console.log(name + " (" + classement + ")");
	console.log(`${name} (${classement})`);
}

displayGame("GTA V", "A");


// Display result
for (let i=0; i<video_games.length ; i++ ){
	displayGame(video_games[i], classementScoreMetacritics(score_metacritic[i]));
}


classementScoreMetacritics()