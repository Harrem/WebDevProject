var search = document.getElementById("search");
var nav = document.getElementById("nav");
var logo = document.getElementById("logo");
var d = window.innerWidth;

var v = false;

function icon() {
  document.getElementById("navigation").innerHTML += `<img src="./icon.png"/>`;
}
if (v) {
  icon();
}

window.onresize = function () {
  if (window.innerWidth <= 1080) {
    nav.style.fontSize = 0 + "px";
    nav.style.scale = 0 + "px";
    search.style.opacity = 0 + "%";
    search.disabled = true;
    v = true;
    // search.style.width = 50 + "px";
    // search.style.height = 50 + "px";
    // search.style.marginRight = 40 + "px";
    // search.style.borderRadius = 25 + "px";
    logo.style.float = "none";
    logo.style.marginLeft = window.innerWidth / 2 - 130 + "px";
  } else if (window.innerWidth > 1080) {
    nav.style.fontSize = 25 + "px";
    nav.style.scale = 1 + "px";
    search.disabled = false;
    // search.style.width = 250 + "px";
    // search.style.height = 35 + "px";
    // search.style.marginRight = 100 + "px";
    // search.style.borderRadius = 30 + "px";
    search.style.opacity = 100 + "%";
    logo.style.float = "left";
    logo.style.marginLeft = 0 + "px";
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
      const movie =
        '<div class="movie"><img src=' +
        img +
        ' alt="Lamp"><h2>' +
        title +
        "</h2><h2>" +
        year +
        "</h2><h2>" +
        score +
        "</h2></div>";
      document.getElementById("movies").innerHTML += movie;
    });
  })

  .catch((err) => {
    console.error(err);
  });

{
  /* <img src="img" alt="Lamp" width="32" height="32"></img> */
}
