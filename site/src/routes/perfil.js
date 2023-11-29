var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload');
var perfilController = require("../controllers/perfilController");


router.post("/cadastrar", upload.single('foto'),  function (req, res) {
    perfilController.cadastrar(req, res);
})

router.put("/editar/:idUser", function (req, res) {
    perfilController.implementarFkPerfil(req, res);
});

router.get("/buscar/:username", function (req, res) {
  perfilController.buscarPorUsername(req, res);
});

router.get("/perfil/:username", function (req, res) {
  perfilController.buscarPerfil(req, res);
});

router.get("/myprofile/:idperfil", function (req, res) {
  perfilController.meuPerfil(req, res);
});


module.exports = router;