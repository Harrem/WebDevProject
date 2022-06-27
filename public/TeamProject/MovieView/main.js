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
// ?????????????????????????????????????????????????????????????????????????????????????????????????
fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=717eacf2852518ed1f0a438d848f9334&page=1",
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
      // const backdrop = "http://image.tmdb.org/t/p/w1280/" + item.backdrop_path;
      const year = item.first_air_date;

      const movie = `<a href="../select_movies/movie.html?${id}">
      <div class="movie">
          <img class="posters" src="${poster}" alt="Poster">
          <div id="textContainer">
            <h2 style="color: black" id="title">${title}</h2>
            <span style="color: black">${year}</span>
            <span style="color: black">${score}</span>
          </div>
        </div></a>`;
      document.getElementById("mostPopular").innerHTML += movie;
    });
  })

//   .catch((err) => {
//     console.error(err);
//   });

// //topRated Tv Show
// fetch(
//   "https://api.themoviedb.org/3/movie/top_rated?api_key=717eacf2852518ed1f0a438d848f9334&page=1",
//   {
//     method: "GET",
//   }
// )
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data);
//     const list = data.results;

//     list.map((item) => {
//       const id = item.id;
//       const title = item.name;
//       const score = item.vote_average;
//       const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
//       // const backdrop = "http://image.tmdb.org/t/p/w1280/" + item.backdrop_path;
//       const year = item.first_air_date;

//       const movie = `<a href="../select_movies/movie.html?${id}">
//       <div class="movie">
//           <img class="posters" src="${poster}" alt="Poster">
//           <div id="textContainer">
//           <h2 style="color: black" id="title">${title}</h2>
//           <span style="color: black">${year}</span>
//           <span style="color: black">${score}</span>
//           </div>
//         </div></a>`;
//       document.getElementById("topRated").innerHTML += movie;
//     });
//   })

//   .catch((err) => {
//     console.error(err);
//   });

// //latest Tv Show
// fetch(
//   "https://api.themoviedb.org/3/movie/airing_today?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&page=1",
//   {
//     method: "GET",
//   }
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     const list = data.results;

//     list.map((item) => {
//       const id = item.id;
//       const title = item.name;
//       const score = item.vote_average;
//       const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
//       // const backdrop = "http://image.tmdb.org/t/p/w1280/" + item.backdrop_path;
//       const year = item.first_air_date;

//       const movie = `<a href="../select_movies/movie.html?${id}">
//       <div class="movie">
//             <img class="posters" src="${poster}" alt="Poster">
//             <div id="textContainer">
//             <h2 style="color: black" id="title">${title}</h2>
//             <span style="color: black">${year}</span>
//             <span style="color: black">${score}</span>
//             </div>
//           </div></a>`;
//       document.getElementById("upcoming").innerHTML += movie;
//     });
//   })

//   .catch((err) => {
//     console.error(err);
//   });
/////////////////////////////////////////////////////////////////////////////////////////////////

// const APIURL =
//   "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCHAPI =
//   "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// const main = document.getElementById("main");
// const form = document.getElementById("form");
// const search = document.getElementById("search");

// const getMovies = async (url) => {
//   const resp = await fetch(url);
//   const respData = await resp.json();

//   console.log(respData);

//   showMovies(respData.results);
// };

// const showMovies = (movies) => {
//   main.innerHTML = "";

//   movies.forEach((movie) => {
//     const { poster_path, title, vote_average, overview } = movie;

//     const movieEl = document.createElement("div");
//     movieEl.classList.add("movie");

//     movieEl.innerHTML = `
//       <img class="posters"
//         src="${IMGPATH + poster_path}"
//         alt="${title}"
//       />`;
//     main.appendChild(movieEl);
//   });
// };

// getMovies(APIURL);

// const getClassByRate = (vote) => {
//   if (vote >= 8) {
//     return "green";
//   } else if (vote >= 5) {
//     return "orange";
//   } else {
//     return "red";
//   }
// };

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const searchTerm = search.value;

//   if (searchTerm) {
//     getMovies(SEARCHAPI + searchTerm);
//     search.value = "";
//   }
// });
