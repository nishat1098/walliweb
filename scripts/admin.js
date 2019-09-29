console.log('its admin');

db.collection('feedbacks').get().then(snapshot => {
    snapshot.forEach(doc => {
        const guide = doc.data();
        console.log(guide);


    })
})