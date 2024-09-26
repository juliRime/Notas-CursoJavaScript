/*
Cuando se habla de JavaScript y de POO hay algo importante de entender.
JavaScript funciona con objetos y prototipos. 
Programación Orientada a Objwtos (POO) funciona con herencia.

supongamos que armamos una clase o función constructora de una Persona, esta clase va a ser nuestro molde, en el 
ponemos ciertas propiedades y métodos que después vamos a utilizar para llenar con información cuando creamos
nuestra instancia. Siempre que trabajamos con clases o funciones constructoras este tipo de funcines y objetos 
constructores, automatiamente generan un prototipo, este prototipo va a tener todas las propiedades y métodos que se
van a compartir o heredar después en las instancias que vamos a crear de esta clase principal. 

La propiedad prototipo solo existe en funciones de objetos; quiere decir que solo existen en clases y en funciones constructoras.

cuando creamos métodos y propiedades en clases o funciones constructoras, el prototipo lo que tiene por dentro son los 
mismos métodos y propiedades. NO es algo que programamos, pasa automaticamente solo. 
Las instancias no tienen esta propiedad prototipo. 
*/

class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre
        this.tipo= tipo
    }
    emitirSonido () {
    console.log('El animal emite un sonido')
    }
}

//Aquí utilizamos la herencia que es importante en POO

class Perro extends Animal{            //la clase Perro extiende de la clase Animal, esto permite utilizar ciertas cosas de la clase Animal
    constructor (nombre, tipo, raza) {
        super(nombre, tipo)          //para usar el this de propiedades que vienen de otra clase, necesito la palabra reservada super
        this.raza = raza             //al momento de utilizar el this. llama al constructor de la clase base, quiere decir que super llama al
    }                        //constructor de la clase Animal y le dice, ey, voy a utilizar el nombre y el tipo en la clase que se extiende.
    emitirSonido() {          //Y el this. de esta clase hace referencia a esta clase o sea a Perro.
        console.log('El perro ladra')
    }
    correr(){
        console.log(`${this.nombre} corre alegremente`)
    }
}                          
                             

const perro1 = new Perro ('Bobby', 'Perro', 'Pug')                             

console.log(perro1)

perro1.correr()  //Aquí toma el nombre de la clase Animal que es de donde lo esta heredando. 
perro1.emitirSonido()   //Aquí aparece 'el perro ladra' porque estamos reeescribiendo el método heredado de Animal. 


/*Para generar de mi instancia perro1 un nuevo método, porque necesito cosas particulares que no las tiene mi clase constructora -Perro- 
hago lo siguente*/

perro1.nuevoMetodo = function () {
    console.log('Este es un método')
}

perro1.nuevoMetodo()

/*si tengo mas instancias y quiero utilizar en ellas este nuevo método o sea agregar este método a la clase constructora 
o padre, o sea Perro, se hace lo siguiente. */

Perro.prototype.segundoMetodo = function () {
    console.log('Es otro nuevo método ')
}

perro1.segundoMetodo()



