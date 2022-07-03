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
  } else if (document.getElementById("password").value.length < 8) {
    document.getElementById("roolePassword").innerHTML =
      "Password should be more than 10 character";
  } else if (
    document.getElementById("email").value != "" &&
    document.getElementById("password").value != ""
  ) {
    document.getElementById("roolePassword").innerHTML = "";
    const firebaseConfig = {
      apiKey: "AIzaSyBtBegQtuB_TcnIDQcIyUynWuOPmZkpfvQ",
      authDomain: "kurd-movie-trailer.firebaseapp.com",
      projectId: "kurd-movie-trailer",
      storageBucket: "kurd-movie-trailer.appspot.com",
      messagingSenderId: "557149530646",
      appId: "1:557149530646:web:013ea41fe86c927a652337",
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
    db.collection("userList")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.data().email == email && doc.data().password == password) {
            console.log(doc.data().email);
            corectEmail = doc.data().email;
            corectPassword = doc.data().password;
            // alert("you passeted sucssesfully");
          }
        });
      })
      .then(() => {
        if (corectEmail == email && corectPassword == password) {
          console.log(corectEmail);
          console.log(corectPassword);
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
          // document.getElementById("Setring").innerHTML = corectEmail;
          alert("you passeted sucssesfully");
          // chosse = false;
          window.location.replace("../home/index.html");
        } else {
          console.log("non");
          alert("the passord or email is wrong!!!");
          window.location.reload();
          // chosse = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
//////////////////////////////////////////////////////////////////////////////////////
