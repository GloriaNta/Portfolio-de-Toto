import config from '../config.js';

// Initialisation de Firebase
firebase.initializeApp(config);

// Initialisation des gestionnaires d'événement
$('#addMessageForm').on('submit', onAddMessage);
$(document).ready(onPageLoad);

// ----------------------------------------
// 1) [À FAIRE] Complétez les gestionnaires d'événement onAddMessage() et onAddUser()
// ----------------------------------------

let currentUser = null;

function onPageLoad(){
    firebase.auth().onAuthStateChanged(user => {
        if (user !== null){ // Si on a un user, alors c'est qu'on est connecté
            $('#logged-out').hide();
            $('#logged-in').show();

            currentUser = user;
        }
    })
}

function onAddMessage (event) {
    event.preventDefault();

    const message = $('#message').val();

    // Votre code ici ...
    // Ajouter le pseudo et le message dans la database ...

    const chatRef = firebase.database().ref('/chat');

    const obj = {
        uid : currentUser.uid,
        pseudo: currentUser.displayName,
        avatar: currentUser.photoURL,
        message: message
    };

    chatRef.push(obj);
}

// ----------------------------------------
// 2) [À FAIRE] Écrivez le code qui permet de récupérer les messages ET les utilisateurs de la base
// ----------------------------------------

// Récupération des messages...

const chatRef = firebase.database().ref('/chat');
chatRef.on('value', snapshot => {

   // document.getElementById('messages').innerHTML = '';
    $('#messages').empty(); // efface le contenue du <uL>

    snapshot.forEach(item => {
        const {message, pseudo, avatar} = item.val();
        // const message = item.val().message;
        // const pseudo = item.val().pseudo

        const template = `<li>
            <img src="${avatar}" width="64">
            ${pseudo} : ${message}
        </li>`;

        $('#messages').append(template);
    });
})

// Récupération des utilisateurs...
