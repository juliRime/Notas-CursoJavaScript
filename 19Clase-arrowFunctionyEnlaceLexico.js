/*Las arrow functions son una forma más concisa de escribir funciones. 
Son útiles porque simplifican la sintaxis y mantienen el contexto de 'this', lo cual es importante en ciertas situaciones.*/

//Las Arrow Function se ven así:
const almuerzo = (proteina, verdura) => {   //se quitó function y se pusó const, para que sea una variable, siguen los parámetros y una flecha
    return `${proteina} ${verdura}`          //que nos indica el return o lo que sigue después de las llaves que es el body.  
}

almuerzo('🥩', '🥬 ')                     //Por ultimo, esta el llamado de la función

//función tradicional 
const greeting = function (name) {  // despues de function no se le pone nombre, ya que estamos asignando esta función a una variable. 
    return `Hi, ${name}`
}

//Función flecha con retorno explicito --> Arrow function - explicit return
const newGreeting = (name) => {
    return `Hi, ${name}`
}

//Función flecha con retorno implicito --> Arrow function - implicit return
const newGreetingImplicit = name => `Hi, ${name}`  // se quita el return y las llaves, poniendo todo en una sola linea. 
// cuando hay solo un parámetro no es necesario poner los paréntesis. 

const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}` //dos parametros, va entre paréntesis

//Enlace léxico --> Lexical Binding 
/*el primer método es una función tradicional y el segundo será arrow functions para ver cómo cambia el enlace léxico, 
esa vinculación con el this*/

//objeto
const finctionalCharacter = {
    name: 'Uncle Ben',                                        //nombre dentro del objeto 
    messageWithTraditionalFunction: function (message) {    //Hay un método que es el mensaje del tio Ben en este caso. 
        console.log(`${this.name} say: ${message}`)       //toma el nombre que tiene dentro del objeto y un mensaje que se le pasa por parámetro
    },
    messageWithArrowFunction: (message) => {              //ya tenemos el objeto con dos metodos. 
       console.log(`${this.name} say: ${message}`)   //no hay una vinculación en este tipo de casos en la arrow function no reconoce el nombre
    }                                                //que hay en el objeto. 
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsability')
finctionalCharacter.messageWithArrowFunction('Beware of doctor Octopus')

