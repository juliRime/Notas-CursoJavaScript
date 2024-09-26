/* dos métodos que no modifican el array original pero si iteran sobre esos array. 
Methods that iterate over an array
Methods that DO NOT modify the original array (immutability)
1. map(): Permite aplicar una función a cada elementos de un array y construir un nuevo array con los resultados. 
2. forEach(): Itera sobre cada elemento de un array y ejecuta una función proporcionada para cada elemento, sin crear un nuevo array.
*/

//map()

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num) //num es cada posición de array, agregamos un arrowfunction y le indicamos la operación.

console.log(numbers)
console.log(squaredNumbers)

//forEach()

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color)) //forEach recorre cada posición, color es cada posicón del array, agregamos
                                                                    // un arrowfunction y mostramos cada posición del array

    console.log(colors)     
    console.log(iteratedColors)                                               

/*
const iteratedColors = colors.forEach(print)  

for (i = 0; i < colors.length; i++) {                Este for hace lo mismo que el forEach()
    
   // console.log(colors[i])                          esto representa lo mismo que el arrowfunction que esta dentro de forEach

    const color = colors[i]

    console.log(color)
}

function print (message) {                puedo utilizar una misma función como parámetro para llamar al forEach, esto es útil cuando se
    console.log(message)                   tienen diferentes forEachs en los que se necesita hacer un mismo 'procedimiento', para no crear
}                                         muchas funciones iguales, se hace una y se le pasa al forEach
    */

//Excercise1: Fahrenheit to Celsius conversion

const temperaturesInFahrenheit = ['32', '68', '95', '104', '212']

const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log('Temperatures In Fahrenheit: ', temperaturesInFahrenheit)
console.log('temperatures In Celsius:', temperaturesInCelsius)


//Exercise2: Sum of elements in an Array

const newNumbers = [1, 2, 3, 4, 5]

let sum = 0

newNumbers.forEach(number => {
    sum += number
})

console.log('Array of Numbers: ', newNumbers)
console.log('Sum of Numbers', sum)