import { React, useEffect } from "react";

function SearchCity(props) {
  const { search, setSearch, setWeatherData } = props;
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (e.target.value.length >= 3) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=5cfed79e948e29bdb240227e7a370959`
      )
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
        .catch((error) => console.log(error));
    }
  };
  useEffect(() => {
    console.log("test");
  }, []);

  return (
    <><div>
      <input
        type="text"
        placeholder="Enter the city name..."
        value={search}
        onChange={handleChange}
      />
      </div>
    </>
  );
}

export default SearchCity;
