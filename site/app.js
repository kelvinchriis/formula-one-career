process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var comentariosRouter = require("./src/routes/comentarios");
var medidasRouter = require("./src/routes/medidas");
// var aquariosRouter = require("./src/routes/aquarios");
var perfilRouter = require("./src/routes/perfil");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/comentarios", comentariosRouter);
app.use("/medidas", medidasRouter);
// app.use("/aquarios", aquariosRouter);
app.use("/perfil", perfilRouter);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminhor: http://localhost:${PORTA}`)
});
