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
        return db.collection('user').doc(cred.user.uid).set({
            bio: signupForm['signup-bio'].value
        });
    }).then(() => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
        /////my mod
        auth.signOut();
        //////////////////important/////////////////////
        const mod = document.querySelector('#modal-login');
        M.Modal.getInstance(mod).open();
        //signupForm.reset();
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
    }, err => {
        let msg;
        switch (err.code) { // SWITCH THE CODE RETURNED TO SEE WHAT MESSAGE YOU'LL DISPLAY
            case "auth/wrong-password":
                msg = "Email or Password is wrong.";
                loginForm.reset();
                break;

            case "auth/user-not-found":
                msg = 'User not found.'
                loginForm.reset();
                break;

            case "auth/invalid-email":
                msg = 'Email or Password is wrong.';
                loginForm.reset();
                break;
        }

        alert(msg);

    });
});


/*async login(user: User){
    this.angfire.auth.signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            this.navCtrl.setRoot(HomeManagerPage);
        }, err => {
            let msg;
            switch (err.code) { // SWITCH THE CODE RETURNED TO SEE WHAT MESSAGE YOU'LL DISPLAY
                case "auth/wrong-password":
                    msg = "Email or Password is wrong.";
                    break;

                case "auth/user-not-found":
                    msg = 'User not found.'
                    break;

                case "auth/invalid-email":
                    msg = 'Email or Password is wrong.';
                    break;
            }

            alert(msg);
        });
}*/