var id = location.search.substring(1);
console.log(id);

fetch(
  `https://api.themoviedb.org/3/movie/${id}?api_key=717eacf2852518ed1f0a438d848f9334&language=en-US`,
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((item) => {
    console.log(item);

    const id = item.id;
    const title = item.title;
    const description = item.overview;
    const rating = item.vote_average;
    const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
    const backdrop = "http://image.tmdb.org/t/p/w1280/" + item.backdrop_path;
    const year = item.release_date;

    // const poster = data.poster.poster;
    // poster.map((item)=>{
    //   console.log(typeof(item));
    // })
    const movie = `<div class="mySlides" id="" >
            <img id="topimg" class="backgroundImage"
                src="${backdrop}"
                alt="cover image">
            <img src="${poster}"
                alt="" id="poster">
            <div id="container">
                <div id="textContainer">
                    <h1 id="title">${title}</h1>
                    <p id="description">${description}</p>
                    <div id="details">
                        <ol>
                            <li class="details_li" id="imdbRating">
                                <img class="details_logo" id="imdb" src="./1-tomato.png">
                                ${rating}
                            </li>
                            <li class="details_li" id="imdbRating">
                                <img class="details_logo" id="rottentomato" src="./2-imdb.png">
                                
                            </li>
                            <li class="details_li" id="tmdbRating">
                                <img class="details_logo" id="imdb" src="./3-tmdb.svg">
                                tmdb rating
                            </li>
                        </ol>
                    </div>
                    <div id="buttons">
                        <button class="button">Watch Trailor</button>
                        <button class="button">Add To Wishlist</button>
                    </div>
                </div>
            </div>
        </div>`;

    document.getElementById("slideshowdiv").innerHTML += movie;
  });
