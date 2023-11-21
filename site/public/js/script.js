var escuderia = null


function perfil() {
    clearAll()
    perfill.style.display = "flex"
}
function escuderias() {
    clearAll()
    escuderiass.style.display = "flex"
}
function ferrari() {
    clearAll()
    ferrarii.style.display = "flex"
    escuderia = 1
}
function mercedes() {
    clearAll()
    mercedess.style.display = "flex"
    escuderia = 2
}
function redbull() {
    clearAll()
    redbulll.style.display = "flex"
    escuderia = 3
}
function williams() {
    clearAll()
    williamss.style.display = "flex"
    escuderia = 4
}
function pistas() {
    clearAll()
    pistass.style.display = "flex"
}
function pilotos() {
    clearAll()
    pilotoss.style.display = "flex"
}
function finalizar() {
    clearAll()
    finalizarr.style.display = "flex"
}
function clearAll(){
    mercedess.style.display = "none"
    ferrarii.style.display = "none"
    escuderiass.style.display = "none"
    redbulll.style.display = "none"
    williamss.style.display = "none"
    pistass.style.display = "none"
    pilotoss.style.display = "none"
    perfill.style.display = "none"
    finalizarr.style.display = "none"
}
function sair() {
    sessionStorage.clear();
    window.location = "login.html";
}