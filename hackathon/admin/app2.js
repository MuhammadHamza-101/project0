console.log(firebase);
var provider = new firebase.auth.GoogleAuthProvider();
function callGoogle() {
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}


// sajid


function send() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const number = document.getElementById("number");
    // const age = document.getElementById("age");

    const obj = {
        name: name.value,
        email: email.value,
        password: password.value,
        number: number.value,
        // age: age.value,
    }
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            alert("Sign Up successful");
            var user = userCredential.user;
            var userUid = user.uid;
            console.log(userUid);
            firebase.database().ref(`Users/${userUid}`).set(obj)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                })
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage, errorCode);
            // ..
        });

}

function login() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const obj = {
        email: email.value,
        password: password.value
    }
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            alert(user);
            location.href = "dashboard.html"
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage, errorCode);
        });
}