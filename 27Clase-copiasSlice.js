/*
slice(): Crea una copia superficial (shallow copy) de una porción del array, especificada por índices de inicio y fin 
(fin no incluido)
*/

//slice() No nos modifica el array original 

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals)
console.log(animals.slice(2))
console.log(animals.slice(2, 4))  //desde el indice 2 hasta el indice 4 menos 1 o sea el 3
console.log(animals.slice(1, 6))
console.log(animals.slice(-2))    // Utilizando el menos (-) permité ir de atrás para delante, si lo que se necesita son los ultimos indices
console.log(animals.slice(2, -1))   //si queremos iniciar por un indice y terminar por uno del final, se puede de esta forma. 
console.log(animals.slice())        //sin parámetros el devuelve el array sin modificaciones 