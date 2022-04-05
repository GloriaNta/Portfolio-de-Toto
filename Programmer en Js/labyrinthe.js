/* SWITCH
function Regarder (Direction){
    
    switch(Direction){

        case 'Nord':
            console.log("Vous regardez vers le Nord");
            break;
        case 'Sud' :
            console.log("Vous regardez vers le Sud");
            break;
        case 'Est' :
            console.log("Vous regardez vers l'Est");
            break;
        case 'Ouest' :
            console.log("Vous regardez vers l'Ouest");
            break;
        default :
            console.log("Veuillez choisir une direction");

        return undefined;
    }
}

Regarder ('Nord');
Regarder('Sud');
Regarder ('Est');
Regarder ('Ouest');
Regarder ('Sud-est'); 
*/



/* IF

function Regarder (Direction){



    if (Direction == "Nord"){
        console.log("Vous regardez vers le Nord") 

    }else if(Direction == "Sud"){
        console.log("Vous regardez vers le Sud")

    }else if (Direction == "Est"){
        console.log("Vous regardez vers l'Est")

    }else if (Direction == "Ouest"){
        console.log("Vous regardez vers l'Ouest")

    }else {
        console.log("Veuillez choisir une direction")
    }
    
}

Regarder ("Nord");
Regarder ("Sud");
Regarder ("Est");
Regarder ("Ouest");
Regarder ("Sud-est");

*/

Start();
function Start(){
    console.log(`
    Bienvenu dans le labyrinthe des Merveilles ! 
    Alice s'est perdu en essayant de trouver la porte menant au pays des Merveilles, Aidez la à retrouvez son chemin.

    Tape "regarder()" pour découvrir ce qu'il y a devant toi
    Tape "avancer()" pour se déplacer`)
}

function Jouer_au_Labyrinthe(){

    let mur = "x";
    let passage = "o";



    let labyrinthe =    [
        ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
        ['x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'x'],
        ['x', 'x', 'o', 'x', 'x','o','x', 'o', 'x'],
        ['x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x'],
        ['x', 'o', 'x', 'o', 'x', 'x', 'o', 'x', 'x'],
        ['x', 'o', 'x', 'o', 'o', 'x', 'o', 'x', 'x'],
        ['x', 'x','x', 'x','o', 'x', 'o', 'x', 'x'],
        ['entrée', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'sortie'],
        ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ];


}
