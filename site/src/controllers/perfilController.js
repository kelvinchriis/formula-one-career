var perfilModel = require("../models/perfilModel");

function implementarFkPerfil(req, res) {
    var fkPerfil = req.body.fk_perfil;
    var idUser = req.params.idUser;

    perfilModel.implementarFkPerfil(fkPerfil, idUser)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function buscarPerfil(req, res) {
  var username = req.params.username;

  perfilModel.buscarPerfil(username).then((resultado) => {
      console.log(resultado);
      res.status(200).json(resultado);
  });
}

function meuPerfil(req, res){
  var fk_perfil = req.params.idperfil;

  perfilModel.meuPerfil(fk_perfil).then((resultado) => {
    console.log(resultado);
    res.status(200).json(resultado);
  });
}

function buscarPorUsername(req, res) {
  var username = req.params.username;

  perfilModel.buscarPorUsername(username).then((resultado) => {
    if (resultado.length == 1) {
      console.log(resultado);
      res.json({
        id_perfil: resultado[0].idPerfil
      });
    } else {
      res.status(403).send("perfil não existe)");
    }
    
  });
}

function cadastrar(req, res) {
  var imagem = req.file.filename;

  const {username, nacionalidade, nasc, numero, biografia, equipe, carro, pista, piloto} = req.body



  if (username == undefined) {
    res.status(400).send("username está undefined!");
  } else if (nacionalidade == undefined) {
    res.status(400).send("nacionalidade está undefined!");
  } else if (nasc == undefined) {
    res.status(400).send("nasc está undefined!");
  } else if (numero == undefined) {
    res.status(400).send("inicio está undefined!");
  } else if (biografia == undefined) {
    res.status(400).send("biografia está undefined!");
  } else if (equipe == undefined) {
    res.status(400).send("equipe está undefined!");
  } else if (carro == undefined) {
    res.status(400).send("carro está undefined!");
  } else if (pista == undefined) {
    res.status(400).send("pista está undefined!");
  } else if (piloto == undefined) {
    res.status(400).send("piloto está undefined!");
  } else {

    perfilModel.cadastrar(username, nacionalidade, nasc, numero, biografia, equipe, carro, pista, piloto, imagem)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function salvar(req, res) {
  const imagem = req.file.filename;

  const {nome, email} = req.body

  const usuario = { nome, email, imagem }
  
  usuarioModel.salvar(usuario)
  .then(resultado => {
    res.status(201).send("Usuario criado com sucesso");
  }).catch(err => {
    res.status(500).send(err);
  });
}

module.exports = {
  implementarFkPerfil,
  buscarPorUsername,
  cadastrar,
  buscarPerfil,
  meuPerfil,
  salvar
};
