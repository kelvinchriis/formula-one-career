var boxCars = document.querySelectorAll('.box-car');
var previousClickedBoxCar = null; // Para rastrear o box-car clicado anteriormente

function handleClick() {
    var id = this.getAttribute('data-id');

    // Remove o botão do box-car clicado anteriormente
    if (previousClickedBoxCar) {
        var existingButton = previousClickedBoxCar.querySelector('.avançar-button');
        if (existingButton) {
            existingButton.remove();
        }
    }

    // Crie e adicione o botão "Avançar" ao box-car selecionado
    var button = document.createElement('button');
    button.textContent = 'Avançar';
    button.className = 'avançar-button'; // Adicione uma classe para identificar o botão
    this.appendChild(button);

    var avancarButton = document.querySelector('.avançar-button');
    avancarButton.addEventListener('click', () => {
        window.location.href = "circuito.html"
    })

    // Atualize o box-car clicado anteriormente
    previousClickedBoxCar = this;
}

for (var i = 0; i < boxCars.length; i++) {
    boxCars[i].addEventListener('click', handleClick);
}
