var database = require("../database/config");

function buscarPorUsername(username) {
  var query = `select idPerfil from perfil where username = '${username}'`;
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function meuPerfil(fkPerfil) {
  var query = `SELECT * FROM perfil as p join usuario as u on fk_perfil = idPerfil where idPerfil = ${fkPerfil}`
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function buscarPerfil(username) {
  var query = `select username from perfil where username like '${username}%'`;
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function implementarFkPerfil(fkPerfil, idUser) {
  var instrucao = `UPDATE usuario SET fk_perfil = ${fkPerfil} WHERE idUsuario = ${idUser};`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrar(username, nacionalidade, nasc, numero, biografia, equipe, carro, pista, piloto) {
  var query = `insert into perfil values (null, '${username}', '${nasc}', '${nacionalidade}', ${numero},' ${biografia}', ${equipe}, ${carro}, ${pista}, ${piloto})`;
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

module.exports = {
  implementarFkPerfil,
  buscarPorUsername,
  cadastrar,
  buscarPerfil,
  meuPerfil
};
