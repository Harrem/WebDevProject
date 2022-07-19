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

    // let submitButton = document.getElementById("submit");

    // submitButton.addEventListener("click", (e) => {
    //   e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var corectEmail = "";
    var corectPassword = "";
    var corectName = "";
    var corectAge = "";
    db.collection("userList")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.data().email == email && doc.data().password == password) {
            console.log(doc.data().email);
            corectEmail = doc.data().email;
            corectPassword = doc.data().password;
            corectAge = doc.data().age;
            corectName = doc.data().userName;
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
          localStorage.setItem("myValueUserName", corectName);
          localStorage.setItem("password", corectPassword);
          localStorage.setItem("myValueEmail", corectEmail);
          localStorage.setItem("myValueFormat", corectAge);
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
function myFunction() {
  var password = document.getElementById("password");
  var hide1 = document.getElementById("hide1");
  var hide2 = document.getElementById("hide2");

  if (password.type === "password") {
    password.type = "text";
    hide1.style.display = "block";
    hide2.style.display = "none";
  } else {
    password.type = "password";
    hide1.style.display = "none";
    hide2.style.display = "block";
  }
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

var format = localStorage.getItem("myValueFormat");
var myemail = localStorage.getItem("myValueEmail");
var myuserName = localStorage.getItem("myValueUserName");
var mypassword = localStorage.getItem("password");
var myrepeatPassword = localStorage.getItem("repeatPassword");

var emaile = null;
var passwordp = null;
var userNameu = null;
var agea = null;

var logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();

  db.collection("userList")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (
          doc.data().email == myemail &&
          doc.data().password == mypassword &&
          doc.data().userName == myuserName &&
          doc.data().age == format
        ) {
          emaile = doc.data().email;
          passwordp = doc.data().password;
          userNameu = doc.data().userName;
          agea = doc.data().age;
          console.log(`${doc.id} => ${doc.data().email}`);
        }
      });
    })
    .then(() => {
      if (
        emaile == myemail &&
        passwordp == mypassword &&
        userNameu == myuserName &&
        agea == format
      ) {
        localStorage.setItem("myValueUserName", "");
        localStorage.setItem("password", "");
        localStorage.setItem("repeatPassword", "");
        localStorage.setItem("myValueEmail", "");
        localStorage.setItem("myValueFormat", "");
        alert("LogOut of your acounnt!");
      } else {
        alert("You are not login to logut!!!");
      }
    })
    .then(() => {
      window.location.replace("../signUp/signUp.html");
    });
});
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

db.collection("userList")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (
        doc.data().email == myemail &&
        doc.data().password == mypassword &&
        doc.data().userName == myuserName &&
        doc.data().age == format
      ) {
        console.log(`${doc.id} => ${doc.data().email}`);
        document.getElementById("signUpForHiadenOrShow").style.display = "none";
      } else {
        document.getElementById("signUpForHiadenOrShow").style.display =
          "block";
      }
    });
  });
