/* Funciones puras: Dada una misma entrada se obtiene siempre la misma salida.Y no produce efectos secundarios.
Los efectos secundarios: son cualquier cambio en el estado del programa o el entorno que no se refleja en la
salida de la función. Los efectos secundarios pueden hacer que el programa sea impredecible, difícil de probar y difícil de depurar

Efectos secundario --> Side Effects:
1.Modificar valores globales: haceder a otras variables que se tengan en el código dentro de una función, hace que la
                              función ya no sea pura. 
2. Modificar los parámetros de una función también causa efectos secundarios.
3. Solicitudes HTTP; todo lo que sean llamados a API también causan efectos secundarios. 
4. Todo lo que sea imprimir mensajes en pantalla o en consola. 
5. Manipulación del DOM: acceder o hacer alguna consulta también seria un Side Effect
6. Acceder a la hora o al día actual. 

todo esto genera efectos secundarioa, haciendo que las funciones puras dejen de ser puras. Estos efectos secundarios
no son precisamente algo malo. 
*/

//Función pura:
function sum (a, b) {   //Es una función pura porque siempre vamos a tener la misma entrada (a, b) y vamos a 
    return a + b          //obtener la misma salida a + b
}

//Funció impura
function sum (a, b) {      //Pertenece al punto 3. de efectos secundarios o side effects.
    console.log('A:', a)   //Agregando el console.log esta función que antes era pura, empieza a ser impura. 
    return a + b
}

//Función impura
let total = 0

function sumWithSideEffect (a) {   //Pertenece al punto 1. de efectos secundarios 
   // total = total +  a       Esta linea puede ser resumida de la siguiente forma
   total += a                   //La variable antes asignada en 0, va a ir cambiando conforme se le sume a
return total
}

//Función pura
function square (x) {
    return x * x
}

//función pura
function addTen (y) {
    return y + 10
}

// La combinación de las dos funciones puras anteriores da como resultado lo siguiente, y sigue siendo una función pura.
const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)