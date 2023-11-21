var database = require("../database/config");

function buscarPorUsername(username) {
  var query = `select idPerfil from perfil where username = '${username}'`;

  return database.executar(query);
}

function implementarFkPerfil(fkPerfil, idUser) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", fkPerfil, idUser);
    
    var instrucao = `
        UPDATE usuario SET fk_perfil = ${fkPerfil} WHERE idUsuario = ${idUser};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrar(username, nacionalidade, nasc, numero, biografia, equipe, carro, pista, piloto) {
  var query = `insert into perfil values (null, '${username}', '${nacionalidade}', '${nasc}', ${numero},' ${biografia}', ${equipe}, ${carro}, ${pista}, '${piloto}')`;

  return database.executar(query);
}

module.exports = { 
  implementarFkPerfil, 
  buscarPorUsername, 
  cadastrar
};
