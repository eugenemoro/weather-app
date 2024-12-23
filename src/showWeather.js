import preciptypeIcon from './preciptypeIcon';
import getWeather from './getWeather';

export default async function showWeather(location, units) {
  const weatherContainer = document.getElementById('content');
  weatherContainer.innerHTML = '';

  const data = await getWeather(location, units);

  const locationName = document.createElement('h1');
  locationName.innerText = data.resolvedAddress;
  weatherContainer.appendChild(locationName);

  const dayCards = document.createElement('div');
  dayCards.className = 'day-cards';
  weatherContainer.appendChild(dayCards);

  const dayWeatherArray = data.days;

  for (let i = 0; i < dayWeatherArray.length; i += 1) {
    const dateValue = dayWeatherArray[i].datetime;
    const descriptionValue = dayWeatherArray[i].description;
    const preciptypeValue = dayWeatherArray[i].icon;
    const minTempValue = dayWeatherArray[i].tempmin;
    const maxTempValue = dayWeatherArray[i].tempmax;

    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';

    const date = document.createElement('h2');
    date.innerText = dateValue;
    dayCard.appendChild(date);

    const description = document.createElement('p');
    description.innerText = descriptionValue;
    dayCard.appendChild(description);

    const preciptype = document.createElement('p');
    preciptype.className = 'preciptype';
    preciptype.innerText = preciptypeIcon(preciptypeValue);
    dayCard.appendChild(preciptype);

    const minTemp = document.createElement('p');
    minTemp.innerText = `Min Temperature: ${minTempValue} ${units === 'metric' ? '°C' : '°F'}`;
    dayCard.appendChild(minTemp);

    const maxTemp = document.createElement('p');
    maxTemp.innerText = `Max Temperature: ${maxTempValue} ${units === 'metric' ? '°C' : '°F'}`;
    dayCard.appendChild(maxTemp);

    dayCards.appendChild(dayCard);
  }
}
