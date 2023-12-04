var width = window.innerWidth;
    var height = window.innerHeight;
    var header = document.querySelector(".header");

    (function move() {
        // posição rolagem pagina
        var position_now = window.pageYOffset;

        // tamanho primeira imagem site
        var init_div = init.offsetHeight;
        var position = position_now / 2;

        //mudar cor header
        if (position_now > 0) {
            header.style.backgroundColor = "rgba(220, 10, 20, 1)"
            header.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.9)"
        } else {
            header.style.backgroundColor = "transparent"
            header.style.boxShadow = "0 1px 20px rgba(0, 0, 0, 0)"
        }


        // primeiro carro, ferrari, colocando margin right
        if (init_div * 0.70 >= position_now) {
            car1.style.marginRight = `${(position_now/2) - 500}px`
        } else {
            car1.style.marginRight = `-250px`
        }


        // segundo carro colocando margin left
        if (position_now >= init_div && init_div * 1.6 >= position_now) {
            car2.style.marginLeft = `${(position_now/1.5) - 1100}px`
        } else if(position_now < init_div){
            car2.style.marginLeft = `-600px`
        } else {
            car2.style.marginLeft = `-230px`
        }

         // segundo carro colocando margin left
        if (position_now >= init_div * 1.6 && init_div * 2 >= position_now) {
            car3.style.marginRight = `${(position_now/4) - 700}px`
        } else if(position_now < init_div * 1.6){
            car3.style.marginRight = `-500px`
        } else {
            car3.style.marginRight = `-250px`
        }

        setTimeout(move, 10)
    })();