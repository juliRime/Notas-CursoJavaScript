/*Vamos a empezar ha hablar de ejecición condicional, pero antes de esto debemos saber que es:

Operadores de comparación: son los que nos ayudan a generar una condición. 



==   estos dos iguales no son para asignarle valor a una variable, sino para ver si una cosa es igual a otra cosa. 
===  esta es para ver si algo es igual a otra cosa, pero en dos temas: en el valor y en el tipo de dato.
!=   este nos ayuda a saber si X valor es diferente a Y valor. Si es diferente nos da un true, si es igual nos da un false
!==  es diferente una cosa de otra en el valor y tipo de dato.
>    Pasa saber si X es mayor que Y
<    Pasa saber si es menor, si no es menor nos devuelve un false
>=   Si es mayor este valor a este otro valor, se avanza, sino se hace otra cosa.
<=   Menos o igual a este valor. 
*/

const a = 10   // Probar en la consola del navegador. 
const b = 20
const c = '10'

console.log(a == b)
console.log(a ===c)
console.log(a !=b)
console.log(a!==c)
console.log(a==c)
console.log(a >b)
console.log(a>c)
console.log(a < b)
console.log(a <= b)