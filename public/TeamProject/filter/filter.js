// var all = document.getElementById("ALL").value;
// var movie = document.getElementById("MOVIE").value;
// var tvshow = document.getElementById("TVSHOW").value;

////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/////////////FILTER THE MOVIE ///////////////////////////////////////////////
var fltuer = document.getElementById("fltuer");
var movie2022 = null;
var movie2021 = null;
var movie2020 = null;
var movie2019 = null;
var movie2018 = null;
var movieolder = null;
var movieall = null;

function myallfilter() {
  movieall = "2022";
  movie2021 = true;
  movie2020 = true;
  movie2019 = true;
  movie2018 = true;
  movieolder = true;
  movie2022 = true;
}

function my2022filter() {
  movie2022 = document.getElementById("2022").value;
  movie2021 = true;
  movie2020 = true;
  movie2019 = true;
  movie2018 = true;
  movieolder = true;
  movieall = true;
}

function my2021filter() {
  movie2021 = document.getElementById("2021").value;
  movie2022 = true;
  movie2020 = true;
  movie2019 = true;
  movie2018 = true;
  movieolder = true;
  movieall = true;
}

function my2020filter() {
  movie2020 = document.getElementById("2020").value;
  movie2021 = true;
  movie2022 = true;
  movie2019 = true;
  movie2018 = true;
  movieolder = true;
  movieall = true;
}

function my2019filter() {
  movie2019 = document.getElementById("2019").value;
  movie2021 = true;
  movie2020 = true;
  movie2022 = true;
  movie2018 = true;
  movieolder = true;
  movieall = true;
}

function my2018filter() {
  movie2018 = document.getElementById("2018").value;
  movie2021 = true;
  movie2020 = true;
  movie2019 = true;
  movie2022 = true;
  movieolder = true;
  movieall = true;
}

function myolderfilter() {
  movieolder = "2017";
  movie2021 = true;
  movie2020 = true;
  movie2019 = true;
  movie2018 = true;
  movie2022 = true;
  movieall = true;
}

var type = null;
var chooosemovie = true;
var chooosetv = true;
function mymovie() {
  type = "movie";
  chooosetv = false;
  chooosemovie = true;
  console.log(chooosemovie);
  movie2021 = true;
  movie2020 = true;
  movie2019 = true;
  movie2018 = true;
  movie2022 = true;
  movieall = true;
  movieolder = true;
  document.getElementById("allReleased").checked = false;
  document.getElementById("2022").checked = false;
  document.getElementById("2021").checked = false;
  document.getElementById("2020").checked = false;
  document.getElementById("2019").checked = false;
  document.getElementById("2018").checked = false;
  document.getElementById("older").checked = false;
}
function mytv() {
  type = "tv";
  chooosemovie = false;
  chooosetv = true;
  console.log(chooosetv);
  movie2021 = true;
  movie2020 = true;
  movie2019 = true;
  movie2018 = true;
  movie2022 = true;
  movieall = true;
  movieolder = true;
  document.getElementById("allReleased").checked = false;
  document.getElementById("2022").checked = false;
  document.getElementById("2021").checked = false;
  document.getElementById("2020").checked = false;
  document.getElementById("2019").checked = false;
  document.getElementById("2018").checked = false;
  document.getElementById("older").checked = false;
}
// function mymovie() {
fltuer.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 1; i < 2; i++) {
    if (chooosemovie == true) {
      console.log(chooosemovie);
      fetch(
        `https://api.themoviedb.org/3/discover/${type}?api_key=717eacf2852518ed1f0a438d848f9334&sort_by=popularity.desc&with_genres&page=${i}`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          const list = data.results;
          list.map((item) => {
            console.log(item.genre_ids);
            const id = item.id;
            const title = item.title;
            const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
            const date = item.release_date;
            const year = date.toString().substr(0, 4);

            function myactionfilter() {}
            // console.log(movie2022);
            if (year <= movieall) {
              if (
                movie2022 == true ||
                movie2021 == true ||
                movie2020 == true ||
                movie2019 == true ||
                movie2018 == true ||
                movieolder == true
              ) {
                movie2022 = false;
                movie2021 = false;
                movie2020 = false;
                movie2019 = false;
                movie2018 = false;
                movieolder = false;
                document.getElementById("mymoviefilter").innerHTML = "";
              }
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
              document.getElementById("mymoviefilter").innerHTML += movie;
            }
            if (year == movie2022) {
              if (
                movieall == true ||
                movie2021 == true ||
                movie2020 == true ||
                movie2019 == true ||
                movie2018 == true ||
                movieolder == true
              ) {
                movie2021 = false;
                movie2020 = false;
                movie2019 = false;
                movie2018 = false;
                movieolder = false;
                movieall = false;
                document.getElementById("mymoviefilter").innerHTML = "";
              }
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
              document.getElementById("mymoviefilter").innerHTML += movie;
            }
            if (year == movie2021) {
              if (
                movieall == true ||
                movie2022 == true ||
                movie2020 == true ||
                movie2019 == true ||
                movie2018 == true ||
                movieolder == true
              ) {
                movieall = false;
                movie2022 = false;
                movie2020 = false;
                movie2019 = false;
                movie2018 = false;
                movieolder = false;
                document.getElementById("mymoviefilter").innerHTML = "";
              }
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
              document.getElementById("mymoviefilter").innerHTML += movie;
            }
            if (year == movie2020) {
              if (
                movieall == true ||
                movie2021 == true ||
                movie2022 == true ||
                movie2019 == true ||
                movie2018 == true ||
                movieolder == true
              ) {
                movieall = false;
                movie2021 = false;
                movie2022 = false;
                movie2019 = false;
                movie2018 = false;
                movieolder = false;
                document.getElementById("mymoviefilter").innerHTML = "";
              }
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
              document.getElementById("mymoviefilter").innerHTML += movie;
            }
            if (year == movie2019) {
              if (
                movieall == true ||
                movie2021 == true ||
                movie2022 == true ||
                movie2020 == true ||
                movie2018 == true ||
                movieolder == true
              ) {
                movieall = false;
                movie2021 = false;
                movie2022 = false;
                movie2020 = false;
                movie2018 = false;
                movieolder = false;
                document.getElementById("mymoviefilter").innerHTML = "";
              }
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
              document.getElementById("mymoviefilter").innerHTML += movie;
            }
            if (year == movie2018) {
              if (
                movieall == true ||
                movie2021 == true ||
                movie2022 == true ||
                movie2019 == true ||
                movie2020 == true ||
                movieolder == true
              ) {
                movieall = false;
                movie2021 = false;
                movie2022 = false;
                movie2019 = false;
                movie2020 = false;
                movieolder = false;
                document.getElementById("mymoviefilter").innerHTML = "";
              }
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
              document.getElementById("mymoviefilter").innerHTML += movie;
            }
            if (year <= movieolder) {
              if (
                movieall == true ||
                movie2021 == true ||
                movie2022 == true ||
                movie2019 == true ||
                movie2018 == true ||
                movie2020 == true
              ) {
                movieall = false;
                movie2021 = false;
                movie2022 = false;
                movie2019 = false;
                movie2018 = false;
                movie2020 = false;
                document.getElementById("mymoviefilter").innerHTML = "";
              }
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
              document.getElementById("mymoviefilter").innerHTML += movie;
            }
          });
        });

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////TVSHOW////////////////////////////////////////////////////////////////////////////////////////////////
    }
  }
  for (let i = 1; i < 2; i++) {
    if (chooosetv == true) {
      console.log(chooosetv);
      fetch(
        // `https://api.themoviedb.org/3/discover/${movies}?api_key=717eacf2852518ed1f0a438d848f9334&sort_by=popularity.desc&page=${i}`,
        `https://api.themoviedb.org/3/discover/${type}?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&sort_by=popularity.desc&page=${i}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          const list = data.results;
          list.map((item) => {
            // console.log(item);
            const id = item.id;
            const title = item.name;
            const poster = "http://image.tmdb.org/t/p/w200/" + item.poster_path;
            const date = item.first_air_date;
            const year = date.substr(0, 4);
            if (year <= movieall) {
              if (
                movie2022 == true ||
                movie2021 == true ||
                movie2020 == true ||
                movie2019 == true ||
                movie2018 == true ||
                movieolder == true
              ) {
                movie2022 = false;
                movie2021 = false;
                movie2020 = false;
                movie2019 = false;
                movie2018 = false;
                movieolder = false;
                document.getElementById("mymoviefilter").innerHTML = "";
              }
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
              document.getElementById("mymoviefilter").innerHTML += movie;
            }
            if (year == movie2022) {
              if (
                movieall == true ||
                movie2021 == true ||
                movie2020 == true ||
                movie2019 == true ||
                movie2018 == true ||
                movieolder == true
              ) {
                movie2021 = false;
                movie2020 = false;
                movie2019 = false;
                movie2018 = false;
                movieolder = false;
                movieall = false;
                document.getElementById("mymoviefilter").innerHTML = "";
              }
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
              document.getElementById("mymoviefilter").innerHTML += movie;
            }
            if (year == movie2021) {
              if (
                movieall == true ||
                movie2022 == true ||
                movie2020 == true ||
                movie2019 == true ||
                movie2018 == true ||
                movieolder == true
              ) {
                movieall = false;
                movie2022 = false;
                movie2020 = false;
                movie2019 = false;
                movie2018 = false;
                movieolder = false;
                document.getElementById("mymoviefilter").innerHTML = "";
              }
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
              document.getElementById("mymoviefilter").innerHTML += movie;
            }
            if (year == movie2020) {
              if (
                movieall == true ||
                movie2021 == true ||
                movie2022 == true ||
                movie2019 == true ||
                movie2018 == true ||
                movieolder == true
              ) {
                movieall = false;
                movie2021 = false;
                movie2022 = false;
                movie2019 = false;
                movie2018 = false;
                movieolder = false;
                document.getElementById("mymoviefilter").innerHTML = "";
              }
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
              document.getElementById("mymoviefilter").innerHTML += movie;
            }
            if (year == movie2019) {
              if (
                movieall == true ||
                movie2021 == true ||
                movie2022 == true ||
                movie2020 == true ||
                movie2018 == true ||
                movieolder == true
              ) {
                movieall = false;
                movie2021 = false;
                movie2022 = false;
                movie2020 = false;
                movie2018 = false;
                movieolder = false;
                document.getElementById("mymoviefilter").innerHTML = "";
              }
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
              document.getElementById("mymoviefilter").innerHTML += movie;
            }
            if (year == movie2018) {
              if (
                movieall == true ||
                movie2021 == true ||
                movie2022 == true ||
                movie2019 == true ||
                movie2020 == true ||
                movieolder == true
              ) {
                movieall = false;
                movie2021 = false;
                movie2022 = false;
                movie2019 = false;
                movie2020 = false;
                movieolder = false;
                document.getElementById("mymoviefilter").innerHTML = "";
              }
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
              document.getElementById("mymoviefilter").innerHTML += movie;
            }
            if (year <= movieolder) {
              if (
                movieall == true ||
                movie2021 == true ||
                movie2022 == true ||
                movie2019 == true ||
                movie2018 == true ||
                movie2020 == true
              ) {
                movieall = false;
                movie2021 = false;
                movie2022 = false;
                movie2019 = false;
                movie2018 = false;
                movie2020 = false;
                document.getElementById("mymoviefilter").innerHTML = "";
              }
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
              document.getElementById("mymoviefilter").innerHTML += movie;
            }
          });
        });
    }
  }
});
