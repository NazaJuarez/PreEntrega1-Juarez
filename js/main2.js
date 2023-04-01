let personajes;
let selecciones =[];
let cantidadTarjetas=10;

const cargarPersonajes=()=>{
    personajes=[
        '<img src=../img/alien.png>',
        '<img src=../img/astronauta.png>',
        '<img src=../img/estrella.png>',
        '<img src=../img/kitten.png>',
        '<img src=../img/meteorito.png>',
        '<img src=../img/alienHappy.jpg>',
        '<img src=../img/astronautaCohete.jpg>',
        '<img src=../img/espacioExterior.jpg>',
        '<img src=../img/espacioExterior2.jpg>',
        '<img src=../img/planeta.jpg>',
    ]
}


const cargarTablero=()=>{
    cargarPersonajes();
    selecciones=[];
    let tablero=document.getElementById("tablero-juego");
    let tarjetas=[];
    for(let i=0; i<20; i++){
        tarjetas.push(`
            <div class="tablero-tarjeta" onclick="seleccionarTarjeta(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara trasera" id="trasera${i}">
                        ${personajes[0]}
                    </div>
                    <div class="cara superior">
                        🚀
                    </div>
                </div>
            </div>
        `)
        if(i%2==1){
            personajes.splice(0,1);
        }
    }
    tarjetas.sort(()=>Math.random()-0.5);
    tablero.innerHTML=tarjetas.join(" ");
}


function seleccionarTarjeta(i){
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)";
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones);
        selecciones = [];
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0]);
        let trasera2 = document.getElementById("trasera" + selecciones[1]);
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0]);
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1]);
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
        }
        if (verificarFin()) {
            swal.fire({
                title: `El juego ha finalizado`,
                text: `Felicitaciones`,
                icon: `success`
            })
        }
    }, 1000);
}

function verificarFin() {
    for (let i = 0; i < cantidadTarjetas; i++) {
        let trasera = document.getElementById("trasera" + i)
        if (trasera.style.background != "plum") {
            return false
        }
    }
    return true
}