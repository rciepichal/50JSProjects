const urlApi =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=caff57993ccb971c50c9e2449b1df186&page=1';
const imgPath = 'https://image.tmdb.org/t/p/w500';
const searchApi = 'https://api.themoviedb.org/3/search/movie?api_key=caff57993ccb971c50c9e2449b1df186&query=';
const form = document.querySelector('#form');
const search = document.querySelector('#search');
const pageTitle = document.querySelector('#page-title');
const main = document.querySelector('#main');

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
  showMovies(data.results);
}

const showMovies = (movies) => {
  main.innerHTML = '';
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieWrapper = document.createElement('div');
    movieWrapper.classList.add('movie');
    movieWrapper.innerHTML = `
        <img
          src="${imgPath + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${ratingColor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
    `;
    main.append(movieWrapper);
  });
};

const ratingColor = (rating) => {
  if (rating >= 7) {
    return 'green';
  } else if (rating >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
};

// async function getMovies(url) {
//   const res = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.results));
// }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchPhrase = search.value;
  if (searchPhrase && searchPhrase !== '') {
    getMovies(searchApi + searchPhrase);
    search.value = '';
  } else {
    window.location.reload();
  }
  pageTitle.innerHTML = `Searching for: ' ${searchPhrase} '`;
});

getMovies(urlApi);
