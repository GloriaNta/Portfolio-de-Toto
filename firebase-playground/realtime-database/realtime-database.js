import config from '../config.js';

// Initialisation de Firebase
firebase.initializeApp(config);

// Initialisation des gestionnaires d'événement
$('#addMessageForm').on('submit', onAddMessage);
$(document).ready(onPageLoad);

// ----------------------------------------
// 1) [À FAIRE] Complétez les gestionnaires d'événement onAddMessage()
// ----------------------------------------

let currentUser = null;

function onPageLoad() {
    firebase.auth().onAuthStateChanged(user => {
        if (user !== null) { // Si on a un user, alors c'est qu'on est connecté
            $('#logged-out').hide();
            $('#logged-in').show();

            currentUser = user;

            console.log('my token = ', currentUser.uid)
        }
    });
}

function onAddMessage (event) {
    event.preventDefault();

    const message = $('#message').val();

    // Votre code ici ...
    // Ajouter le pseudo et le message dans la database ...

    const chatRef = firebase.database().ref('/chat');

    const obj = {
        uid: currentUser.uid,
        pseudo: currentUser.displayName,
        avatar: currentUser.photoURL,
        message: message,
    };

    chatRef.push(obj);
}

// ----------------------------------------
// 2) [À FAIRE] Écrivez le code qui permet de récupérer les messages
// ----------------------------------------

// Récupération des messages...

const chatRef = firebase.database().ref('/chat');

chatRef.on('value', snapshot => {
    
    console.log(snapshot.val())

    $('#messages').empty(); // Efface le contenu du <ul>
    // document.getElementById('messages').innerHTML = '';

    snapshot.forEach(item => {
        const { message, pseudo, avatar } = item.val();
        // const message = item.val().message;
        // const pseudo = item.val().pseudo;
        // const avatar = item.val().avatar;

        const template = `<li class="media">
            <img src="${avatar}" width="48" class="mr-3 rounded-circle">
            <div class="media-body">
                <p><small class="text-muted font-weight-bold">${pseudo}</small><br>
                ${message}</p>
            </div>
        </li>`;

        $('#messages').append(template);
    });

});

