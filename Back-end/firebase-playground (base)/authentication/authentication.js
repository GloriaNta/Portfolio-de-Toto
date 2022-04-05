import config from '../config.js';

// Initialisation de Firebase
firebase.initializeApp(config);

$('#logged-in').hide();
$('#logged-out').show();

// --------------------------------------------
// Initialisation des gestionnaires d'événement
// --------------------------------------------

$('#loginButtonFacebook').on('click', facebookLogin);
$('#loginButtonTwitter').on('click', twitterLogin);
$('#loginButtonGithub').on('click', githubLogin);
$('#loginButtonGoogle').on('click', googleLogin);
$('#loginForm').on('submit', emailPasswordLogin);
$('#logout').on('click', logout);
$(document).ready(onPageLoad);

// ----------------------------------------
// Définition des gestionnaires d'événement
// ----------------------------------------

function facebookLogin(){

    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(facebookProvider)
    .then(result => {
        const user= result.user;
        console.log('Résultat de lauthentification Twitter', user);
    });
}

function twitterLogin(){

    const twitterProvider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(twitterProvider)
    .then(result => {
        const user= result.user;
        console.log('Résultat de lauthentification Twitter', user);
    });
}

function githubLogin() {
    // Votre code ici ...
    // Créez un provider pour Github

    const githubProvider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(githubProvider)
    .then(result => {
        const user = result.user;
        console.log('Résultat de lauthentification Github', user);
    });

}

function googleLogin() {
    // Votre code ici ...
    // Créez un provider pour google

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
    .then (result => {
        const user = result.user;
        console.log('Résultat de lauthentification Google', user);
    });
};

function emailPasswordLogin(event) {
    event.preventDefault();

    const email = $('#emailField').val(); // JQERY
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

    firebase.auth().signOut().then( () => {
        $('#logged-in').hide();
        $('#logged-out').show();
    });
}

function onPageLoad() {
    // Votre code ici ...
    // Utilisez la méthode 'onAuthStateChanged' de Firebase pour vérifier si l'utilisateur à déjà une session ouverte

    firebase.auth().onAuthStateChanged(user => {
        if (user !== null) {
            $('#logged-in').show();
            $('#logged-out').hide();

            $('#userEmail').text(user.email);
            $('#userPhoto').attr('src', user.photoURL);
            $('#userName').text(user.displayName, user.screenName);
            // equivalent de :
            // document.getElementById('userName').inenerText = user.email;
            // document.getElementById('user photo').src = user.photoURL;
            // document.getElementById ('userName').innerText = user.displayName;

            $('#userName').text(user.screenName);
        }
    });
}

function showError(error){
    $('#error').html(`<div class="alert alert-danger">${error.message}</div>`);
}