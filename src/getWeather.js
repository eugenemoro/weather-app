export default async function getWeather(location, units) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${units}&key=SPXWGH69RFGZFRUXYSFRKSHE2&contentType=json`
  );
  const data = response.json();
  return data;
}
