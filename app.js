const colors = require('colors/safe');

const argv = require('./configuracion/yargs').argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



const getInfo = async(ciudad) => {
    try {
        const coords = await lugar.getLugarLatLng(ciudad);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `La temperatura en ${ coords.nombre } es de ${ temp } °C`;
    } catch (err) {
        return `No se pudo determinar la temperatura de ${ ciudad }. ${ err }`;
    }
}

getInfo(argv.direccion).then(console.log);