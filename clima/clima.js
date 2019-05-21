const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`Https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5f12b210fbbe7957c62aec9c218645fa&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}