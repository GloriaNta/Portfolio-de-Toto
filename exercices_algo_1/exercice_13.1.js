/*
E-SPORT
Deux équipes viennent de s'affronter.
A partir des données fournies (et non modifiables),
vous devez calculer et afficher les informations suivantes :

1 - Le score de la team A
2 - Le score de la team B
*/

const team_A_score_john = 2523;
const team_A_score_lilly = 1050;
const team_A_score_bo = 4023;

const team_B_score_gille = 920;
const team_B_score_daphne = 3607;
const team_B_score_sandy = 3951;

const Total_team_A =(team_A_score_john + team_A_score_lilly + team_A_score_bo);

const Total_team_b =(team_B_score_gille + team_B_score_daphne + team_B_score_sandy);

console.log("Le score de la team A est de " + Total_team_A + " points");
console.log("Le score de la team B est de " + Total_team_b + " points");