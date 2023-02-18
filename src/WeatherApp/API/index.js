import axios from 'axios';

const Weather = axios.create({
    baseURL: process.env.WEATHER_BASE_URL,
    timeout: 10000,
  });

  export default Weather;