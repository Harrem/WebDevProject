var search = document.getElementById("search");
var icon_search = document.getElementById("icon_search");
var nav = document.getElementById("nav");

window.onresize = function () {
  if (window.innerWidth <= 1080) {
    nav.style.fontSize = 0 + "px";
    nav.style.scale = 0 + "px";
    search.style.opacity = 0 + "%";
    search.disabled = true;
    search.style.width = 0 + "px";
    search.style.height = 0 + "px";
  } else if (window.innerWidth > 1080) {
    nav.style.fontSize = 25 + "px";
    nav.style.scale = 1 + "px";
    search.disabled = false;
    search.style.width = 250 + "px";
    search.style.height = 35 + "px";
    search.style.opacity = 100 + "%";
  }
};

fetch("https://imdb-api.com/en/API/Top250Movies/k_l748umtr", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const list = data.items;

    list.map((item) => {
      const title = item.fullTitle;
      const year = item.year;
      const score = item.imDbRating;
      const img = item.image;
      // const movie = '<div class="movie"><img src='+img+' alt="Lamp"><h2>'+ title +'</h2><h2>'+ year +'</h2><h2>'+score+'</h2></div>'
      const movie = `<div class="contentForm">
                <a href="#">
                    <img id="movies" src="${img}" />
                </a>
                <div id="name">${title}</div>
            </div>`;
      document.getElementById("box-movies").innerHTML += movie;
    });
  })

  .catch((err) => {
    console.error(err);
  });
