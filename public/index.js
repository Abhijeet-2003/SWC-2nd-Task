const API_KEY = 'api_key=f9629bc7a44212f5713e9f641b48c7d2';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL +'/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmbd.org/t/p/w500';
const search_URL = BASE_URL + '/search/movie?' + API_KEY ;

 
const cards = document.getElementById('movies')

    fetch(API_URL)
    .then(res=>res.json())

    .then(data=>{
        const movies=data.results;
        let card='';
        movies.forEach(movie=>{
            
            card+=`<div class="mov hover:shadow-2xl hover:scale-105 transition ease-out duration-300">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="images">
                <p class="title ">${movie.title}</p>
                <p class="rate">Ratings: ${movie.vote_average}</p>
            </div>`
        cards.innerHTML = card;
        });
    });


const searchBar=document.forms['search'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    const term=e.target.value.toLowerCase();
    const names=cards.getElementsByTagName('div');
    Array.from(names).forEach(function(name){
        const title=name.querySelector('div > p').textContent;
        if(title.toLowerCase().includes(term))
        {
            name.style.display='block';
        }
        else{
            name.style.display='none';
        }
    });
});
