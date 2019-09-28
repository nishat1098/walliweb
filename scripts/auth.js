//listen for auth status

auth.onAuthStateChanged(user => {
    //console.log(user)

    if (user) {
        console.log('user logged in', user);
        setupUI(user);
    } else {
        setupUI();
        console.log('user logged out');
    }
});




//signup
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get info

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // console.log(email, password);

    //signup user

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        //console.log(cred.user);

        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });

});

//logout

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    /*auth.signOut().then(() => {
        console.log('user signed out');
    });*/

    auth.signOut();
});
//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get info

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //console.log(cred.user);

        //close login page

        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
});