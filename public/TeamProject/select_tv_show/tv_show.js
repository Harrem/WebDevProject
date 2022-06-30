var search = document.getElementById("search");
var nav = document.getElementById("nav");
var logo = document.getElementById("logo");
var d = window.innerWidth;
var id = location.search.substring(1);
// var ss = console.log(id);
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
  `https://api.themoviedb.org/3/tv/${id}/videos?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US`,
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const list = data.results;

    list.map((item) => {
      var trailer = "n/a";
      if (item.name == "Final Trailer" || item.name == "Witness") {
        trailer = "https://www.youtube.com/embed/" + item.key;
        // console.log(trailer);

        document.getElementById(
          "videoContainer"
        ).innerHTML += `<iframe id="ytplayer" width="560" height="315" src=${trailer}
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>`;
      }
    });
  });

fetch(
  `https://api.themoviedb.org/3/tv/${id}?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US`,
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    var list = data.genres;
    const last_air_date = data.last_air_date;
    const genres = data.genres;
    var genre = "";
    const county = data.production_countries;
    var country = "";
    const spoken = data.spoken_languages;
    var spokenlan = "";
    const created_by = data.created_by;
    var created = "";

    genres.forEach((element) => {
      genre += element["name"] + ", ";
    });
    genre = genre.substring(0, genre.length - 2);

    created_by.forEach((element) => {
      created += element["name"];
    });

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
    ).innerHTML += `<div id="list"><span id="released">Released: </span><span id="sp">${last_air_date}</span></br></br>
                                       <span id="released">Genre: </span><span id="sp">${genre}</span></br></br>
                                       <span id="released">Original language: </span><span id="sp">${data.original_language}</span></br></br>
                                       <span id="released">Created by: </span><span id="sp">${created}</span></br></br>
                                       <span id="released">Country: </span><span id="sp">${country}</span></br></br>
                                       <span id="released">Spoken languages: </span><span id="sp">${spokenlan}</span></br></br>
                                       <span id="released">Number of seasons: </span><span id="sp">${data.number_of_seasons}</span></br></br>
                                       <span id="released">Number of episodes: </span><span id="sp">${data.number_of_episodes}</span></br></br>
        </div>`;
    // });
  });
