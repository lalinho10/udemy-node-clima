const argv =
    require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Nombre de la ciudad de la que se va a consultar el clima',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}