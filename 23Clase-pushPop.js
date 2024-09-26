/*Dos métodos que modifican el array original. Methods that modify the original array (mutability)
Push: Añade uno o mas elementos al final de un array y devuelve la nueva longitud del array.
Es el mismo array el que se modifica. 
Pop: Elimina el ultimo elemento del array y devuelve ese valor que eliminó
*/

//push

const countries = ['USA', 'Canada', 'UK']
const newCountries = countries.push('Germany', 'Australia')

console.log(countries)
console.log(newCountries) //Devuelve un valor, nos muestra cual es la nueva longuitud del array, en este caso arroja un 5

//Pop()

const removeCountry = countries.pop()

console.log(countries)
console.log(removeCountry)