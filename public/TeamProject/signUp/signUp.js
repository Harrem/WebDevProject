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
/////////////////////////////////////////////////////////////
let userName = document.getElementById("userName").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let repeatPassword = document.getElementById("repeatPassword").value;
let age = document.getElementById("format").value;
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  ////////////////////////////////////////////////////////
  if (document.getElementById("userName").value == "") {
    document.getElementById("rooleName").innerHTML =
      "UserName should not be empty";
  } else if (document.getElementById("userName").value.length < 4) {
    document.getElementById("rooleName").innerHTML =
      "UserName should be more than 8 character";
  } else {
    document.getElementById("rooleName").innerHTML = "";
  }
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
  if (document.getElementById("format").value == "Choose an Age") {
    document.getElementById("selectedFormat").innerHTML = "didnt selected";
  } else {
    document.getElementById("selectedFormat").innerHTML = "";
  }
  ////////////////////////////////////////////////////////
  if (document.getElementById("password").value == "") {
    document.getElementById("roolePassword").innerHTML =
      "Password should not be empty";
  } else if (document.getElementById("password").value.length < 8) {
    document.getElementById("roolePassword").innerHTML =
      "Password should be more than 10 character";
  } else {
    document.getElementById("roolePassword").innerHTML = "";
  }
  ////////////////////////////////////////////////////////
  if (document.getElementById("repeatPassword").value == "") {
    document.getElementById("rooleRepeatPassword").innerHTML =
      "Repeat Password should not be empty";
  } else if (
    document.getElementById("repeatPassword").value !=
    document.getElementById("password").value
  ) {
    document.getElementById("rooleRepeatPassword").innerHTML =
      "Repeat Password should be same us a password";
  } else if (
    document.getElementById("repeatPassword").value ==
      document.getElementById("password").value &&
    document.getElementById("email").value != "" &&
    document.getElementById("userName").value != "" &&
    document.getElementById("userName").value.length > 4 &&
    document.getElementById("format").value != "Choose an Age"
  ) {
    document.getElementById("rooleRepeatPassword").innerHTML = "";

    const firebaseConfig = {
      apiKey: "AIzaSyBtBegQtuB_TcnIDQcIyUynWuOPmZkpfvQ",
      authDomain: "kurd-movie-trailer.firebaseapp.com",
      projectId: "kurd-movie-trailer",
      storageBucket: "kurd-movie-trailer.appspot.com",
      messagingSenderId: "557149530646",
      appId: "1:557149530646:web:013ea41fe86c927a652337",
    };

    firebase.initializeApp(firebaseConfig);

    var firestore = firebase.firestore();

    const db = firestore.collection("userList");

    // let submitButton = document.getElementById("submit");

    // submitButton.addEventListener("click", (e) => {
    // e.preventDefault();

    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeatPassword = document.getElementById("repeatPassword").value;
    let age = document.getElementById("format").value;
    db.doc()
      .set({
        userName: userName,
        email: email,
        password: password,
        repeatPassword: repeatPassword,
        age: age,
      })
      .then(() => {
        window.location.replace("../home/index.html");
      })
      .catch((error) => {
        console.log(error);
      });

    alert(
      "Your form has been submitted successfully waiting for login to the homepage..."
    );
    document.getElementById("userName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("repeatPassword").value = "";
    // });
  } else {
    return false;
  }
  ////////////////////////////////////////////////////////
});
//////////////////////////////////////////////////////////////
