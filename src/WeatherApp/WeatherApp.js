import React, { useState } from 'react'
import { UserProvider } from './Components/UserContext'
import ComponentC from './Components/ComponentC'
import SearchCity from './Components/SearchCity'
import WeatherData from './Components/WeatherData'

function WeatherApp() {
    const [search, setSearch] =useState()
    const [weatherData, setWeatherData] = useState({});
  return (
    <>
      <SearchCity  search={search} setSearch={setSearch} setWeatherData={setWeatherData}/>
      <WeatherData weatherData={weatherData} />


      <UserProvider value="Mohit Garg">
        <ComponentC />
      </UserProvider>
    </>
  )
}

export default WeatherApp
