class gatos{
    //2. Definir mis atributos como variables vacias
    nombre="";
    edad=0;
    raza="";
    caracter="";

    //4. Agregar constructores. Son los que ayudan a instanciar o materializar
    constructor(nombre,edad,raza,caracter) { //funcion especial para construir donde necesitamos parametros
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza ;
        this.caracter = caracter;
    }

    //3.Definir los metodos que serán definidos como funciones o acciones

    maullar() {
        console.log("miau");
    }
    dormir() {
        console.log("ZzZzZzZ");
    }
    ronronear() {
        console.log("Prrrrrrrr");
    }
    comer() {
        console.log("ñamñamñamñam");
    }
}

//Para empezar a crear o instanciar objetos (gatos) vamos a utilizar la palabra reservada new

var dongato= new gatos("dongato", 9, "egipcio" , "dormilon");
var felix= new gatos("feliz", 100, "raza negra", "alegre");
var tom= new gatos("tom", 5, "de casa", "cazador");
var conbotas= new gatos("gato con botas", 10, "espadachin" ,"peleador");
var kitty= new gatos ("ketty", 1, "blanquillo", "sociable");
console.log(dongato.maullar());
console.log(felix.dormir());
console.log(tom.comer());
console.log(conbotas.dormir());
console.log(kitty.ronronear());
