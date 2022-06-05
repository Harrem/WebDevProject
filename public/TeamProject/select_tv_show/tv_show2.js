fetch("https://imdb-api.com/en/API/BoxOffice/k_bmfod7pe", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    const list = data.items;

    list.map((item) => {
      const id = item.id;
      const title = item.fullTitle;
      const year = item.year;
      const score = item.imDbRating;
      const img = item.image;
      // var backgroundImg ="";
      fetch(`https://imdb-api.com/en/API/Images/k_bmfod7pe/${id}/Short`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          const array = data.items;

          const backgroundImg = '"' + array[0].image + '"';
          console.log(backgroundImg);
          //   array.map((item) => {
          //     console.log(typeof(item.image));
          //     backgroundImg = item.image;

          // })
        });

      const movie =
        '<div class="mySlides">' +
        '<img id="topimg" src="' +
        backgroundImg +
        '" alt="coverimage">' +
        '<img id="poster" src="' +
        img +
        '" alt="Lamp">';
      '<div id="textContainer">' +
        "<h2>" +
        title +
        "</h2>" +
        "<h2>" +
        score +
        "</h2>" +
        "<h2>" +
        year +
        "</h2>" +
        "</div>" +
        "</div>";
      document.getElementById("slideshowdiv").innerHTML += movie;
    });
  });

var slideIndex = 0;
carousel();

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
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
