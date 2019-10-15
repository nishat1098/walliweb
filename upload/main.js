var Config = {
    apiKey: "AIzaSyAVj04u1pMDUPlRTOtW_LjSCWIqGq-mjVY",
    authDomain: "walliweb43.firebaseapp.com",
    databaseURL: "https://walliweb43.firebaseio.com",
    projectId: "walliweb43",
    storageBucket: "walliweb43.appspot.com",
    messagingSenderId: "660140605469",
    appId: "1:660140605469:web:2fbb83d41a3ed9baef06f4"

};
firebase.initializeApp(Config);

/*(() => {
    firebase.initializeApp(firebaseConfig);
    const storage = firebase.storage(),
        bucket = storage.ref(),
        img = bucket.child("img"),
        form = document.getElementById("upload"),
        uploader = document.getElementById("uploader"),
        output = document.getElementById("output")

    output.innerHTML = "";

    uploader.addEventListener("change", e => {
        Array.from(e.target.files).forEach(file => {
            let uploadTask = img.child(file.name).put(file)
            uploadTask.on("state_changed", data => {}, err => {}, () => {
                let fileIMG = img.child(file.name)
                fileIMG.getDownloadURL()
                    .then(url => {
                        if (file.type.match('image.*')) {
                            output.innerHTML += `
                            <div class = "col-3">
                                <div class = "card">
                                    <img src = "${url}" class="card-img-top">
                                </div>
                            </div>
                        `
                        }
                    })
            })
        })



    })

})();*/


var selectedFile;

function getfile() {
    var pic = document.getElementById("photo");

    // selected file is that file which user chosen by html form
    selectedFile = pic.files[0];

    // make save button disabled for few seconds that has id='submit_link'
    document.getElementById('submit_link').setAttribute('disabled', 'true');
    myfunction(); // call below written function
}

function myfunction() {
    // select unique name for everytime when image uploaded 
    // Date.now() is function that give current timestamp 
    var name = "123" + Date.now();

    // make ref to your firebase storage and select images folder
    var storageRef = firebase.storage().ref('/images/' + name);

    // put file to firebase
    var uploadTask = storageRef.put(selectedFile);

    // all working for progress bar that in html
    // to indicate image uploading... report
    uploadTask.on('state_changed', function(snapshot) {
        var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        var uploader = document.getElementById('uploader');
        uploader.value = progress;
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING:
                console.log('Upload is running');
                break;
        }
    }, function(error) {
        console.log(error);
    }, function() {

        // get the uploaded image url back 
        uploadTask.snapshot.ref.getDownloadURL().then(
            function(downloadURL) {

                // You get your url from here 
                console.log('File available at', downloadURL);

                // print the image url 
                console.log(downloadURL);
                document.getElementById('submit_link').removeAttribute('disabled');
                output.innerHTML += `
                            <div class = "col-3">
                                <div class = "card">
                                    <img src = "${downloadURL}" class="card-img-top">
                                </div>
                            </div>
                        `

            });
    });
};