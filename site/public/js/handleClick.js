var boxCars = document.querySelectorAll('.box-car');
var card = document.querySelectorAll('.card');
var pilot = document.querySelectorAll('.card-pilot');

var carro = null
var pista = null
var piloto = null

function selectCar() {
    var id = this.getAttribute('data-id');
    carro = id
    pistas()
}

function selectPista() {
    var id = this.getAttribute('data-id');
    pista = id
    pilotos()
}

function selectPiloto() {
    var id = this.getAttribute('data-id');
    piloto = id
    finalizar()
}

for (var i = 0; i < boxCars.length; i++) {
    boxCars[i].addEventListener('click', selectCar);
}

for (var i = 0; i < card.length; i++) {
    card[i].addEventListener('click', selectPista);
}

for (var i = 0; i < pilot.length; i++) {
    pilot[i].addEventListener('click', selectPiloto);
}
