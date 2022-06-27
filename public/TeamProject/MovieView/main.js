var search = document.getElementById("search");
var nav = document.getElementById("nav");
var logo = document.getElementById("logo");
var d = window.innerWidth;

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
// Most popular Movie show
fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=717eacf2852518ed1f0a438d848f9334&page=1",
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const list = data.results;

    list.map((item) => {
      const id = item.id;
      var title = item.title;
      const score = item.vote_average;
      const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
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
      document.getElementById("mostPopular").innerHTML += movie;
    });
  })

  .catch((err) => {
    console.error(err);
  });

// Top rated Movie show
fetch(
  "https://api.themoviedb.org/3/movie/top_rated?api_key=717eacf2852518ed1f0a438d848f9334&page=1",
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    const list = data.results;

    list.map((item) => {
      const id = item.id;
      const title = item.title;
      const score = item.vote_average;
      const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
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
      document.getElementById("topRated").innerHTML += movie;
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
      const id = item.id;
      const title = item.title;
      const score = item.vote_average;
      const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
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
      document.getElementById("upcoming").innerHTML += movie;
    });
  })
  .catch((err) => {
    console.error(err);
  });
