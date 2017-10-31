import axios from 'axios';

const API_KEY = "eca25ab6100acd547b15294bbc29e4d0";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); //returning promise data
  return {
    type: FETCH_WEATHER,
    payload: request
    //assign promise to payload, when it returns redux-promise sees watches promise and resolve the request
  }
}
