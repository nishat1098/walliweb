auth.onAuthStateChanged(user => {
    console.log(user);
    if (user) {
        document.getElementById('logged-in').style.display = "block";
        document.getElementById('logged-out').style.display = "none";
    } else {
        document.getElementById('logged-in').style.display = "none";
        document.getElementById('logged-out').style.display = "block";
    }
});