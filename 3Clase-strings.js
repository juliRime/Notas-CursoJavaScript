//Clase Creación de Strings
let string1 = 'Hola, mundo'
let string2 = "javaScript es genial"
let string3 = `${string1} feliz :)` // Estas comillas permiten concatenar strigs y ejecutar código JavaScript directamente en la respuesta.Y se obtienen con altgr y la tecla donde se encuentra
let string4 = string1 + ' '+ string2 //Esta forma permite concatenar

console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

let frase = 'JavaScript es Extremadamente Genial'
console.log(frase.length)                        // .length es para saber el tamaño de la frase, también cuenta los espacios
console.log(frase.toLowerCase())                 // .toLowerCase pone toda la frase en mayúscula
console.log(frase.toUpperCase())                 // .toUpperCase pone la frase en minúscula
console.log(frase.substring(0,10))               /* .substring(posición, posición) permite ver un pedazo de la frase, 
                                                  dependiento de la posición que elija */