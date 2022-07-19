var format = localStorage.getItem("myValueFormat");
var myemail = localStorage.getItem("myValueEmail");
var myuserName = localStorage.getItem("myValueUserName");
var mypassword = localStorage.getItem("password");
var myrepeatPassword = localStorage.getItem("repeatPassword");

var emaile = null;
var passwordp = null;
var userNameu = null;
var agea = null;

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
          // console.log(`${doc.id} => ${doc.data().email}`);
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
      window.location.replace("../login/login.html");
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
////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
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
        document.getElementById("loginForHiadenOrShow").style.display = "none";
      } else {
        document.getElementById("loginForHiadenOrShow").style.display = "block";
      }
    });
  });
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
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
        document.getElementById("logutForHiadenOrShow").style.display = "block";
      } else {
        document.getElementById("logutForHiadenOrShow").style.display = "none";
      }
    });
  });
