console.clear();

let extraterrestre;
let astronauta;
let kitten;


class Jugador{
    constructor(){
        this.nombreJugador="";
    }

    //Funcion para ingresar el nombre del player
    ingresarNombreJugador(nombreJugador){
        this.nombreJugador=prompt("Ingrese su nombre: ");
    
        while(nombreJugador==""){
            alert("Por favor, ingrese su nombre.")
            this.nombreJugador=prompt("Ingrese su nombre: ");
        } 
    }

    saludar(){
        console.log("Bienvenido "+this.nombreJugador);
    }
}

    let jugador1=new Jugador();
    jugador1.ingresarNombreJugador();
    jugador1.saludar();


//Personaje a seleccionar
class Personaje{
    constructor(personaje, habilidad, arma){
        this.personaje=personaje;
        this.habilidad=habilidad;
        this.arma=arma;
    }

    //Funcion para seleccionar nuestro personaje, mostrando la seleccion por consola.
    seleccionPersonaje(personaje){
    
        alert("¿Que personaje escogerá para jugar?"+"\nExtraterrestre \nAstronauta \nKitten");
        this.personaje=prompt("¿Decidido? \nIngrese el nombre del personaje");

        while(personaje==""){
            alert("¿Que personaje escogerá para jugar?"+"\nExtraterrestre \nAstronauta \nKitten");
            this.personaje=prompt("¿Decidido? \nIngrese el nombre del personaje");
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
}

let personaje1=new Personaje();
personaje1.seleccionPersonaje();


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
armaObtenida();

//Funcion de animacion
function Update(){

}

//Funcion de barra de energia
function life(){
    let vidas=3;
    let energiaPersonaje=50;
    let ataqueMetoritos=5;
    
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
}
life();

//Funcion para guardar los elementos recogidos durante la partida
function sumadorEstrellas(){
    const estrellasObtenidas=[];
    let estrellas=15;

    for(i=0; i<=14;i++){
        estrellasObtenidas.unshift(estrellas=+1);
    }
    console.log(estrellasObtenidas);
}

sumadorEstrellas();






