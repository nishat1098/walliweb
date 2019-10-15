var firebaseConfig = {
    apiKey: "AIzaSyAVj04u1pMDUPlRTOtW_LjSCWIqGq-mjVY",
    authDomain: "walliweb43.firebaseapp.com",
    databaseURL: "https://walliweb43.firebaseio.com",
    projectId: "walliweb43",
    storageBucket: "walliweb43.appspot.com",
    messagingSenderId: "660140605469",
    appId: "1:660140605469:web:2fbb83d41a3ed9baef06f4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in :', user);

    } else {
        console.log('user logged out');
    }
});

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    /*auth.signOut().then(() => {
        console.log('user signed out');
    });*/

    auth.signOut();
    window.location.href = "../index.html";
});