process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

// Se você estiver utilizando o Ambiente de Produção (SQL Server na nuvem Azure, remoto), comente a linha 1 e deixe habilitada a linha 2 onde está o valor process.env.AMBIENTE_PROCESSO = "producao";
// Se você estiver utilizando o Ambiente de Desenvolvimento (MySQL Workbench, local), comente a linha 2 e deixe habilitada a linha 1 onde está o valor process.env.AMBIENTE_PROCESSO = "desenvolvimento";

var express = require("express");
var cors = require("cors");
var path = require("path");

// se estiver em Ambiente de Desenvolvimento o servidor irá rodar na porta 3333
// senão se estiver em Ambiente de Produção o servidor irá rodar na porta 8080
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var comentariosRouter = require("./src/routes/comentarios");
var medidasRouter = require("./src/routes/medidas");
var perfilRouter = require("./src/routes/perfil");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/comentarios", comentariosRouter);
app.use("/medidas", medidasRouter);
app.use("/perfil", perfilRouter);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminhor: http://localhost:${PORTA}`)
});
