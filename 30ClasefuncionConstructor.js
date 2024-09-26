/*
const persona = {
    nombre: 'Diego',
    apellido: 'De Granda'
}

Para asegurar que se pueden crear multiples objetos de tipo 'persona', sin necesidad de hacer muchas estructuras iguales o ir a cambiarle el 
valor de sus propiedades debemos utilizar una función que se llama, función constructora, su objetivo es construir objetos. 
    */

//Estructura de como construir una función constructora. 
function Persona (nombre, apellido, edad) {      //misma estructura de las funciones, solo que esta tiene la primera letra en mayúscula 
this.nombre = nombre                            //el this. hace referencia al objeto Persona. El nombre de este objeto es = al nombre que nos 
this.apellido = apellido                          //pasen como parámetro. 
this.edad = edad                                               
}               

//Todos los objetos que vengan de la función constructora anterior se llaman INSTANCIAS

const persona1 = new Persona ('Carlos', 'Alonso', 40)

console.log(persona1)

const persona2 = new Persona ('Julia', 'Medina', 28)

console.log(persona2)

//prototype: es la copia de la función constructora que se encarga de compartir cada una de las propiedades o métodos que existen en la 
//función 

Persona.prototype.telefono = '5-555-555'  //agrega esta nueva propiedad a los objetos y se comparte entre todas las instancias. 


persona1.nacionalidad = 'Colombiano'   //De esta forma se le agrega una propiedad a una instancia en particular y no a todas. 

//Así se agregan métodos
Persona.prototype.saludar = function () {            //saludar es una función que se va a convertir en método. = una función anónima 
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`) //Aquí se utiliza el nombre de cada instancia creada, se imprime independiente
}

persona1.saludar()            //llamamos para que se ejecute el saludo de cada persona
persona2.saludar()