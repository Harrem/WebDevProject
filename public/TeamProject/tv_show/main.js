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

var changingAge = localStorage.getItem("changingAge");
console.log(changingAge);
// var geners = null;
var geners = changingAge;

function myFunctionAge1() {
  const element = document.getElementById("type");
  element.scrollIntoView();
  geners = "without_genres";
  //Most popular TV show
  for (let i = 1; i <= 3; i++) {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
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
          var title = item.name;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
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
          document.getElementById("mostPopular").innerHTML += movie;
        });
      })

      .catch((err) => {
        console.error(err);
      });
  }
  document.getElementById("mostPopular").innerHTML = "";
  //topRated Tv Show
  for (let i = 1; i < 3; i++) {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
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
          const title = item.name;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
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
          document.getElementById("topRated").innerHTML += movie;
        });
      })

      .catch((err) => {
        console.error(err);
      });
  }
  document.getElementById("topRated").innerHTML = "";

  //latest Tv Show
  for (let i = 1; i < 3; i++) {
    fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&page=${i}&${geners}`,
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
          const title = item.name;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
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
          document.getElementById("upcoming").innerHTML += movie;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  document.getElementById("upcoming").innerHTML = "";
}

function myFunctionAge2() {
  const element = document.getElementById("type");
  element.scrollIntoView();
  geners = "with_genres=16";
  //Most popular TV show
  for (let i = 1; i < 3; i++) {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
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
          var title = item.name;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
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
          document.getElementById("mostPopular").innerHTML += movie;
        });
      })

      .catch((err) => {
        console.error(err);
      });
  }
  document.getElementById("mostPopular").innerHTML = "";
  //topRated Tv Show
  for (let i = 1; i < 3; i++) {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
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
          const title = item.name;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
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
          document.getElementById("topRated").innerHTML += movie;
        });
      })

      .catch((err) => {
        console.error(err);
      });
  }
  document.getElementById("topRated").innerHTML = "";
  //latest Tv Show
  for (let i = 1; i < 3; i++) {
    fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&page=${i}&${geners}`,
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
          const title = item.name;
          const score = item.vote_average;
          const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
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
          document.getElementById("upcoming").innerHTML += movie;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  document.getElementById("upcoming").innerHTML = "";
}

//Most popular TV show
for (let i = 1; i < 3; i++) {
  fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
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
        var title = item.name;
        const score = item.vote_average;
        const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
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
        document.getElementById("mostPopular").innerHTML += movie;
      });
    })

    .catch((err) => {
      console.error(err);
    });
}

//topRated Tv Show
for (let i = 1; i < 3; i++) {
  fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=717eacf2852518ed1f0a438d848f9334&page=${i}&${geners}`,
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
        const title = item.name;
        const score = item.vote_average;
        const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
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
        document.getElementById("topRated").innerHTML += movie;
      });
    })

    .catch((err) => {
      console.error(err);
    });
}

//latest Tv Show
for (let i = 1; i < 3; i++) {
  fetch(
    `https://api.themoviedb.org/3/tv/airing_today?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&page=${i}&${geners}`,
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
        const title = item.name;
        const score = item.vote_average;
        const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
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
        document.getElementById("upcoming").innerHTML += movie;
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
