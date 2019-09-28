console.log('from contactjs');


const contact_form = document.querySelector('#sumbit');



db.collection('feedbacks').get().then(snapshot => {

    //console.log(snapshot.docs);
    snapshot.forEach(doc => {
        const guide = doc.data();
        //console.log(guide);
    });
});

contact_form.addEventListener('click', (e) => {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var comment = document.getElementById("comment").value;
    console.log(name, email, subject, comment);

    db.collection('feedbacks').add({
        Name: name,
        Email: email,
        Subject: subject,
        Comment: comment
    }).then(() => {
        console.log('Done!');
        contact_form.reset();
        window.location = 'feedback.html';

    });
});