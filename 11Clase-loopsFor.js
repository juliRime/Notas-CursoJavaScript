/*Los LOOPS son Un bucle o ciclo, es una secuencia de instrucciones de código que se ejecuta repetidas veces,
 hasta que la condición asignada a dicho bucle deja de cumplirse. 
 FOR: es muy similar la estructura del for con la de if
     
 for(variable; condición; incremento) {       variable que vamos a utilizar para hacer la iteración, la condición es lo que se tiene 
    codigo a ejecutar                         que ejecutar(generalmente viene de una variable externa); la variable es la que va incrementando
 
 }                                                                                   
 */

 let list = ['eat', 'sleep', 'code', 'repeat']

 for (let i = 0; i < list.length; i++){
   console.log(list[i])
 }
 