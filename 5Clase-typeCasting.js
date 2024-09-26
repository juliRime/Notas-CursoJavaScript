//Type Casting y Coerción. Conversión de tipos

/*Los compiladores o interpretes traducen el código que nosostros 
escribimos para que el pc pueda entenderlos. A estos se les llama "lenguajes de programación"

*Lenguajes compilados: C, C++, Rust, Go, Swift.  Estos lenguajes permiten que suceda antes de la ejecución.
En los compilados sucede el Chequeo estático de tipos.

*Lenguajes interpretados: JavaScript, Python, Ruby, PHP. Estos lenguajes permiten que suceda a medida 
que se va ejecutando. EN los interpretados sucede el Chequeo dinámico de tipos; esto quiere decir que 
JavaScript no se da cuenta qur tipos de datos tenemos hasta que el va revisando nuestro programa; por
esto se puede decir que JavaScript tiene un tipado débil, porque puedo asignarle a una variable un valor
numerico y mas adelante volverle asignar un valor string. 

se vería así:

*/

const saludo = 'Hola'
console.log(saludo)

const despedida = 'Adiós'
console.log(despedida)

//const titulo = 'Me gusta estudiar
//console.log(titulo) //aquí sale error.  JavaScript esta ejecutando el código, solo cuando llega al error, nos lo muestra

const descripcion = 'porque aprendo mucho'
console.log(descripcion)

//Conversión de tipos

const numero = 2
const booleano = true
console.log(numero + booleano) //la respuesta que da es 3 porque JAvaScript hace la conversión en tiempo de ejecición.

/*Conversión implícita: donde el mismo JavaSvript lo hace como en el ejemplo anterior.

*Conversión explícita: Donde nosotros como programadores tomamos un valor y lo convertimos a String(), Number(), Boolean()
*/
