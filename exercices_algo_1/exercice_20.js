/*
E-SPORT
Deux équipes viennent de s'affronter.
A partir des données fournies (et non modifiables),
vous devez calculer et afficher les informations suivantes :

1 - Le score de la team A
2 - Le score de la team B
3 - Le nombre de participants au match
*/

const team_A_name = ['john', 'lilly', 'bo'];
const team_A_score = [2523, 1050, 4023];

const team_B_name = ['gille', 'daphné', 'sandy'];
const team_B_score = [920, 3607, 3951];

const score_team_A = team_A_score[0] + team_A_score[1] + team_A_score[2];

const score_team_B = team_B_score[0] + team_B_score[1] + team_B_score[2];

const nbParticipants = team_A_name.length + team_B_name.length;

console.log("le score de la team A est : " + score_team_A);
console.log("le score de la team B est : " + score_team_B);
console.log(" le nombre de participants est :" + nbParticipants)

