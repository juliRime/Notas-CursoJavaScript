/* Arrays: Podemos guardar muchos valores en una sola variable y los arrays son objetos. 
//How to create an Array?
1. new Array() or Array()
*/
const fruits = Array('apple', 'banana','orange')  //creo una variable, seguido de la palabra array y dentro del parentesis van los valores. 
console.log(fruits)

const number = Array(1, 2, 3, 4, 5)          //array númerica
console.log(number)

//2. sintaxis literal de un array - Array literal syntax

const oneNumber = [4]      //un array con una sola posición y un numero. se crea con corchetes y no con parentesis
console.log(oneNumber)

const emptyArray = []       //Si queremos un array vacío, funciona cuando se quiere inicializar un programa o que el array este vacio e 
console.log(emptyArray)     //irlo llenando

const sports = ['soccer', 'tennis', 'rugby']   //Array con strings
console.log(sports)

// 3.Array mixto
const recipeIngredients = [
    'Flour',                                      //string
    true,                                         //boolean
    2,                                            //number
    { 
        ingredient: 'Milk', quantity: '1 cup'     //objeto
    },
    false                                         //boolean
]

console.log(recipeIngredients)

//4.cómo acceder a un array - Accesing array elements
//Los Arrays también tienen indices, en la primera posición se empieza con el 0, seguido del 1, 2, 3 y siguientes como correspodan

const firstFruit = fruits[0]
console.log(firstFruit)

//5.Tamaño de un array - Length property

const numberOfFruits = fruits.length
console.log(numberOfFruits)

/*MUTABILIDAD E INMUTABILIDAD EN LOS ARRAYS
Si se tiene un array (ya sabemos que este es un objeto) este objeto puede tener diferentes métodos, estos nos ayudan hacer muchas cosas
dependiendo del método, también dependiendo de cada método, se puede mutar el valor original, o sea transformar el array que ya esta Muta
construido (mutabilidad) o crear un array nuevo; es decir, inmutable, no vamos a mutar ese array que ya se creo. 
*/
//Mutability
//vamos a ver como agregar un elemento al array de frutas -fruits

fruits.push('watermelon')   //el método push me permite agregar un nuevo elemento al array de esta forma se muta el array original
console.log(fruits)

//Immutability

const newFruits = fruits.concat(['grape', 'kiwi'])    //concatenamos un array con otro array con el metodo .concat
console.log(fruits, newFruits)              
//tenemos el array original sin modificar y el nuevo array construido con el array original y la concatenación del nuevo array

//Comprobar que un array es un array - Checking arrays with Array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray)

//Ejercicio practico: sumar todos los elementos que tenemos en un array. Practical axercise: sum all elements of an array

const numbersArray = [1, 2, 3,  4, 5]
let sum = 0

for (let i = 0; i < numbersArray.length; i++) {   //lenght permite ver el tamaño del array en este caso
    sum += numbersArray[i]
}
console.log(sum)