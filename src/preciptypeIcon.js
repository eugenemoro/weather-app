export default function preciptypeIcon(value) {
  switch (value) {
    case 'rain':
      return '🌧';
      break;
    case 'cloudy':
      return '☁️';
      break;
    case 'partly-cloudy-day':
      return '🌥';
      break;
    case 'snow':
      return '🌨';
      break;
    case 'clear-day':
      return '☀️';
      break;
    case 'fog':
      return '😶‍🌫️';
      break;
    default:
      return value;
  }
}
