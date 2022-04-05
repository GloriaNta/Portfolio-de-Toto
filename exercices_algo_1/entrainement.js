// Entrainement pour l'épreuve




let login ="admin",
    pass = "bisous77"

if(login=='admin' && pass=='bisous'){
    console.log("Bienvenue Administrateur");
} else {
    console.log('non autorisé');
}

let country = "UK";

let shipping = (country =="UK") ? 10 : 34;

console.log("Shipping cost (" + country + ") : " + shipping + " €");


const r = [5,19,14,2,9,28]

r[3] = 25;