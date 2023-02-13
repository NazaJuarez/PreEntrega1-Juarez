console.clear();

let extraterrestre;
let astronauta;
let kitten;

//Funcion para ingresar el nombre del player
function ingresarNombreJugador(){
    let nombreJugador=prompt("Ingrese su nombre: ");

    while(nombreJugador==""){
        alert("Por favor, ingrese su nombre.")
        nombreJugador=prompt("Ingrese su nombre: ");
    } 
}

//Funcion para seleccionar nuestro personaje, mostrando la seleccion por consola.
function seleccionPersonaje(){

    alert("¿Que personaje escogerá para jugar?"+"\nExtraterrestre \nAstronauta \nKitten");
    let personaje=prompt("¿Decidido? \nIngrese el nombre del personaje");

    while(personaje==""){
        alert("¿Que personaje escogerá para jugar?"+"\nExtraterrestre \nAstronauta \nKitten");
        personaje=prompt("¿Decidido? \nIngrese el nombre del personaje");
    } 

    switch(personaje){
        case "Extraterrestre", "extraterrestre": 
            console.log("¡Buena elección! Has seleccionado a "+personaje);
            personaje==extraterrestre;
            break;
        case "Astronauta", "astronauta":
            console.log("¡Corres con ventaja! Has seleccionado a "+personaje);
            personaje==astronauta;
            break;
        case "Kitten", "kitten":
            console.log("¡Excelente decisión! Has seleccionado a "+personaje);
            personaje==kitten;
            break;
        default:
            alert("No has elegido correctamente. Vuelve a intentarlo.");
            alert("¿Que personaje escogerá para jugar?"+"\nExtraterrestre \nAstronauta \nKitten");
            personaje=prompt("¿Decidido? \nIngrese el nombre del personaje");
            break;
    }
}

//Funcion de arma obtenida
function armaObtenida(personaje){

    if(personaje==extraterrestre){
        console.log("¡Felicitaciones! Obtuviste: Arma laser");
    } else if(personaje==astronauta){
        console.log("¡Felicitaciones! Obtuviste: Velocidad de la luz");
    } else if(personaje==kitten){
        console.log("¡Felicitaciones! Obtuviste: Poderosa ternura");
    }
}

//Funcion de barra de energia

    let vidas=3;
    let energiaPersonaje=50;
    let ataqueMetoritos=5;
    let estrellas=3;
    
    while(energiaPersonaje!==0){
        for(i=0; i<energiaPersonaje; i++){
            energiaPersonaje-=ataqueMetoritos;
            console.log(energiaPersonaje);
        }
    }
    console.log("Partida perdida.");

    if(energiaPersonaje===0){
        vidas-=1;
        console.log("Vidas restantes:"+vidas);
    }

ingresarNombreJugador();
seleccionPersonaje();
armaObtenida();
