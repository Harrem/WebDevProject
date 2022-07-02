const inputs = document.querySelectorAll(".input");
function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}
function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  ////////////////////////////////////////////////////////
  if (document.getElementById("email").value == "") {
    document.getElementById("rooleEmail").innerHTML =
      "Email should not be empty";
  } else if (document.getElementById("email").value == "@") {
    document.getElementById("rooleEmail").innerHTML = "It is not Email";
  } else {
    document.getElementById("rooleEmail").innerHTML = "";
  }
  ////////////////////////////////////////////////////////
  if (document.getElementById("password").value == "") {
    document.getElementById("roolePassword").innerHTML =
      "Password should not be empty";
  } else if (document.getElementById("password").value.length < 10) {
    document.getElementById("roolePassword").innerHTML =
      "Password should be more than 10 character";
  } else if (
    document.getElementById("email").value != "" &&
    document.getElementById("password").value != ""
  ) {
    document.getElementById("roolePassword").innerHTML = "";

    const firebaseConfig = {
      apiKey: "AIzaSyA8zBdkDnyFZXrDaOUhFWYj6V98ag2Iky0",
      authDomain: "kurdmovie-4b5d8.firebaseapp.com",
      databaseURL: "https://kurdmovie-4b5d8-default-rtdb.firebaseio.com",
      projectId: "kurdmovie-4b5d8",
      storageBucket: "kurdmovie-4b5d8.appspot.com",
      messagingSenderId: "280311151823",
      appId: "1:280311151823:web:d3eacfda932985e48e4bba",
    };

    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

    // let submitButton = document.getElementById("submit");

    // submitButton.addEventListener("click", (e) => {
    //   e.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var corectEmail = "";
    var corectPassword = "";

    db.collection("form data")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.data().email == email && doc.data().password == password) {
            corectEmail = doc.data().userName;
            // console.log(email);
            corectPassword = doc.data().password;
            // console.log(password);
          }
        });
      })
      .then(() => {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        console.log(corectEmail);
        console.log(corectPassword);
        document.getElementById("Setring").innerHTML = corectEmail;
        alert("You login sucessedfully");
        window.location.replace("../home/index.html");
      });
  } else {
    return false;
  }
});
//////////////////////////////////////////////////////////////////////////////////////
