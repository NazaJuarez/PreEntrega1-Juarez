console.clear();

let extraterrestre;
let astronauta;
let kitten;


class Jugador{
    constructor(){
        this.nombreJugador="";
    }

    //Funcion para ingresar el nombre del player
    ingresarNombreJugador(){
        const input=document.querySelector(".nombreJugador");
        document.write(input.className);
        document.write(input.value);
        input.required=" ";

    }
}


//Personaje a seleccionar
class Personaje{
    constructor(personaje, habilidad, arma){
        this.personaje=personaje;
        this.habilidad=habilidad;
        this.arma=arma;
    }
}
 