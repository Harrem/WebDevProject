// a06187ffd9msh9bac53ad74ef1e2p181599jsnca4e52539af3

// fetch("https://mdblist.p.rapidapi.com/?s=fast", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "mdblist.p.rapidapi.com",
// 		"x-rapidapi-key": "ef6fcf4b28msh58a7484a9865dcdp12f547jsnadd89bf49e5f"
// 	}
// })
// .then(response => response.json())
// .then(data => {
//     const list = data.search;
//     console.log(data.search)
//     list.map((item) => {
//         const title = item.title;
//         const year = item.year;
//         const score = item.score;
//         const movie = '<li><h2>'+ title +'</h2><h2>'+ year +'</h2><h2>'+score+'</h2></li>'
//         document.querySelector(".movies").innerHTML += movie;
//     })
// })
// .catch(err => {
// 	console.error(err);
// });

fetch("https://imdb-api.com/en/API/Top250Movies/k_l748umtr" ,{
    "method":"GET"
})

.then(response => response.json())
.then(data => {
    console.log(data)
    const list = data.items;

    list.map((item) => {
                const title = item.fullTitle;
                const year = item.year;
                const score = item.imDbRating;
                const img = item.image;
                const movie = '<div class="movie"><img src='+img+' alt="Lamp"><h2>'+ title +'</h2><h2>'+ year +'</h2><h2>'+score+'</h2></div>'
                document.getElementById("movies").innerHTML += movie;
            })
})



.catch(err => {
    console.error(err);
});


{/* <img src="img" alt="Lamp" width="32" height="32"></img> */}