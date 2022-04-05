/*
    CONSIGNE :
    Affichez dans la console web du navigateur les informations suivantes sous forme de phrase :
    
        1) Le nombre de listes non-ordonnées <ul> présentes dans l'intégralité du document
        2) Le nombre de liens <a> se trouvant à l'intérieur de la "navbar" uniquement
        3) Le nombre de puces <li> se trouvant à l'intérieur de la balise <main> uniquement
*/

// <Votre code à partir d'ici>

const uls = document.getElementsByTagName("ul");
console.log("Il y a " + uls.length + " listes non-ordonnées en tout dans la page.");


const collection = document.querySelectorAll(".navbar a");
console.log("Il y a " + collection.length + " liens à l'intérieur de la navbar");

const nombre = document.querySelectorAll("main li")
console.log("Il y a " + nombre.length + " éléments de liste dans la zone de contenu principal <main>.")
