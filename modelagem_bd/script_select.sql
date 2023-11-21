-- mostra o o nome das equipes e seus repectivos carros de acordo com os anos
SELECT e.nome, c.modelo, c.ano FROM carro as c JOIN equipe as e on fkEquipeCarro = idEquipe;

-- mostrando os mesmos dados de anteriormente, porém apenas de uma equipe(altere o nome)
SELECT e.nome, c.modelo, c.ano FROM carro as c JOIN equipe as e on fkEquipeCarro = idEquipe where e.nome = "Ferrari";