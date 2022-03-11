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

// var rgb = getAverageRGB(document.getElementById('topimg'));
//     document.body.style.backgroundColor = `rgb(${rgb.r},${rgb.g},${rgb.b})`;

// function getAverageRGB(imgEl) {

//     var blockSize = 10, // only visit every 5 pixels
//         defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
//         canvas = document.createElement('canvas'),
//         context = canvas.getContext && canvas.getContext('2d'),
//         data, width, height,
//         i = -4,
//         length,
//         rgb = {r:0,g:0,b:0},
//         count = 0;

//     if (!context) {
//         return defaultRGB;
//     }

//     height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
//     width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

//     context.drawImage(imgEl, 0, 0);

//     try {
//         data = context.getImageData(0, 0, width, height);
//     } catch(e) {
//         /* security error, img on diff domain */alert('x');
//         return defaultRGB;
//     }

//     length = data.data.length;

//     while ( (i += blockSize * 4) < length ) {
//         ++count;
//         rgb.r += data.data[i];
//         rgb.g += data.data[i+1];
//         rgb.b += data.data[i+2];
//     }

//     // ~~ used to floor values
//     rgb.r = ~~(rgb.r/count);
//     rgb.g = ~~(rgb.g/count);
//     rgb.b = ~~(rgb.b/count);

//     return rgb;
// }

// var containingDiv = document.getElementById("slideshowdiv");

// containingDiv.style.height = window.innerHeight;
