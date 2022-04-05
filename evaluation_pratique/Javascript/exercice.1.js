/* 
LA SEQUENCE ENDOMMAGÉES

Nous travaillons pour un laboratoire spécialisé dans le sequencage d'ADN.

Vous venez de recevoir une séquence d'ADN. Celle ci est composée de plusieurs brins, chacun étant composé de 3 lettres.
Helas, cette sequence est endommagée : Les dommages sont représentés par des tirets.
Il vous ai demandé d'écrire un programme qui permet de réparer la sequence endommagée.

Pour ce faire, votre programme doit réaliser les correction suivantes :

1. Si le brin endommagé est placé derriere un brin "CGG", alors la lettre manquante est A.
2. Si le brin endommagé est placé derriere un brin "GAG", alors la lettre manquante est T.

Développez l'algorithme de réparation de cette séquence et affichez dans la console la séquence réparée.

*/

const sequence = [
  "GCU",
  "UCG",
  "-TT",
  "GAG",
  "GTU",
  "CUU",
  "G-G",
  "CGG",
  "AGC",
  "GC-",
  "GAG"
];

for (let i = 0; i < sequence.length; i++){

  for (let j = 0; j < sequence[i].length; j++){

    if (sequence[i][j] == "-") {
      if (sequence[i + 1] == "CGG"){
        let remplace = sequence[i].replace("-", "A");
        sequence.splice(i, 1, remplace);

      }else if (sequence[i + 1] == "GAG"){
        let remplace = sequence[i].replace("-", "T");
        sequence.splice(i, 1, remplace);

      }
    }
  }
}
console.log(sequence);