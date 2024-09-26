/* do while es parecido al while, es para realizar ciclos, la diferencia radica en que en el do while el código
          se va a ejecutar aun que sea una vez, luego revisa la condición si si se sigue cumpliendo se vuelve a ejecutar,
          se detiene cuando la ejecución no se cumpla. 
do{
código a ejecutar
} while (condición)
*/

let contador = 0

do{
    console.log(contador)  //este es el código que se va a ejecutar primero
    contador++
} while (contador < 10) //aquí verifica si la condición se cumple o no, si se cumple vuelve a ejecutar el código, sino se detiene.