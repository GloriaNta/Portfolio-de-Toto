// ----- JSON

const mydata = {
    firstName : "Gloria",
    lastName : "N'toma",
    age : 21,
    gender_female : true,
    children : ['chatons'],
    competences : {
        javascript : {
            score : 50,
            master : false,
        },
        php : { 
            score : 0,
            master : false,
        },
    },
};

console.log(mydata.firstName + " " + mydata.lastName)
console.log(mydata.children[0])
console.log(mydata.competences.javascript.score)

mydata.competences.javascript.score++;

console.log(mydata.competences.javascript.score)

mydata.competences.javascript.score -= 5;

console.log(mydata.competences.javascript.score)

// Syntaxe pour parcourir les clés :
for(const prop in mydata){
    console.log(prop + " : " + mydata[prop]);
}

console.log(JSON.stringify(mydata));