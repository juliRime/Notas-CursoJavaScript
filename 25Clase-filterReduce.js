/*
Dos métodos de array que no moficican el array original y crea un array nuevo.
filter(): Crea un nuevo array con elementos que cumplen una condición dada por una función
reduce(): Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
*/

//filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)   //numeros pares, pasan al nuevo array. Retorna booleano

console.log(numbers)
console.log(evenNumbers)

//reduce() case1    reduce un array a un solo valor

const numberReduce = [1, 2, 3, 4, 5]
const sum = numberReduce.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0) 
                                                            //el primer parámetro es un acumulador, es como si tuvieramos un acumular externo
                                                           //donde se va a guardar los valores que se vayan sumando y el segundo parámetro es 
                                                           //cada uno de los valores del array. (el cero es en lo que inicia accumilator)
console.log(numberReduce)
console.log(sum)

//El reduce() tiene diversos usos, entre ellos sirve para saber que tanto se repite una palabra en un array. 
//reduce() case2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordFrecuency = words.reduce((accumulator, currentvalue) => {
    console.log(accumulator == undefined, accumulator)
    if(accumulator == undefined) {
        accumulator = {}
    }
    if (accumulator[currentvalue]) {               //Si accumulator en la posición currenvalue existe, entra en el else
        accumulator[currentvalue]++               //si existe se le suma un valor al numero que ya esta guardado 
    }else {
        accumulator[currentvalue] = 1             // sino exite guarda un valor inicial en este caso es 1
    } console.log('después: ', accumulator)
    return accumulator                          //retornamos el acumulado 
}, null)                                         //aquí le decimos que el valor inicial es un objeto vacío

console.log(wordFrecuency)

/*
Edge case - caso limite
const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordFrecuency = words.reduce((accumulator, currentvalue) => {
    console.log(accumulator == undefined, accumulator)
    if(accumulator == undefined) {        se verifica el valor de acumulador para inicializarlo en caso de un valor null o undefined
        accumulator = {}
    }
    if (accumulator[currentvalue]) {               //Si accumulator en la posición currenvalue existe, entra en el else
        accumulator[currentvalue]++               //si existe se le suma un valor al numero que ya esta guardado 
    }else {
        accumulator[currentvalue] = 1             // sino exite guarda un valor inicial en este caso es 1
    } console.log('después: ', accumulator)
    return accumulator                          //retornamos el acumulado 
}, null)                                         //aquí le decimos que el valor inicial es un objeto null

console.log(wordFrecuency)
*/