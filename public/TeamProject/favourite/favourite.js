var search = document.getElementById("search");
var nav = document.getElementById("nav");
var logo = document.getElementById("logo");
var d = window.innerWidth;
var id = location.search.substring(1);

var v = false;
var chooseone1 = true;
var chooseone2 = true;
var chooseone3 = true;
var chooseone4 = true;

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
var array_name = "";
var array_name2 = "";
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
        // array_name2 = doc.data().FID2;
        // console.log(array_name);
      }

      ////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////
      /// top rate movies
      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=717eacf2852518ed1f0a438d848f9334&page=1",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const list = data.results;

          list.map((item) => {
            for (let v = 0; v < array_name.length; v++) {
              if (item.id == array_name[v]) {
                const id = item.id;
                // console.log(id);
                const title = item.title;
                const score = item.vote_average;
                const poster =
                  "http://image.tmdb.org/t/p/w500/" + item.poster_path;
                const date = item.release_date;
                const year = date.toString().substr(0, 4);

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
                document.getElementById("mostPopularMovie").innerHTML += movie;
              }
            }
          });
        })

        .catch((err) => {
          console.error(err);
        });

      //Up coming Movie show
      fetch(
        "https://api.themoviedb.org/3/movie/airing_today?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&page=1",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const list = data.results;

          list.map((item) => {
            for (let v = 0; v < array_name.length; v++) {
              if (item.id == array_name[v]) {
                const id = item.id;
                const title = item.title;
                const score = item.vote_average;
                const poster =
                  "http://image.tmdb.org/t/p/w500/" + item.poster_path;
                const date = item.first_air_date;
                const year = date.toString().substr(0, 4);

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
                document.getElementById("mostPopularMovie").innerHTML += movie;
              }
            }
          });
        })
        .catch((err) => {
          console.error(err);
        });
      //////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////
      //topPopelarMovie
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=717eacf2852518ed1f0a438d848f9334",
        // "https://api.themoviedb.org/3/movie/${id}?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then(async (data) => {
          // console.log(data);
          const list = data.results;
          console.log(list);

          list.map((item) => {
            for (let v = 0; v < array_name.length; v++) {
              if (item.id == array_name[v]) {
                // console.log(array_name);
                const id = item.id;
                const title = item.title;
                const score = item.vote_average;
                const poster =
                  "http://image.tmdb.org/t/p/w500/" + item.poster_path;
                const date = item.release_date;
                const year = date.substr(0, 4);

                chooseone1 = false;
                var textHead1 = `<h2 id="type">The movies Favourite</h2>`;
                document.getElementById("type1").innerHTML = textHead1;

                const movie = `<a href="../select_movies/movie.html?${id}">
        <div class="movie">
            <img class="posters" src="${poster}" alt="Poster">
            <div id="textContainer">
              <h2 style="color: black;" id="titleCard">${title}</h2>
              <i id="sty1" class="fa fa-clock-o"></i>
              <span id="sty2">2:24</span>
              <span id="sty3">${year}</span>
            </div>
          </div></a>`;
                document.getElementById("mostPopularMovie").innerHTML += movie;
              }
            }
          });
          if (chooseone1 == true) {
            var textHead1 = `<h4 id="type">The movies Favourite it is not added</h4>`;
            document.getElementById("type1").innerHTML = textHead1;
          }
        })

        .catch((err) => {
          console.error(err);
        });

      //topPopelarTvShow
      fetch(
        "https://api.themoviedb.org/3/tv/popular?api_key=717eacf2852518ed1f0a438d848f9334&page=1",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          const list = data.results;

          list.map((item) => {
            for (let v = 0; v < array_name.length; v++) {
              if (item.id == array_name[v]) {
                console.log(array_name);
                const id = item.id;
                const title = item.name;
                const score = item.vote_average;
                const poster =
                  "http://image.tmdb.org/t/p/w200/" + item.poster_path;
                // const backdrop = "http://image.tmdb.org/t/p/w1280/" + item.backdrop_path;
                const date = item.first_air_date;
                const year = date.substr(0, 4);
                chooseone2 = false;
                var textHead2 = `<h2 id="type">The TV show Favourite</h2>`;
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
                document.getElementById("mostPopularTvShow").innerHTML += movie;
              }
            }
          });
          if (chooseone2 == true) {
            var textHead2 = `<h4 id="type">The TV show Favourite it is not added</h4>`;
            document.getElementById("type2").innerHTML = textHead2;
          }
        })

        .catch((err) => {
          console.error(err);
        });

      //latestMovie
      fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=717eacf2852518ed1f0a438d848f9334",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          const list = data.results;
          console.log(list);

          list.map((item) => {
            for (let v = 0; v < array_name.length; v++) {
              if (item.id == array_name[v]) {
                // console.log(array_name);
                const id = item.id;
                const title = item.title;
                const score = item.vote_average;
                const poster =
                  "http://image.tmdb.org/t/p/w500/" + item.poster_path;
                const date = item.release_date;
                const year = date.toString().substr(0, 4);

                // chooseone3 = false;
                // var textHead3 = `<h2 id="type">Latest movie Favourite</h2>`;
                // document.getElementById("type3").innerHTML = textHead3;

                const movie = `<a href="../select_movies/movie.html?${id}">
        <div class="movie">
            <img class="posters" src="${poster}" alt="Poster">
            <div id="textContainer">
              <h2 style="color: black;" id="titleCard">${title}</h2>
              <i id="sty1" class="fa fa-clock-o"></i>
              <span id="sty2">2:24</span>
              <span id="sty3">${year}</span>
            </div>
          </div></a>`;
                document.getElementById("mostPopularMovie").innerHTML += movie;
              }
            }
          });
          // if (chooseone3 == true) {
          //   var textHead3 = `<h4 id="type">Latest movie Favourite it is not added</h4>`;
          //   document.getElementById("type3").innerHTML = textHead3;
          // }
        })

        .catch((err) => {
          // console.error(err);
        });

      //latestTvShow
      fetch(
        "https://api.themoviedb.org/3/tv/airing_today?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&page=1",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          const list = data.results;

          list.map((item) => {
            for (let v = 0; v < array_name.length; v++) {
              if (item.id == array_name[v]) {
                // console.log(array_name);
                const id = item.id;
                const title = item.name;
                const score = item.vote_average;
                const poster =
                  "http://image.tmdb.org/t/p/w500/" + item.poster_path;
                // const backdrop = "http://image.tmdb.org/t/p/w1280/" + item.backdrop_path;
                const date = item.first_air_date;
                const year = date.substr(0, 4);
                // chooseone4 = false;
                // var textHead4 = `<h2 id="type">Latest TV show Favourite</h2>`;
                // document.getElementById("type4").innerHTML = textHead4;

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
                document.getElementById("mostPopularTvShow").innerHTML += movie;
              }
            }
          });
          // if (chooseone4 == true) {
          //   var textHead4 = `<h4 id="type">Latest TV show Favourite it is not added</h4>`;
          //   document.getElementById("type4").innerHTML = textHead4;
          // }
        })

        .catch((err) => {
          console.error(err);
        });

      ////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////
      fetch(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=717eacf2852518ed1f0a438d848f9334&page=1",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          const list = data.results;

          list.map((item) => {
            for (let v = 0; v < array_name.length; v++) {
              if (item.id == array_name[v]) {
                const id = item.id;
                const title = item.name;
                const score = item.vote_average;
                const poster =
                  "http://image.tmdb.org/t/p/w500/" + item.poster_path;
                const date = item.first_air_date;
                const year = date.toString().substr(0, 4);

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
                document.getElementById("mostPopularTvShow").innerHTML += movie;
              }
            }
          });
        })

        .catch((err) => {
          console.error(err);
        });

      //latest Tv Show
      fetch(
        "https://api.themoviedb.org/3/tv/airing_today?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&page=1",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const list = data.results;

          list.map((item) => {
            for (let v = 0; v < array_name.length; v++) {
              if (item.id == array_name[v]) {
                const id = item.id;
                const title = item.name;
                const score = item.vote_average;
                const poster =
                  "http://image.tmdb.org/t/p/w500/" + item.poster_path;
                const date = item.first_air_date;
                const year = date.toString().substr(0, 4);

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
                document.getElementById("mostPopularTvShow").innerHTML += movie;
              }
            }
          });
        })
        .catch((err) => {
          console.error(err);
        });
    });
  });
