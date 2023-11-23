var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    perfilController.cadastrar(req, res);
})

router.put("/editar/:idUser", function (req, res) {
    perfilController.implementarFkPerfil(req, res);
});

router.get("/buscar/:username", function (req, res) {
  perfilController.buscarPorUsername(req, res);
});

router.get("/perfil/:username", function (req, res) {
  perfilController.(buscarPerfil)(req, res);
});


module.exports = router;