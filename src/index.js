import showWeather from './showWeather';
import './styles.css';

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-location');
const tempRadioCelsium = document.getElementById('celsium');
const tempRadioFahrenheit = document.getElementById('fahrenheit');

let tempRadioValue = 'metric';

searchBtn.addEventListener('click', (e) => {
  let tempRadioValue = 'metric';
  if (!tempRadioCelsium.checked) {
    tempRadioValue = 'us';
  }
  showWeather(searchInput.value, tempRadioValue);
});

tempRadioCelsium.addEventListener('click', (e) => {
  if (!tempRadioCelsium.checked) {
    tempRadioValue = 'us';
  } else {
    tempRadioValue = 'metric';
  }
  if (searchInput.value) {
    showWeather(searchInput.value, tempRadioValue);
  }
});

tempRadioFahrenheit.addEventListener('click', (e) => {
  if (!tempRadioCelsium.checked) {
    tempRadioValue = 'us';
  } else {
    tempRadioValue = 'metric';
  }
  if (searchInput.value) {
    showWeather(searchInput.value, tempRadioValue);
  }
});