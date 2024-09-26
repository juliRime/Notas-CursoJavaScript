/*
this es una palabra reservada que vamos a utilizar en el momento de trabajar con clases. 
this hace referencia a el objeto mismo o a la clase que estamos construyendo. 
Cuando trabajamos con la clase o con la función constructora, se utiliza la palabra reservada this para tener referencia
a los parámetros del contructor -que es un método dentro de la clase- para que cuando se cree la intancia, el valor
de las propiedades del constructor puedan existir directamente en el objeto. 

*/

class Persona {
    constructor (nombre, edad) {
        this.nombre =  nombre //Pensarlo así: la Persona es this, el nombre de nuestro objeto Persona va a ser el valor que se coloque en la
        this.edad = edad        //instancia 

    }
}

const persona1 = new Persona('Alice', 28)  // instancia

console.log(persona1)

persona1.nuevoMetodo = function () {
    console.log(`Mi nommbre es ${this.nombre}`)      //este this hace refenencia a la instancia persona1, o sea el nombre que ya pusimos ahí.
}

persona1.nuevoMetodo()