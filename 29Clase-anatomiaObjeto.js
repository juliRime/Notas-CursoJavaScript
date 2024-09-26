/*
Objetos: Estructura de datos que ayuda a guardar valores de una forma particular. 
key / value esto quiere decir que hay una
propiedad = valor de la propiedad; esto es lo que ayuda a crear la estructura de un objeto, esta estructura también lleva métodos; estos son
funciones que estan dentro de objetos que ayudan a generar interacción. 

        ESTRUCTURA
objeto {
   propiedad1: valor,   cada que se vaya a agregar otra propiedad se pone coma (,)
   propiedad2: valor,
   propiedad3: valor   
   METODOS  
}
   Con los objetos en JavaScript empezamos hablar de abstraer las cosas de la realidad y llevarlas a programación. Esto se conoce como 
   programación orientada a objetoss POO. Los objetos son la base de lo que nos ayuda a generar un paradigma de programación. */

const persona = {
    nombre: 'Jhon',
    edad: 30,
    direccion: {
        calle: 'Avenida Insurgentes 187',
        ciudad: 'CDMX'
    },
    saludar () {
        console.log(`Hola, mi nombre es ${persona.nombre}`)   //el nombre que le pertenece al objeto 
    },
}

console.log(persona)
persona.saludar()

persona.telefono = '5-555-555'   //esto es para agregar propiedades al objeto ya creado.

console.log(persona)

persona.despedir = () => {       //Así se agregan nuevos métodos al objeto ya creado. 
    console.log('Adiós')
}

console.log(persona)
persona.despedir()

delete persona.telefono       //Para borrar una propiedad
console.log(persona)

delete persona.despedir        //Pra borrar un método
console.log(persona)