/*
E-SPORT
Deux équipes viennent de s'affronter.
A partir des données fournies (et non modifiables),
vous devez réaliser les opérations suivantes :

1 - Créer un nouveau tableau regroupant tout les participants
2 - Affichez la liste des participants en une liste verticale
*/

const { table } = require("console");

const team_A_name = ['john', 'lilly', 'bo'];
const team_B_name = ['gille', 'daphné', 'sandy'];

const participants = team_A_name.concat(team_B_name);

console.log(participants.join("\n"));
