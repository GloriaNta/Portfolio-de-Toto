/*
PRÊT POUR LE VOYAGE (3)
Utilisez le ELSE pour rendre votre code plus synthétique.
*/
const john = true;
const bill = false;
const jennifer = true;
const helene = true;
const alan = true;
const lucy = true;


const boys =(john && bill && alan) 
const girls =(jennifer && helene && lucy)

if (boys == true) {
    console.log('Les garçons ont bien tous leurs passeports');
}else{
    console.log("Les garçons n'ont pas tous leurs passeports");
}

if (girls == true) {
    console.log('Les filles ont bien toutes leurs passeports');
}else{
    console.log("Les filles n'ont pas toutes leurs passeports");
}

if (girls == true && boys == true) {
    console.log('Tout le monde a bien son passeport');
}else{
    console.log("Quelqu'un n'a pas son passeport");
}