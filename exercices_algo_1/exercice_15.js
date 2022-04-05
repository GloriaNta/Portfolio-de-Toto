/*
PRÊT POUR LE VOYAGE (2)
Maintenant que nous connaissons comment faire des conditions,
reprenez l'exercice 14 et personnalisez les messages pour
qu'ils soient intelligibles : 

"les garcons ont bien tous leurs passeports"
"Les filles ont bien toutes leurs passeports"
Tout le monde a bien son passeport
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
}

if (girls == true) {
    console.log('Les filles ont bien toutes leurs passeports');
}
if (girls == true && boys == true) {
    console.log('Tout le monde a bien son passeport');
}