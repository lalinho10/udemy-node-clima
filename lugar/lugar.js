const axios = require('axios');

const getLugarLatLng = async(nombreLugar) => {

    const encodeParam = encodeURI(nombreLugar);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeParam }`,
        headers: { 'X-RapidAPI-Key': 'cd28a07430mshb5baa2427dd0194p1d21bbjsnb88104b6174b' }
    });

    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ nombreLugar }`);
    }

    const data = response.data.Results.filter(res => res.type === 'city')[0];

    const nombre = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return { nombre, lat, lng };

}

module.exports = {
    getLugarLatLng
}