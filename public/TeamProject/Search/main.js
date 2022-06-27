var keyword = location.search.substring(1).split("=");
keyword = keyword[1];
console.log(keyword);

fetch(
  `https://api.themoviedb.org/3/search/multi?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US&query=${keyword}&page=1&include_adult=false`,
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
      const poster = "http://image.tmdb.org/t/p/w200/" + item.poster_path;
      const date = item.release_date;
      const year = date.substring(0, 4);
      console.log(typeof date);

      const movie = `<a href="../select_tv_show/tv_show.html?${id}">
      <div class="movie">
          <img class="posters" src="${poster}" alt="Poster">
          <div id="textContainer">
            <h2 style="color: black;" id="titleCard">${title}</h2>
            <i id="sty1" class="fa fa-clock-o"></i>
            <span id="sty2">${score}</span>
            <span id="sty3">${year}</span>
          </div>
        </div></a>`;
      document.getElementById("searchResult").innerHTML += movie;
    });
  })

  .catch((err) => {
    console.error(err);
  });
