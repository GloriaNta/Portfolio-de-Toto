import config from '../config.js';

// Initialisation de Firebase
firebase.initializeApp(config);

$('#logged-in').hide();
$('#logged-out').show();

// --------------------------------------------
// Initialisation des gestionnaires d'événement
// --------------------------------------------

$('#loginButtonGithub').on('click', githubLogin);
$('#loginButtonGoogle').on('click', googleLogin);
$('#loginForm').on('submit', emailPasswordLogin);
$('#logout').on('click', logout);
$(document).ready(onPageLoad);

// ----------------------------------------
// Définition des gestionnaires d'événement
// ----------------------------------------

function githubLogin() {
    // Votre code ici ...
    // Créez un provider pour Github
    const githubProvider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithPopup(githubProvider)
        .then(result => {
            const user = result.user;

            $('#userName').text(user.displayName);
            $('#userEmail').text(user.email);
            $('#userPhoto').attr('src', user.photoURL);
        });
}

function googleLogin() {
    // Votre code ici ...
    // Créez un provider pour google
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const user = result.user;

            $('#userName').text(user.displayName);
            $('#userEmail').text(user.email);
            $('#userPhoto').attr('src', user.photoURL);

            // équivalent de :
            // document.getElementById('userName').innerText = user.displayName;
            // document.getElementById('userEmail').innerText = user.email;
            // document.getElementById('userPhoto').src = user.photoURL;

            // A METTRE AUSSI EN BAS DANS LA FONCTION ONPAGELOAD !!
        });

}

function emailPasswordLogin(event) {
    event.preventDefault();

    const email = $('#emailField').val();
    const password = $('#passwordField').val();

    // Votre code ici ...
    // Utilisez les variables 'email' et 'password' pour les transmettre à Firebase via le provider "Email/Password"
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(result => {
            const user = result.user;

            $('#logged-out').hide();
            $('#logged-in').show();

            $('#userEmail').text(user.email);
        })
        .catch(error => showError(error)); // Affiche une <div> avec l'erreur
}

function logout() {
    // Votre code ici ...
    // Utilisez la fonction de déconnexion Firebase pour déconnecter l'utilisateur
    firebase.auth().signOut().then(() => {
        $('#logged-out').show();
        $('#logged-in').hide();
    });
}

function onPageLoad() {
    // Votre code ici ...
    // Utilisez la méthode 'onAuthStateChanged' de Firebase pour vérifier si l'utilisateur à déjà une session ouverte
    firebase.auth().onAuthStateChanged(user => {
        if (user !== null) { // Si on a bien une session en cours ...
            $('#logged-in').show();
            $('#logged-out').hide();

            $('#userName').text(user.displayName);
            $('#userEmail').text(user.email);
            $('#userPhoto').attr('src', user.photoURL);
        }
    });
}

function showError(error) {
    $('#error').html(`<div class="alert alert-danger">${error.message}</div>`);
}