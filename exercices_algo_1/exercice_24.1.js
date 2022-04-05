/*
E-SPORT
Deux équipes viennent de s'affronter, et le match est terminé.
A partir des données fournies (et non modifiables),
vous devez calculer et afficher les informations suivantes :

1 - Le score de la team A
2 - Le score de la team B
3 - L'équipe gagnante
4 - Le joueur qui a fait le meilleur score
*/

const team_A_name = ['john', 'lilly', 'bo'];
const team_A_score = [2523, 1050, 4023];

const team_B_name = ['gille', 'daphné', 'sandy'];
const team_B_score = [920, 3607, 3951];

//1
let team_A_total = 0

for(let j=0; j<team_A_score.length; j++){
    team_A_total += team_A_score[j];
}

console.log('Score de la Team A : ' + team_A_total + ' points');

//2
let team_B_total = 0

for(let j=0; j<team_B_score.length; j++){
    team_B_total += team_B_score[j];
}

console.log('Score de la Team B : ' + team_B_total + ' points');

//3
let winner = ''

if(team_A_total > team_B_total){
    winner = 'Team A';
}else{
    winner = 'Team B';
}

console.log('Le gagnant est : ' + winner);