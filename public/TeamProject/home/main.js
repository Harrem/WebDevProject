fetch("https://imdb-api.com/en/API/Top250Movies/k_l748umtr", {
  method: "GET",
})
  .then((response) => response.json())
  .then(async(data) => {
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
