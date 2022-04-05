/*
ACHAT
Un utilisateur vient d'effectuer un achat sur un site de e-commerce.
A partir des données fournies (et non modifiables),
vous devez calculer et afficher les informations suivantes :

1 - Le prix total HT du panier
2 - La part TVA
3 - Le prix total TTC
4 - Le prix à payer après réduction du bon d'achat
*/

const produit_1_ht = 23.5;
const produit_2_ht = 7.25;
const produit_3_ht = 499.99;

const TVA = 20;
const reduction = 15;

const Total_ht =(produit_1_ht + produit_2_ht + produit_3_ht);
console.log(Total_ht * 15/100);
const total_ttc =(Total_ht * 0,20);
