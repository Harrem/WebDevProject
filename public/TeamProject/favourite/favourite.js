var search = document.getElementById("search");
var nav = document.getElementById("nav");
var logo = document.getElementById("logo");
var d = window.innerWidth;
var id = location.search.substring(1);

var v = false;
var chooseone1 = true;
var chooseone2 = true;

window.onload = function () {
  CheckNav();
};
window.onscroll = function () {
  CheckNav();
};
//Navigation
var nav = document.getElementById("nav");
function CheckNav() {
  var range = window.scrollY * 0.0025;
  nav.style.backgroundColor = `rgb(255,255,255,)`;
  if (window.scrollY >= 400) {
    range = 255;
  }
}

/////////////////////////////////////////////////////////
var format = localStorage.getItem("myValueFormat");
var myemail = localStorage.getItem("myValueEmail");
var myuserName = localStorage.getItem("myValueUserName");
var mypassword = localStorage.getItem("password");

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
var array_name = [];
var array_name2 = [];
// console.log(array_name);
firestore
  .collection("userList")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (
        doc.data().email == myemail &&
        doc.data().password == mypassword &&
        doc.data().userName == myuserName &&
        doc.data().age == format
      ) {
        array_name = doc.data().FID;
        array_name2 = doc.data().FID2;
      }

      for (let v = 0; v < array_name.length; v++) {
        fetch(
          `https://api.themoviedb.org/3/movie/${array_name[v]}?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US`,
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((item) => {
            // console.log(array_name[v]);
            const id = item.id;
            console.log(id);
            const title = item.title;
            const score = item.vote_average;
            const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
            const date = item.release_date;
            const year = date.toString().substr(0, 4);

            chooseone1 = false;
            var textHead1 = `<h2 id="type">The Favourite movies</h2>`;
            document.getElementById("type1").innerHTML = textHead1;

            const movie = `<a href="../select_movies/movie.html?${id}">
            <div class="movie">
                <img class="posters" src="${poster}" alt="Poster">
                <div id="textContainer">
                <h2 style="color: black" id="titleCard">${title}</h2>
                  <i id="sty1" class="fa fa-clock-o"></i>
                  <span id="sty2">2:23</span>
                  <span id="sty3">${year}</span>
                </div>
              </div></a>`;
            document.getElementById("FavouriteMovie").innerHTML += movie;
          })
          .catch((err) => {
            console.error(err);
          });
      }
      if (chooseone1 == true) {
        var textHead1 = `<h4 id="type">The Favourite movie it is not added</h4>`;
        document.getElementById("type1").innerHTML = textHead1;
      }
      /////////////////////////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////////////////////////
      for (let m = 0; m < array_name2.length; m++) {
        // favourite TvShow
        fetch(
          `https://api.themoviedb.org/3/tv/${array_name2[m]}?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US`,
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((item) => {
            const id = item.id;
            const title = item.name;
            const score = item.vote_average;
            const poster = "http://image.tmdb.org/t/p/w200/" + item.poster_path;
            const date = item.first_air_date;
            const year = date.substr(0, 4);
            chooseone2 = false;
            var textHead2 = `<h2 id="type">The Favourite TV show</h2>`;
            document.getElementById("type2").innerHTML = textHead2;

            const movie = `<a href="../select_tv_show/tv_show.html?${id}">
  <div class="movie">
      <img class="posters" src="${poster}" alt="Poster">
      <div id="textContainer">
        <h2 style="color: black;" id="titleCard">${title}</h2>
        <i id="sty1" class="fa fa-clock-o"></i>
        <span id="sty2">2:24</span>
        <span id="sty3">${year}</span>
      </div>
    </div></a>`;
            document.getElementById("FavouriteTvShow").innerHTML += movie;
          })
          .catch((err) => {
            console.error(err);
          });
      }
      if (chooseone2 == true) {
        var textHead2 = `<h4 id="type">The Favourite TV show it is not added</h4>`;
        document.getElementById("type2").innerHTML = textHead2;
      }
    });
  });
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

var emaile = null;
var passwordp = null;
var userNameu = null;
var agea = null;

var logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();

  firestore
    .collection("userList")
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

firestore
  .collection("userList")
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
firestore
  .collection("userList")
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
firestore
  .collection("userList")
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
