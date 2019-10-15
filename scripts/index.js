const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
    if (user) {
        //toggle
        db.collection('user').doc(user.uid).get().then(doc => {
            const html = `
            <div> Logged in as ${user.email}</div>
            <div>${doc.data().bio}</div>
        
        `;
            accountDetails.innerHTML = html;
        })


        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {

        accountDetails.innerHTML = '';
        //toggle
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});

var user;
var uid;
firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        console.log("nai");
    } else {
        user = firebase.auth().currentUser;
        uid = user.email;
    }

    if (uid == 'admin@gmail.com') {
        console.log('its admin');
        window.location.href = "actual_admin.html";

    } else {
        console.log('normal user');

    }
});