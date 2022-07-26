// var all = document.getElementById("ALL").value;
// var movie = document.getElementById("MOVIE").value;
// var tvshow = document.getElementById("TVSHOW").value;

// ////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////
// /////////////FILTER THE MOVIE ///////////////////////////////////////////////

// function mymovie() {
//   fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
//     {
//       method: "GET",
//     }
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(data);
//       const list = data.results;
//       list.map((item) => {
//         console.log(item);
//         const id = item.id;
//         const title = item.title;
//         const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
//         const date = item.release_date;
//         const year = date.toString().substr(0, 4);

//         const movie = `<a href="../select_movies/movie.html?${id}">
//                       <div class="movie">
//                           <img class="posters" src="${poster}" alt="Poster">
//                           <div id="textContainer">
//                           <h2 style="color: black" id="titleCard">${title}</h2>
//                             <i id="sty1" class="fa fa-clock-o"></i>
//                             <span id="sty2">2:23</span>
//                             <span id="sty3">${year}</span>
//                           </div>
//                         </div></a>`;
//         document.getElementById("mymoviefilter").innerHTML += movie;
//       });
//     });
// }
// //   .then((item) => {
// //     const id = item.id;
// //     console.log(id);
// //     const title = item.title;
// //     const score = item.vote_average;
// //     const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
// //     const date = item.release_date;
// //     const year = date.toString().substr(0, 4);

// //     const movie = `<a href="../select_movies/movie.html?${id}">
// //               <div class="movie">
// //                   <img class="posters" src="${poster}" alt="Poster">
// //                   <div id="textContainer">
// //                   <h2 style="color: black" id="titleCard">${title}</h2>
// //                     <i id="sty1" class="fa fa-clock-o"></i>
// //                     <span id="sty2">2:23</span>
// //                     <span id="sty3">${year}</span>
// //                   </div>
// //                 </div></a>`;
// //     document.getElementById("FavouriteMovie").innerHTML += movie;
// //   });
// // /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
