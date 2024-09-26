/*
Todo lo que se puede hacer con el operador Spread
*/

//1. Tener copia de un array - Copying an Array

const originalArray = [1, 2, 3, 4, 5]
const copyOfAnArray = [...originalArray]  //Los tres puntos hacen referencia al spread operator

console.log(originalArray)
console.log(copyOfAnArray)              //las copias no para no mutar los valores y en ciertos casos es muy útil para hacer esas copias sin 
                                      //modificar los valores originales que se tienen en cierto código.

//2. Combinar arrays - Combining arrays

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]   //Así se crean los arrays. 

console.log(array1)
console.log(array2)
console.log(combinedArray)

//3. Crear un array con elementos adicionales - Creating Arrays with Addicional Elements

const baseArray = [5, 6, 7]  
const arrayWithAddicionalElements = [...baseArray, 8, 9, 10]  //no se modifica el array original, solo le agregamos nuevos elementos al base

console.log(baseArray)
console.log(arrayWithAddicionalElements)

//4. Pasarle parámetros a una función - Pass elements to function

function sum (a, b, c) {
    return a + b + c
}

const numbers = [1, 2, 3]   //números a sumar. 
const result = sum(...numbers) //si queremos pasarle a la función un array con la cantidad de elementos que queremos sumar usando spread operator

console.log(result)