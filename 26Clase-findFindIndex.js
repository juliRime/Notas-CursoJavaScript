/*
Dos métodos que no modifican el array, pero ayudan a encontrar elementos y también indices en un array.
find(): Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
findIndex(): Devuelve el índice del primer elemento en un array que satisface una condición proporcionada en forma de función. 
Si no encuentra ningún elemento que cumpla la condición, devuelve -1
*/

//find()

const multipleOfFive = [5, 10, 15, 20]
const firstNumberGreaterThan10 =  multipleOfFive.find(number => number > 10)

console.log(multipleOfFive)
console.log(firstNumberGreaterThan10)

//findIndex()

const randomNumber = [6, 14, 27, 56, 40]
const indexNumber = randomNumber.findIndex(number => number  > 6)

console.log(randomNumber)
console.log(indexNumber)