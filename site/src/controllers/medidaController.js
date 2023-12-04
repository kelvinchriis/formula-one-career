var medidaModel = require("../models/medidaModel");


function pilotosFavoritos(req, res) {
    medidaModel.pilotosFavoritos().then((resultado) => {
        console.log(resultado);
        res.status(200).json(resultado);
    });
}

function equipesFavoritos(req, res) {
    medidaModel.equipesFavoritos().then((resultado) => {
        console.log(resultado);
        res.status(200).json(resultado);
    });
}

module.exports = {
    pilotosFavoritos,
    equipesFavoritos
}