/*

Chiffrement par substitution de lettre

Votre équipe a bien travaillé et a terminé l’algorithme de création de l’alphabet crypté.

Par contre, l’autre équipe a échoué sur sa mission : écrire le code qui utilise cet alphabet.

Allez les aider ! Chaque lettre en clair doit être remplacée par son équivalent chiffré se trouvant à la même position dans l’alphabet.

On peut voir les correspondances ici : 

    ABCDEFGHIJKLMNOPQRSTUVWXYZ
    MULTIEDABCFGHJKNOPQRSVWXYZ

Ainsi, A devient M, B devient U et N devient J ...

Vous devez écrire le code qui permet de chiffrer un message à partir d’une clé secrète.
            
*/

const   secret_key          = "MULTIMEDIA",
        crypted_alphabet    = "MULTIEDABCFGHJKNOPQRSVWXYZ", //cf exercice précédent
        message             = "plus vous saurez regarder loin dans le passé plus vous verrez loin dans le futur";

// écrivez votre code ici

console.log("Voici le message chiffré avec la clé "+secret_key+" : ");