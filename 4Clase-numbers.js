//Clase numbers
// 1. Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)  // El typeof devuelve el tipo de dato del operador

//2. Notación científica
const cientifico = 5e3

// 3. infinitos y NAN
const infinito = Infinity
const ItsNotNumber = NaN

//Operaciones aritmeticas
//1. suma, resta, multiplicación y división
const suma = 3 + 4
const resta = 4 - 4
const multiplicacion = 4 * 7
const division = 16/2
    /*las jerarquías aritmeticas, se resuelve, primero lo que esta dentro de (), seguido de raiz cuadrada y potenciación, 
    luego divisón, multiplicación y por ultimo suma y resta*/

//Modulo y exponenciación
const modulo = 15 % 8            //El operador de módulo o resto divide number1 por number2 (redondeando números de punto flotante a enteros) y devuelve solo el resto como resultado
const exponenenciacion = 2 ** 3   //retorna el resultado de elevar el primer operando a la potencia del segundo operando

//Precisión
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1)) //el toFixed es para indicarle cuantos decimales quiero que me muestre
console.log(resultado === 0.3) /*Hay que tener cuidado con las impresiosiones de JavaScript, si se hace esta comparación va a dar false
                                 *Por otr lado los tres iguales (===) es para ver si son iguales tanto a nivel de numero como a nivel de tipo*/

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16)  //devuelve la raíz cuadrada de un número
const valorAbsoluto = Math.abs(-7)  // Devuelve el valor absoluto de un número Decimal.
const aleatorio = Math.random().toFixed(2)

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)