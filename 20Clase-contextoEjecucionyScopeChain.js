/*Contextos de ejecución y Scope chian o cadena de alcance:
Podemos escribir variables con palabras claves como lo son var, let y const. Estas palabras tienen ciertas diferencias que nos 
hacen utilizar una u otra. 
KEYWORD       SCOPE       HOISTING       ¿PUEDE REASIGNARSE?       ¿PUEDE REDECLARARSE?
var          Función         Sí                   Sí                         Sí
let          Bloque          No                   Sí                         No
const        Bloque          No                   No                         No

> SCOPE: puede definirse como el alcance que una variable tendrá en el código. En otras palabras, el scope decide a qué 
variables se tiene acceso en cada parte del código. 
DOS TIPOS DE SCOPE:
1. Scope global
2. Scope local.
> HOISTING: es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior 
del scope más cercano, scope global o de función.
> REASIGNAR: cambiar el valor de una variable sin cambiar su identidad.
> REDECLARAR:  se refiere a la acción de declarar una variable que ya ha sido declarada anteriormente en el mismo ámbito (scope). Se puede 
redeclarar con la palabra clave 'var', con 'let' y 'const' se producirá un error. 
                       Si declaras una variable en diferentes ámbitos, como dentro de funciones o bloques ({}),
                       no se considera una redeclaración, sino una nueva declaración en un ámbito diferente.
EL contexto global es todo el código que tenemos fuera de las llaves y el local son todas esas funciones y métodos que tenemos
dentro de ese código. El contexto local suele identificarse porque es todo aquello que se pone dentro de llaves {}
COSAS A TENER EN CUENTA:
1. Del contexto global no podemos acceder a contextos locales. 
2. De contextos locales si se puede acceder a variables que esten afuera o sea en el contexto global. 

*/

//EJEMPLO 1
const productName = 'Smartphone'
const price = 499                      //Todo lo que esta a la izquierda del igual es la declaración de las variables
const brand = 'TechCo'                  //Todo lo que etsa después del igual es la asignación de estas variables

function getProductDetails() {        //función
    const productName = 'Laptop'
    const price = 899

    return `The ${productName} costs $${price} and is from the brand ${brand}` //A pesar de que a fuera de la función hay unas variables 
}                                                                             //declaradas, el return toma los valores de las variables dentro
                                                                              // de la función. 
console.log(getProductDetails())         //Aquí se hace el llamado de la función. 

//Respuesta: The Laptop costs $899 and is from the brand TechCo
//El productName y el price los tomó de las variables asignadas dentro de la función, el valor de brand la tomó de arriba (fuera de la función)

//EJEMPLO 2
function getProductDetails() { 
    const productName = 'Laptop'
    const price = 899

    return `The ${productName} costs $${price} and is from the brand ${brand}` 
}

console.log(`The ${productName} costs $${price} and is from the brand ${brand}`) //Este console.log toma los valores del entorno global porque
                                                                                 //de contextos locales si se puede acceder a variables que  
                                                                                 //esten afuera o sea en el contexto global. 
//Respuesta: The Smartphone costs $499 and is from the brand TechCo         

//Pensar en las muñecas rusas es una forma de explicar lo anterior. el contexto global es la muñeca mas grande, 
//mientras que el contexto local son las muñecas mas pequeñas que van en su interior. 
//¿QUE ES UN BLOQUE?
/*Puede ser una función en donde se abre y cierran llavess {}
 Puede ser for, while, if
*/

//EJEMPLO 3
const userPoints = 99                                                   //contexto global linea 73 y linea 79

function checkAccess () {                                               //contexto local número 1, toda la función dentro de {}
    if (userPoints < 100) {                                             //contexto local número 2 de la linea 70 a la 72
        const message = 'Access denied: Insufficient points!'           
        return message
    } else {                                                             //contexto local número 3 de la linea 73 a la 76
        const message = 'Access granted: Enjoy the premium feature!'
        return message
    }
}

console.log(checkAccess())                                           

// en el código anterior tenemos 3 contextos locales y uno global, a esto se le conoce como SCOPE CHAIN o cadena de alcance. 
//Se puede ir del contexto local al global, pero no del global al local. (de lo mas pequeño a lo mas grande)

//EJEMPLO 4 
const globalVariable = '😊'

function localOne () {
    console.log('GLOBAL 1:', globalVariable)
// console.log('LOCAL 1:' localVariable) Aquí busca localVariable en contexto local y no la encuentra, va global y no la encuentra y da error

function localTwo () {
    const carrot = '🥕'
    console.log('LOCAL 2: ', carrot)
}

function localThree () {
    console.log('LOCAL 3: ', carrot) //Pasa algo similar a arriba, no encuentra la variable la busca en global y no la encuentra. no la
}                                      // busca en el contexto localTwo porque entre contextos locales del mismo nivel no pueden acceder. 
                                       //Esto se refiere a que si la tercera función esta fuera de la segunda, no puede acceder a ella. 
localTwo()
localThree()
}

console.log(localOne())

//respuesta: GLOBAL 1: 😊
//            LOCAL 2: 🥕
// ReferenceError: carrot is not defined
