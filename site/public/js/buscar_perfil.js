
var nomes_pilotos = [
    'null',
    'Ayton Senna',
    'Schumacher',
    'Hamilton',
    'Fangio',
    'Alain Prost',
    'Niki Lauda',
    'Jackie Stewart',
    'Vettel',
    'Alonso',
    'Nigell Mansell',
    'Fittipaldi',
    'Nelson Piquet',
    'Jochen Rindt',
    'Kimi Räikkönen',
]

function selectPerfil() {
    var id = this.getAttribute('data-id');
    perfil_user = id
    initt.style.display = "none"
    buscarPerfil(perfil_user)
}

function buscarPerfil(id) {
    fetch(`/perfil/myprofile/${id}`, {
        method: "GET",
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            return response.json();
        })
        .then(function (perfil) {
            console.log(perfil);

            if (!perfil || perfil.length === 0) {
                console.error('perfil não encontrado.');
                return;
            }

            var dataString = perfil[0].dataNasc;
            var data = new Date(dataString);
            var dia = String(data.getUTCDate()).padStart(2, '0');
            var mes = String(data.getUTCMonth() + 1).padStart(2, '0'); // O mês começa do zero, então adicionamos 1
            var ano = data.getUTCFullYear();
            var dataFormatada = dia + '-' + mes + '-' + ano;

            nome.innerHTML = `${perfil[0].username}`
            nasci.innerHTML = `${perfil[0].nacionalidade}`
            dtnasc.innerHTML = `${dataFormatada}`
            nome_pilot.innerHTML = `${nomes_pilotos[perfil[0].fkPilotoInspiracao]}`
            num.innerHTML = `${perfil[0].numeroCarro}`
            img_scud.src = `assets/escuderias/${perfil[0].fkEquipe}.png`
            img_car.src = `assets/carros/${perfil[0].fkCarro}.png`
            img_pilot.src = `assets/pilotos/${perfil[0].fkPilotoInspiracao}.png`
            img_circuit.src = `./assets/circuitos/${perfil[0].fkPistaPreferida}.png`
            if (perfil[0].imagem != null) {
                img_user_profile.style.backgroundImage = `url('assets/usuarios/${perfil[0].imagem}')`
            } else {
                img_user_profile.style.backgroundImage = `url('assets/index/user.jpg')`

            }
            over.style.display = "block"
        })
        .catch(function (error) {
            console.error('Erro:', error);
        });
}

function voltar() {
    over.style.display = "none"
    initt.style.display = "flex"
}