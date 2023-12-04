var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/pilotos", function (req, res) {
    medidaController.pilotosFavoritos(req, res);
})

router.get("/equipes", function (req, res) {
    medidaController.equipesFavoritos(req, res);
})

module.exports = router;