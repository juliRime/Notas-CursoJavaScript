const numeroAleatorioEntre0y1 = Math.random()                // Math.random me da un numero aleatorio de 0 a 1
const numeroAleatorioEntre0y10 = numeroAleatorioEntre0y1 * 10  /* Aquí multiplico ese numero aleatorio anterior entre 0 y 1 por 10 para que el
                                                                  resultado no sea por ejm: 0,52 sino 5,2*/
const numeroAleatorioEntre1y10 = numeroAleatorioEntre0y10 + 1  /* Aquí estamos sumandole al resultado guardado en numeroAleatorioEntre0y10
                                                                    1 para que nunca de 0*/
const numeroSecreto = Math.floor(numeroAleatorioEntre1y10)  /* Math.floor devuelve numeros enteros (menor que sigue)quitando los decimales por ejmpl:
                                                                si da 5,2 este le quita el ,2 y queda solo 5*/
/*todo lo anterior también se puede escribir en una sola linea resumido, solo que para mayor entendimiento se realizó linea por linea; 
la linea se vería así:              const numeroSecreto = Math.floor(Math.random() * 10 + 1)*/
const intentoJugador = prompt('Adivina el numero secreto del 1 al 10') // prompt lo que crea es una ventana con el mensaje 'deseado'
const numeroJugador = parseInt(intentoJugador) /*el parseInt convierte un string en un numero*/
/*estas dos lineas anteriores también se puede escribir en una sola linea resumido, linea se vería así:
           const numeroJugador = parseInt(prompt('Adivina el numero secreto del 1 al 10')) */
console.log(`Este es el número con el que juegas:  ${numeroJugador}`)

if(numeroJugador === numeroSecreto) {
    console.log('¡Felicidades, adivinaste el número secreto!')
} else if(numeroJugador < numeroSecreto) {
    console.log('tu número es menor al número secreto, No adivinaste, sigue intentando')
} else if(numeroJugador < 10 && numeroJugador > numeroSecreto){
    console.log('tu número es mayor al número secreto, No adivinaste, sigue intentando')
}else if(numeroJugador > 10){
    console.log('el número que ingresaste no es válido')
}