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
