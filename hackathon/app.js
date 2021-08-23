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


// function callSignUpWithEmail() {

//     document.getElementById('Name')
//     document.getElementById('Email')
//     document.getElementById('Password')
//     document.getElementById('Contact')

//     firebase.auth().createUserWithEmailAndPassword("Name", "Email", "Password", "contact")
//         .then((userCredential) => {
//             // Signed in 
//             var user = userCredential.user;
//             console.log(user)
//             // ...
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // ..
//         });
// }
// sajid

function signUp() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const number = document.getElementById("number");
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            let userId = userCredential.user.uid;
            const obj = {
                name: name.value,
                email: email.value,
                password: password.value,
                number: number.value,
                userId
                // age: age.value,
            };
            firebase.database().ref(`/userData/${userId}`).set(obj).then(() => {
                alert("Succesfully Created You Account");
                window.location.href = "dashboard.html";
            }).catch((err) => {
                console.log(err);
                alert("Something went wrong in details")
            });
            // .then((userCredential) => {
            //     // Signed in
            //     var user = userCredential.user;
            //     console.log(user);
            //     // ...
            // })
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage, errorCode);
            console.log("Something went wrong at create account");
        })

        // // const age = document.getElementById("age");

        // .then((userCredential) => {
        //     // Signed in
        //     alert("Sign Up successful");
        //     var user = userCredential.user;
        //     var userUid = user.uid;
        //     console.log(userUid);
        //     // ...
        // })
        // .catch((error) => {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     console.log(errorMessage, errorCode);
            // ..
        // });

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