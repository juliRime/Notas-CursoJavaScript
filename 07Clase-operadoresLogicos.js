/*

Operadores lógicos: estos operadores nos van a ayudar mucho, no siempre es si un valor es igual a otro valor;
en ocasiones se necesita saber si un valor & otro valor son iguales. 

&&       este es el y ()and), por ejemplo, si Z valor y W valor son iguales a C
||       este representa la la Ó.  si valor A ó valor B se cumple....se sigue la ejecución.
!        Este presentena el NO o la negación. Si este valor no es esto entonces puede pasar.....
 
*/

const a = 10
const b = 20
const c = '10'
console.log(a == b && a === c)
console.log(a != b || a === c)
console.log(!(a === c))  /*Esta arroja como resultado TRUE, porque lo que está dentro de paréntesis es 
                          FALSE (a no es igual a c en tipo) sin embargo, al inicio estamos 
                        colocando el signo de negación, de esta forma 'cambiamos el resultado'o 
                        negamos el resultado. */
