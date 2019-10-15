const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
    if (user) {
        //toggle
        const html = `
            <div> Logged in as ${user.email}</div>
        
        `;
        accountDetails.innerHTML = html;

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


var storage = firebase.storage();
var downloadButton = document.getElementById("downloadButton");
var imgRef = storage.ref('minefinebilder/fallout.jpg');
console.log("mara");

downloadButton.addEventListener('click', function() {
    imgRef.getDownloadURL().then(function(url) {
        console.log("logo download");
        console.log(url);
    });
});