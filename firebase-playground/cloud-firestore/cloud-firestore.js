import config from '../config.js';

// Initialisation de Firebase
firebase.initializeApp(config);

// Gestionnaires d'événements
$('#addGame').on('click', () => $('#formGame').slideToggle());
$('#formGame').on('submit', onAddGame);
$('#jeux').on('click', '[data-doc-id]', onDeleteGame);
$(document).ready(onPageLoad);

// Récupération de la session utilisateur (si elle existe!)
let currentUser = null;
function onPageLoad() {
    firebase.auth().onAuthStateChanged(user => {
        if (user !== null) { // Si on a un user, alors c'est qu'on est connecté
            $('#logged-in').show();
            $('#logged-out').hide();

            currentUser = user;
        }
    });
}

// Lors de l'ajout d'un jeu
function onAddGame (event) {
    event.preventDefault(); // Empeche le rechargement de la page

    // Ajout du loader
    $('#formGame').append('<div class="loader"></div>');
    // Désactive (temporairement) le bouton d'envoi
    $('#formGame button[type="submit"]').prop('disabled', true).addClass('btn-disabled');

    // Récupération des valeurs des champs <input>
    const nom = $('#gameName').val();
    const image = $('#gameImage').val();
    const consoleJeu = $('#gameConsole').val();

    // Ajout dans la base du nouveau jeu
    firebase.firestore().collection('jeux').add({
        nom: nom,
        image: image,
        console: firebase.firestore().collection(`consoles`).doc(consoleJeu), // Ajout de la référence vers la console choisie
        author_id: currentUser.uid
    }).finally(() => {
        // Dès que l'opération est terminée
        // Retire le loader
        $('.loader').remove();
        // Désactive (temporairement) le bouton d'envoi
        $('#formGame button[type="submit"]').prop('disabled', false).removeClass('btn-disabled');

        $('#formGame')[0].reset(); // Reset du formulaire
        $('#formGame').slideUp(); // Masque le formulaire
    });
}

// Lors de la suppression d'un jeu
function onDeleteGame (event) {
    event.preventDefault();

    const id = $(this).attr('data-doc-id');

    const docRef = firebase.firestore().collection('jeux').doc(id);
    docRef.get()
        .then(gameObj => {
            if (!gameObj.exists) {
                throw new Error('Ce jeu n\'existe pas ou plus !');
            }
        })
        .then(() => docRef.delete())
        .then(() => console.log('Document supprimé !'));
}

// Génération des ID dans la balise <select>
firebase.firestore().collection('consoles').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        const { nom } = doc.data();
        const id = doc.id;

        $('#gameConsole').append(`<option value="${id}">${nom}</option>`);
    });
});


// 2. [À FAIRE] Récupérez la liste des consoles de jeu et affichez-les dans le HTML ...
// Le HTML à utiliser pour chaque console est le suivant :
/*
    <div class="card d-flex flex-column justify-content-end">
        <img class="card-img-top" src="images/consoles/<IMAGE>" alt="<NOM>">
        <div class="card-body" style="flex: initial">
            <h5 class="card-title"><NOM></h5>
            <p class="card-text"><CONSTRUCTEUR> / <PRIX>} €</p>
        </div>
    </div>
*/

const consolesRef = firebase.firestore().collection('consoles');

consolesRef.get().then(querySnapshot => {
    querySnapshot.forEach(item => {
        let { image, prix, constructeur, nom } = item.data();
        
        let template = `<div class="card d-flex flex-column justify-content-end">
            <img class="card-img-top" src="images/consoles/${image}" alt="${nom}">
            <div class="card-body" style="flex: initial">
                <h5 class="card-title">${nom}</h5>
                <p class="card-text">${constructeur} / ${prix} €</p>
            </div>
        </div>`;

        $('#consoles').append(template);
    });
});


// 3. [À FAIRE] Récupérez la liste des jeux et affichez-les dans le HTML ...
// Le HTML à utiliser por chaque jeu est le suivant :
/*
    <div class="card d-flex flex-column justify-content-end">
        <img class="card-img-top" src="images/jeux/<IMAGE>" alt="">
        <div class="card-body" style="flex: initial">
            <h5 class="card-title"><NOM></h5>
            <p class="card-text"><NOM CONSOLE></p>
        </div>
    </div>
*/

const jeuxRef = firebase.firestore().collection('jeux');

jeuxRef.onSnapshot(querySnapshot => {
    $('#jeux').empty();
    querySnapshot.forEach(item => {

        let { image, nom, console : consoleJeu, author_id } = item.data();
        let docID = item.id;

        // Gestion de l'image
        // ==================
        let imagePath;
        // Si le champs image n'a pas été renseigné, on met une image de placeholder grise
        if (image.trim() === '') {
            imagePath = `https://via.placeholder.com/150x185.png?text=${encodeURIComponent(nom)}`;
        }
        // Sinon, si l'image a été renseignée mais ne commence pas par http, il s'agit probablement d'un fichier local du dossier /images/jeux/
        else if (!image.startsWith('http')) {
            imagePath = `images/jeux/${image}`;
        }
        // Sinon, c'est une URL, on ne change rien
        else {
            imagePath = image;
        }

        // console.log( 'consoleJeu = ', consoleJeu );

        consoleJeu.get().then(snapshotConsole => {

            let { nom: consoleNom } = snapshotConsole.data();

            let template = `
            <div class="card d-flex flex-column justify-content-evenly flex-grow-1" style="max-width: 20%">
                <img class="card-img-top" src="${imagePath}" alt="">
                <div class="card-body flex-grow-1 d-flex flex-column justify-content-between" style="flex: initial">
                    <h5 class="card-title">${nom}</h5>
                    <p class="card-text d-flex justify-content-between">
                        ${consoleNom}
                        ${currentUser && currentUser.uid === author_id
                            ? `<a href="#" class="btn btn-danger btn-sm" data-doc-id="${docID}" title="Supprimer">❌</a>`
                            : ''
                        }
                    </p>
                </div>
            </div>`;

            $('#jeux').append(template);
            
        });

    });
});