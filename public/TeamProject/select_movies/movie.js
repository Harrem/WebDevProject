var id = location.search.substring(1);
console.log(id);
//photo people
fetch(
  `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US`,
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((item) => {
    console.log(item);
    const key = item[0].key;
    console.log(typeof key);
    const url = "https://www.youtube.com/watch?v=${key}";

    var movie =
      '<video controls class="video" id="video" preload="metadata" poster="poster.jpg"><source src="${url}"></source></video>';

    document.getElementById("video").innerHTML += movie;
  });

fetch(
  `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US`,
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((item) => {
    console.log(item);
    const key = item[0].key;
    console.log(typeof key);
    const url = "https://www.youtube.com/watch?v=${key}";

    var movie =
      '<video controls class="video" id="video" preload="metadata" poster="poster.jpg"><source src="${url}"></source></video>';

    document.getElementById("video").innerHTML += movie;
  });
