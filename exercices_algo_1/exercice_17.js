/*
LES QUALIFICATIONS

A partir des résultats des trois matchs fournies (et non modifiables),
vous devez calculer et afficher les informations suivantes :

1 - Si la France est qualifiée (2 matchs / 3 gagnés)
2 - Si la France est première de sa pool (3 matchs gagnés)
*/

const match_A_France = 3;
const match_A_Luxembourg = 1;

const match_B_France = 1;
const match_B_Suede = 2;

const match_C_France = 4;
const match_C_Pays_bas = 0;

let nb_win_match = 0;

if(match_A_France > match_A_Luxembourg){
    nb_win_match++;
}

if(match_B_France > match_B_Suede){
    nb_win_match++;
}

if(match_C_France > match_C_Pays_bas){
    nb_win_match++;
}

const qualified_message = (nb_win_match>=2) ? "La France est qualifié" : "La France n'est pas qualifié :(";

console.log(qualified_message);

if(nb_win_match == 3){
    console.log("La France est première de sa pool");
}