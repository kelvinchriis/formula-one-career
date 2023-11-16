var width = window.innerWidth;
    var height = window.innerHeight;
    var header = document.querySelector(".header");
    car_grid_1.marginLeft = `100px`
    for (var qtdbloco = width / 30; qtdbloco >= 0; qtdbloco--) {
        // div1.innerHTML += `
        //     <div style="width:20px; height: 30px; background-color: red;"></div>
        //     <div style="width:20px; height: 30px; background-color: rgba(0, 0, 0, 0.1);"></div>
        // `
        // div2.innerHTML += `
        //     <div style="width:20px; height: 25px; background-color: rgba(200,0,0);"></div>
        //     <div style="width:20px; height: 25px; background-color: white;"></div>
        // `
    };

    (function move() {
        var position_now = window.pageYOffset;
        var init_div = init.offsetHeight;
        var sideFer = sideCarFer.offsetWidth;
        var sideMc = sidCarMc.offsetWidth;
        var position = position_now / 2;

        //mudar cor header
        if (position_now > 0) {
            header.style.backgroundColor = "rgba(220, 10, 20, 1)"
            header.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.9)"
        } else {
            header.style.backgroundColor = "transparent"
            header.style.boxShadow = "0 1px 20px rgba(0, 0, 0, 0)"
        }

        if (init_div * 0.80 >= position_now) {
            car1.style.marginRight = `${(position + position / 4) - 600}px`
        } else {
            car1.style.marginRight = `-250px`
        }

        if (position_now >= init_div / 2 && init_div * 1.4 >= position_now) {
            car2.style.marginLeft = `${(position + position / 2) - 1000}px`
        } else {
            car2.style.marginLeft = `-240px`
        }
        //mudar posição carro ferrari 1
        //var margem1 = position + (position / 4) - 600;
        // mostrar.innerHTML = `${margem1} e ${sideFer*-0.3}`

        // if (position_now>=init_div*0.3 && margem1<=(sideFer*-0.3)) {
        //     car1.style.marginRight = `${margem1}px`
        // } else if(position_now < init_div*0.3) {
        //     car1.style.marginRight = `-500px`
        // } else{
        //     car1.style.marginRight = `-${sideFer*0.3}px`
        // }

        //mudar posição carro mclaren 2
        // var margem2 = position + (position / 2) - 1000
        // mostrar.innerHTML = `${margem2} e ${sideMc*-0.3}`

        // if (position_now >= init_div*0.1 && margem2 <= sideMc*-0.3)  {
        //     car2.style.marginLeft = `${(position + position / 2) - 1000}px`
        // } else {
        //     car2.style.marginLeft = `-${sideMc*0.3}px`
        // }


        //line up grid
        
        var sizelineup = sizeGrid.offsetWidth;
        
        var margem3 = (position_now/3)-(sizelineup*0.5044)
        // mostrar.innerHTML = `init: ${(init_div+500+500)*0.8} positionY: ${position_now} line: ${sizelineup}`
        // mostrar.innerHTML = `${margem3} <= ${sizelineup*0.2522}`

        if (position_now >= (init_div+500+500)*0.8 && margem3 <= sizelineup*0.2522) {
            car_grid_1.style.marginLeft = `${margem3}px`
            car_grid_2.style.marginRight = `${margem3}px`
        } else {
            car_grid_1.style.marginLeft = `${sizelineup*0.2522}px`
            car_grid_2.style.marginRight = `${sizelineup*0.2522}px`
        }

        var margem4 = (position_now/3)-(sizelineup*0.6305)
        // mostrar.innerHTML = ` ${position_now} >= ${(init_div+500+500)*0.95} && ${margem4} <= ${sizelineup*0.2522}`
        // mostrar.innerHTML = `${margem4} <= ${sizelineup*0.2522}`

        if (position_now >= (init_div+500+500)*0.95 && margem4 <= sizelineup*0.2522) {
            car_grid_3.style.marginLeft = `${margem4}px`
            car_grid_4.style.marginRight = `${margem4}px`
        } else {
            car_grid_3.style.marginLeft = `${sizelineup*0.2522}px`
            car_grid_4.style.marginRight = `${sizelineup*0.2522}px`
        }

        var margem5 = (position_now/3)-(sizelineup*0.7566)
        // mostrar.innerHTML = ` ${position_now} >= ${(init_div+500+500)*0.96} && ${margem5} <= ${sizelineup*0.2522}`
        // mostrar.innerHTML = `${margem4} <= ${sizelineup*0.2522}`

        if (position_now >= (init_div+500+500)*0.96 && margem5 <= sizelineup*0.2522) {
            car_grid_5.style.marginLeft = `${margem5}px`
            car_grid_6.style.marginRight = `${margem5}px`
        } else {
            car_grid_5.style.marginLeft = `${sizelineup*0.2522}px`
            car_grid_6.style.marginRight = `${sizelineup*0.2522}px`
        }

        var margem6 = (position_now/3)-(sizelineup*0.8827)
        // mostrar.innerHTML = ` ${position_now} >= ${(init_div+500+500)*0.97} && ${margem6} <= ${sizelineup*0.2522}`
        // mostrar.innerHTML = `${margem4} <= ${sizelineup*0.2522}`

        if (position_now >= (init_div+500+500)*0.97 && margem6 <= sizelineup*0.2522) {
            car_grid_7.style.marginLeft = `${margem6}px`
            car_grid_8.style.marginRight = `${margem6}px`
        } else {
            car_grid_7.style.marginLeft = `${sizelineup*0.2522}px`
            car_grid_8.style.marginRight = `${sizelineup*0.2522}px`
        }

        var margem7 = (position_now/3)-(sizelineup*1.008)
        // mostrar.innerHTML = ` ${position_now} >= ${(init_div+500+500)*0.98} && ${margem7} <= ${sizelineup*0.2522}`
        // mostrar.innerHTML = `${margem4} <= ${sizelineup*0.2522}`

        if (position_now >= (init_div+500+500)*0.98 && margem7 <= sizelineup*0.2522) {
            car_grid_9.style.marginLeft = `${margem7}px`
            car_grid_10.style.marginRight = `${margem7}px`
        } else {
            car_grid_7.style.marginLeft = `${sizelineup*0.2522}px`
            car_grid_8.style.marginRight = `${sizelineup*0.2522}px`
        }

        setTimeout(move, 10)
    })();