import Weather from '../API/index';

export const getWeatherByKeyword = (keyword) => {
    Weather.get()
    .then()
    .catch((error) => {
        console.log(error)
    })

}

