import React from 'react'

function WeatherData(props) {
  const {weatherData} = props;
 
  return (
    <div>
      <h1>Weather Data for {weatherData.name}</h1>
      <p>Temperature: {weatherData.main?.temp}</p>
      <p>Feels Like: {weatherData.main?.feels_like}</p>
      <p>Minimum Temperature: {weatherData.main?.temp_min}</p>
      <p>Maximum Temperature: {weatherData.main?.temp_max}</p>
      <p>Pressure: {weatherData.main?.pressure}</p>
      <p>Humidity: {weatherData.main?.humidity}</p>
    </div>
  )
}
export default WeatherData
