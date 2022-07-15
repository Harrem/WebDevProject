var search = document.getElementById("search");
var nav = document.getElementById("nav");
var logo = document.getElementById("logo");
var d = window.innerWidth;
var id = location.search.substring(1);
// console.log(id);
var v = false;

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
  nav.style.backgroundColor = `rgb(20,20,20,${range})`;

  if (window.scrollY >= 400) {
    range = 255;
  }
}
fetch(
  `https://api.themoviedb.org/3/movie/${id}/videos?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US`,
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    const list = data.results;

    list.map((item) => {
      var trailer = "n/a";
      if (
        item.name == "Official Trailer" ||
        item.name == "CENTAURO | Teaser tráiler | Netflix España"
      ) {
        trailer = "https://www.youtube.com/embed/" + item.key;
        // console.log(trailer);

        document.getElementById(
          "videoContainer"
        ).innerHTML += `<iframe id="ytplayer" src=${trailer}
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>`;
      }
    });
  });
////////////////////////////////////////////////
/// the caracter in ther movie

fetch(
  `https://api.themoviedb.org/3/movie/${id}?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US`,
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    var list = data.genres;
    const release_date = data.release_date;
    const genres = data.genres;
    var genre = "";
    const county = data.production_countries;
    var country = "";
    const spoken = data.spoken_languages;
    var spokenlan = "";

    genres.forEach((element) => {
      genre += element["name"] + ", ";
    });
    genre = genre.substring(0, genre.length - 2);

    county.forEach((element) => {
      country += element["name"];
    });

    spoken.forEach((element) => {
      spokenlan += element["english_name"] + ", ";
    });
    spokenlan = spokenlan.substring(0, spokenlan.length - 2);

    // list.map((item) => {
    document.getElementById(
      "genres"
    ).innerHTML += `<div id="list"><span id="released">Released: </span><span id="sp">${release_date}</span></br></br>
                                     <span id="released">Genre: </span><span id="sp">${genre}</span></br></br>
                                     <span id="released">Original language: </span><span id="sp">${data.original_language}</span></br></br>
                                     <span id="released">Country: </span><span id="sp">${country}</span></br></br>
                                     <span id="released">Spoken languages: </span><span id="sp">${spokenlan}</span></br></br>
                                     <input type="button" value="Favourite" id="bb"></br></br>
      </div>`;
    // });
    var submitButton = document.getElementById("bb");
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      var f = [];
      var dataID = data.id;
      // var f2 = [];
      // var dataID2 = data.id;
      // console.log(dataID);

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
              for (let i = 0; i < doc.data().FID.length; i++) {
                if (doc.data().FID[i] == dataID) {
                  var items = doc.data().FID[i];
                  var i2 = i;
                }
              }
              if (items == dataID) {
                f = doc.data().FID;
                f.splice(i2, 1);
                console.log(`${doc.id} => ${doc.data().email}`);
                firestore
                  .collection("userList")
                  .doc(doc.id)
                  .update({ FID: f })
                  .then(() => {
                    alert("The movie removed of faivourete");
                  })
                  .then(() => {
                    window.location.reload();
                  });
              } else {
                f = doc.data().FID;
                f.push(dataID);
                console.log(`${doc.id} => ${doc.data().email}`);
                firestore
                  .collection("userList")
                  .doc(doc.id)
                  .update({ FID: f })
                  .then(() => {
                    alert("The movie added to faivourete");
                  })
                  .then(() => {
                    window.location.reload();
                  });
              }
            }
          });
        });
      /////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////
      // firestore
      //   .collection("userList")
      //   .get()
      //   .then((querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //       if (
      //         doc.data().email == myemail &&
      //         doc.data().password == mypassword &&
      //         doc.data().userName == myuserName &&
      //         doc.data().age == format
      //       ) {
      //         for (let i = 0; i < doc.data().FID2.length; i++) {
      //           if (doc.data().FID2[i] == dataID2) {
      //             var items = doc.data().FID2[i];
      //             var i2 = i;
      //           }
      //         }
      //         if (items == dataID2) {
      //           f2 = doc.data().FID2;
      //           f2.splice(i2, 1);
      //           console.log(`${doc.id} => ${doc.data().email}`);
      //           firestore
      //             .collection("userList")
      //             .doc(doc.id)
      //             .update({ FID2: f2 })
      //             .then(() => {
      //               alert("The movie removed of faivourete");
      //             })
      //             .then(() => {
      //               window.location.reload();
      //             });
      //         } else {
      //           f2 = doc.data().FID2;
      //           f2.push(dataID2);
      //           console.log(`${doc.id} => ${doc.data().email}`);
      //           firestore
      //             .collection("userList")
      //             .doc(doc.id)
      //             .update({ FID2: f2 })
      //             .then(() => {
      //               alert("The movie added to faivourete");
      //             })
      //             .then(() => {
      //               window.location.reload();
      //             });
      //         }
      //       }
      //     });
      //   });
    });
  });
