var changingAge = localStorage.getItem("changingAge");
console.log(changingAge);
// var geners = null;
var geners = changingAge;
fetch(
  `https://api.themoviedb.org/3/tv/popular?api_key=717eacf2852518ed1f0a438d848f9334&${geners}`,
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
      const description = item.overview;
      const rating = item.vote_average;
      const poster = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
      const backdrop = "http://image.tmdb.org/t/p/w1280/" + item.backdrop_path;

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
                            <img class="details_logo" id="imdb" src="./2-imdb.png">
                            ${rating}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>`;

      document.getElementById("slideshowdiv").innerHTML += movie;
    });
  })
  .catch((err) => {
    console.error(err);
  });

var slideIndex = 0;
carousel();

var img = null;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}
