/*
NORMALISATION DES EMAILS

Notre liste de diffusion n'est pas utilisable, de nombreux mails sont erronées.

A partir des données fournies (et non modifiables),
vous devez effectuer les actions suivantes :

- passer tout les mails en minuscule
- Eliminez les faux mails ne possédant pas d'arobase
- Le domaine "hotmail.fr" n'existe plus : c'est désormais "hotmail.com"
- 'r0001@dk1.com' est banni de notre service : éliminez cette adresse.

*/

const mails = [
	'BOB@HOTMAIL.COM',
	'patrick.go@hotmail.com',
	'alabama54@gmail.com',
	'eric.billy',
	'brigitte@hotmail.fr',
	'k',
	'lola23@caramail.fr',
	'sgsgdfgsdfgd',
	'SANGOKU@freemail.uk',
	'PiKaChU@NiNtEnDo.cOm',
	'bruno.birk@hotmail.com',
	'xxxxxxxxxx',
	'matrox@gmail.com',
	'arako@redmail.ru',
	'nevernevernever',
	'SONY_NOW@GMAIL.COM',
	'gille@digital.uk',
	'agave.aloe@gmail.com',
	'r0001@dk1.com',
	'bro@free.fr',
	'MRBLUE@hotmail.fr',
	'alan@caramail.fr',
	'fuckFuckfuck',
	'user459@live.fr'
];
