//JEU DE CARTES : ALGO POUR CRÉER 52 CARTES


let cartes = [], i=1;
    couleurs = ["coeur", "trèfle", "carreaux", "pique"];


for(let j = 0; j < couleurs.length; j++){
    for(let i = 1; i !=14; i = i+ 1){
        cartes.push({
            couleur : couleurs[j],
            valeur : i
        });
    }
}

console.log(cartes);


// lancer un dés

let result = new Array(52);
result.fill(0);

for(let i = 0; i < 10000000; i++){
    let des = Math.floor(Math.random()*52);
//console.log(cartes[des]);
    result[des]++;
}



console.log(cartes[getRandomInt(53)]);