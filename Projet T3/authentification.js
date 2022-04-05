import config from './config.js';

// Initialisation de Firebase
firebase.initializeApp(config);

$('#logged-in').hide();
$('#logged-out').show();

// Gestionnaire d'évenements
$('#loginForm').on('submit', emailPasswordLogin);
$('#logged-out').on('click', emailPasswordLogin);
$('#logged-in').on('click', logout);
$('#addForm').on('submit');
$(document).ready(onPageLoad);


// FUNCTIONS


/* LOGIN */
function emailPasswordLogin(event) {
    event.preventDefault();

    const log = $('#loginField').val(); 
    const password = $('#passwordField').val();

    firebase.auth().signInWithEmailAndPassword(log, password)
        .then(result => { 
            
            const user = result.user;

            $('#logged-out').hide();
            $('#logged-in').show();

            console.log('Connecté', user);
        })
        .catch(error => showError(error)); // Affiche une <div> avec l'erreur
}

/* LOGOUT */
function logout() {

    firebase.auth().signOut().then( () => {
        $('#logged-in').hide();
        $('#logged-out').show();
    });
}


/* RECUPERATION DE LA BASE DE DONNÉES */
const linkRef = firebase.firestore().collections('Link');

linkRef.get().onSnapshot(querysnapshot => {
    querysnapshot.forEach(doc => {
        let {tittle, url, description} = doc.data();

        const template = `
        <div class="col card card-body m-4">
            <button class="btn btn-ligth" id="buttonDelete"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                class="delete bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg></button>
            <!--BUTTON DELETE -->

            <h1 class="card-tittle">${tittle}</h1>
            <a href=${url} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                    fill="currentColor" class=" link bi bi-link" viewBox="0 0 16 16">
                    <path
                        d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                    <path
                        d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                </svg></a>
            <p>${description}</p>
        </div>
        `;

        $('#card').append(template);
    });
})

/* MODAL */
var modal = document.getElementById("#addModal");
var btn = document.getElementById("#buttonAdd");
var close = document.getElementById("btnClose");

// ouvre le modal
btn.onclick = function() {
  modal.style.display = "block";
}

// ferme le modal
close.onclick = function() {
  modal.style.display = "none";
}

// ferme le modal si on click à l'exterieur
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* ADD FORM */


/* ON PAGE LOAD */
function onPageLoad() {

    //vérifier si l'utilisateur à déjà une session ouverte
    firebase.auth().onAuthStateChanged(user => {
        if (user !== null) {
            $('#logged-in').show();
            $('#logged-out').hide();
        }
    });
}