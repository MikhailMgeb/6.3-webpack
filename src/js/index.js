import API_KEY from './api-key';
import '../css/index.css';

const page = document.querySelector('.page');
const image = document.createElement('img');

fetch(
  `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${API_KEY}`,
)
  .then((response) => response.json())
  .then((word) => {
    image.classList.add('theme');
    return fetch(
      `https://api.unsplash.com/search/photos?query=${word.word}&client_id=Sc_x-ousk_bVIWSlFcHp9sER1cCtnxwmZDd8quQnCyk`,
    );
  })
  .then((response) => response.json())
  .then((url) => {
    if (url.total === 0) {
      return fetch(
        'https://api.unsplash.com/photos/random?client_id=Sc_x-ousk_bVIWSlFcHp9sER1cCtnxwmZDd8quQnCyk',
      )
        .then((response) => response.json());
    }

    return url.results[0];
  })
  .finally(() => {
    const loader = document.querySelector('.lds-ring');
    loader.classList.add('hidden');
  })
  .catch(() => { 'error!'; })
  .then((url) => {
    image.src = url.urls.full;
    page.appendChild(image);
  })
  .catch('нет фотки!!!');
