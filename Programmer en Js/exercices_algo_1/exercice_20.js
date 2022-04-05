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

let team_a_total = 0;

// Sans boucle
let score_A = team_A_score[0] + team_A_score[1] + team_A_score[2]
console.log("le score de la team A est de " + score_A + " points")

// Avec boucle
team_a_total = 0;
for(let j=0; j<team_A_score.length; j++){
    team_a_total += team_A_score[j];
}
console.log("le score de la team A est de : (avec boucle) " + team_a_total + " points")

let score_B = team_B_score[0] + team_B_score[1] + team_B_score[2]
console.log("le score de la team A est de " + score_B + " points")

let total = team_A_name.length + team_B_name.length
console.log("le nombre de participants au match est de " + total)
