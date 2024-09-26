/*
En el 2015 JavaScript presento una nueva forma de construir clases, es una función constructora, se asemeja mucho a 
otros lenguajes de programación como java, que son lenguajes orientados a objetos POO.
Clase: es generar el  blueprints o molde con el que se van a construir diferentes objetos. 
*/

//para comenzar con las clases se utiliza la palabra reservada class y similar a una función constructora, se pone 
//el nombre de la clase con la primera letra en mayúscula.

//el método constructor define como configurar las propiedades de los objetos 
//que vengan de esta clase y puede recibir argumentos para personalizar la iniciación. 
//Es un método tipo función, entre () se ponen los argumentos para formar la Persona
class Persona {
   constructor(nombre, edad){         
     this.nombre = nombre
     this.edad = edad                             
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }                 
}                     

const persona1 = new Persona('Juanito', 35)

persona1.saludar()