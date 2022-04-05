/*
AFFICHAGE DE DATE

A partir de la date fournie (et non modifiables),
vous devez afficher les informations suivantes :

1 - La date complète, avec le mois en toute lettre
*/

const year = 2014;
const day = 18;
const month = 11;

let month_str = ' '

switch(month){
    case 1 : 
        month_str = "Janvier";
        break;
    case 2 :
        month_str = "Février";
        break;
    case 3 :
        month_str = "Mars";
        break;
    case 4 :
        month_str = "Avril";
        break;
    case 5 :
        month_str = "Mai";
        break;
    case 6 :
        month_str = "Juin";
        break;
    case 7 :
        month_str = "Juillet";
        break;
    case 8 :
        month_str = "Août";
        break;
    case 9 :
        month_str = "Septembre";
        break;
    case 10 :
        month_str = "Octobre";
        break;
    case 11 :
        month_str = "Novembre";
        break;
    case 12 :
        month_str = "Décembre";
        break;
}

console.log(day + ' ' + month_str + ' ' + year)