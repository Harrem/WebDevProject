
fetch("https://api.themoviedb.org/3/movie/popular?api_key=717eacf2852518ed1f0a438d848f9334", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const list = data.results;
    list.map((item) => {
      const id =  item.id;
      const title = item.title;
      const score = item.vote_average;
      const poster ="http://image.tmdb.org/t/p/w500/" +item.poster_path;
      // const backdrop = "http://image.tmdb.org/t/p/w1280/" + item.backdrop_path;
      const year = item.release_date;
      
        
      const movie =
      `<li class="splide__slide">
      <img class="posters" src="${poster}" alt="Poster">
      <div id="textContainer">
      <h2 id="title">${title}</h2>
      <h4>${year}</h4>
      <h4>${score}</h4>
      </div>
      </li>`;
      document.getElementsByClassName("splide__list")[0].innerHTML += movie;
    });
  })

  .catch((err) => {
    console.error(err);
  })
