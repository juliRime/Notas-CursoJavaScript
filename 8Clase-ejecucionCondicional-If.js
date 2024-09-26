 /*
 Estructuras condicionales: mejor conocidas como estructuras de control.

 Para ver que parte del codigo se puede ejecutar con relación a algo, y con ese 'algo', es donde ocupamos 
 las estructuras de control, para hacer algunas validaciones que nos ayudan a ver que parte de todo el código 
 tiene que entrar en acción 
 

//if  esta es sí, sí pasa esto que se ejecute esto, sino, se ejecuta otra cosa
if (let === algo){    //Sí esta condición se cumple se ejecuta el codigo que esta dentro de las llaves 
    codigo            //se ejecuta solo si la condición de arriba se cumple
}   else {            // si no se cumple, se va a ejecutar la instrucción que pongamos.
                      // aquí se pone lo que va a pasar si no se cumple la condición.
}

if (let === algo){
    codigo  
}   else if (condicion){    podemos poner varias condiciones 
    codigo
} else {        
                            aquí se pone lo que va a pasar si no se cumple la condición.
}       
*/
let nombre = 'Nico'

if (nombre === 'Diego'){
    console.log('Hola Diego')
} else if (nombre === 'Nico'){
    console.log('Hola Nico')
}else{
console.log('Nombre no encontrado')
}


let edad 

if (edad === 18){
    console.log('Eres mayor de edad, puedes tomar cerveza')
} else if (edad < 18){
 console.log('Eres menor de edad solo puedes tomar juguitos')
}else {
    console.log('No reconozco esta edad')
}