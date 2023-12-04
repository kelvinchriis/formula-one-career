var database = require("../database/config");

function pilotosFavoritos() {
    var query = `select fkPilotoInspiracao, count(*) as repeticoes from perfil group by fkPilotoInspiracao order by repeticoes desc;`;
    console.log(query)
    return database.executar(query);
}

function equipesFavoritos() {
    var query = `select fkEquipe, count(*) as repeticoes from perfil group by fkEquipe order by repeticoes desc;`;
    console.log(query)
    return database.executar(query);
}

module.exports = {
    pilotosFavoritos,
    equipesFavoritos
}
