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
  // nav.style.backgroundImage = `linear-gradient(to bottom, rgba(30, 30, 30,${range}), rgb(0, 0, 0, 0))`

  if (window.scrollY >= 400) {
    range = 255;
  }
}

fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=717eacf2852518ed1f0a438d848f9334",
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
      // const backdrop = "http://image.tmdb.org/t/p/w1280/" + item.backdrop_path;
      const year = item.release_date;

      const movie = `<div class="movie">
          <img class="posters" src="${poster}" alt="Poster">
          <div id="textContainer">
            <h2 id="title">${title}</h2>
            <h4>${year}</h4>
            <h4>${score}</h4>
          </div>
        </div>`;
      document.getElementById("mostPopular").innerHTML += movie;
    });
  })

  .catch((err) => {
    console.error(err);
  });

//topRatedMovieList
fetch(
  "https://api.themoviedb.org/3/movie/top_rated?api_key=717eacf2852518ed1f0a438d848f9334",
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
      // const backdrop = "http://image.tmdb.org/t/p/w1280/" + item.backdrop_path;
      const year = item.release_date;

      const movie = `<div class="movie">
          <img class="posters" src="${poster}" alt="Poster">
          <div id="textContainer">
            <h2 id="title">${title}</h2>
            <h4>${year}</h4>
            <h4>${score}</h4>
          </div>
        </div>`;
      document.getElementById("topRated").innerHTML += movie;
    });
  })

  .catch((err) => {
    console.error(err);
  });

//TrendingMovies
fetch(
  "https://api.themoviedb.org/3/movie/upcoming?api_key=717eacf2852518ed1f0a438d848f9334",
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
      // const backdrop = "http://image.tmdb.org/t/p/w1280/" + item.backdrop_path;
      const year = item.release_date;

      const movie = `<div class="movie">
            <img class="posters" src="${poster}" alt="Poster">
            <div id="textContainer">
              <h2 id="title">${title}</h2>
              <h4>${year}</h4>
              <h4>${score}</h4>
            </div>
          </div>`;
      document.getElementById("upcoming").innerHTML += movie;
    });
  })

  .catch((err) => {
    console.error(err);
  });
