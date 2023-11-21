create database formula_one_carrer;
use formula_one_carrer;

create table equipe (
	idEquipe int primary key,
    nome varchar(45),
    paisSede varchar(45),
    anoFundacao int,
    chefeEquipe varchar(45)
);

create table carro (
	idCarro int primary key,
    ano int,
    modelo varchar(45),
    fkEquipeCarro int,
    constraint fkEquipeCarro foreign key(fkEquipeCarro) references equipe(idEquipe)
);

create table piloto (
	idPiloto int primary key,
    nome varchar(50),
    nacionalidade varchar(45),
    qtdTitulo int,
    dataNasc date,
    numeroCarro int,
    fkEquipePiloto int,
    constraint fkEquipePiloto foreign key(fkEquipePiloto) references equipe(idEquipe)
);

create table pista (
	idPista int primary key,
    nome varchar(45),
    pais varchar(45),
    comprimento float,
    qtaVolta int
);

create table perfil (
	idPerfil int primary key auto_increment,
    dataNasc date,
    nacionalidade varchar(45),
    numeroCarro int,
    biografia varchar(500),
    fkEquipe int,
    fkCarro int,
    fkPistaPreferida int,
    fkPilotoInspiracao int,
    constraint fkPistaPrefe foreign key(fkPistaPreferida) references pista(idPista),
    constraint fkInspiracao foreign key(fkPilotoInspiracao) references piloto(idPiloto),
    constraint fkEquipe foreign key(fkEquipe) references equipe(idEquipe),
    constraint fkCarro foreign key(fkCarro) references  carro(idCarro)
);

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(50),
    email varchar(45),
    senha varchar(45),
    fk_perfil int,
    constraint fkPerfil foreign key(fk_perfil) references perfil(idPerfil)
);