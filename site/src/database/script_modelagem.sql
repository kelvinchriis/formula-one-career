create database formula_one_carrer;
use formula_one_carrer;

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(50),
    email varchar(45),
    senha varchar(45)
);

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

create table pista (
	idPista int primary key,
    nome varchar(45),
    pais varchar(45),
    comprimento float,
    qtaVolta int
);

create table piloto (
	idPiloto int primary key,
    nome varchar(50),
    nacionalidade varchar(45),
    qtdTitulo int,
    dataNasc date,
    idadeInicio int,
    fkEquipePiloto int,
    constraint fkEquipePiloto foreign key(fkEquipePiloto) references equipe(idEquipe)
);

create table perfil (
	idPerfil int primary key auto_increment,
    dataNasc date,
    nacionalidade varchar(45),
    idadeInicio int,
    biografia varchar(500),
    fkPistaPreferida int,
    fkPilotoInspiracao int,
    constraint fkPistaPrefe foreign key(fkPistaPreferida) references pista(idPista),
    constraint fkInspiracao foreign key(fkPilotoInspiracao) references piloto(idPiloto)
);

create table carreira (
	idCarreira int auto_increment,
    fkUsuario int,
    primary key(idCarreira, fkUsuario),
    fkPerfil int,
    fkEquipe int,
    constraint fkUser foreign key(fkUsuario) references usuario(idUsuario),
    constraint fkPerfil foreign key(fkPerfil) references perfil(idPerfil),
    constraint fkEquipe foreign key(fkEquipe) references equipe(idEquipe)
);
