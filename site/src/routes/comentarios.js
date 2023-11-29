var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload');
var comentariosController = require("../controllers/comentariosController");

router.get("/listar", function (req, res) {
    comentariosController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    comentariosController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    comentariosController.pesquisarDescricao(req, res);
});

router.post("/publicar", upload.single('foto'), function (req, res) {
    comentariosController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    comentariosController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    comentariosController.deletar(req, res);
});

module.exports = router;