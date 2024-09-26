/*Con la condicional switch solo vamos a validar si se cumple la condición, si es TRUE. Si lo que esta dentro de 
switch es verdad, entonces entra en un escenario y se ejecuta. ponemos tener diferentes switchs para validar. Sino 
al final va a existir un default que se va a ejecutar si no es TRUE la condición 
          ESTRUCTURA DEL SWITCH:
switch(expresion) {       Esto es lo que valos a validar, LA CONDICIÓN A EVALUAR, si esto existe entonces
    case valor1:          pasamos al CASE que son los casos a evaluar, cada CASE tiene un valor que es el que se va a evaluar a ver si es TRUE;  
    código a ejecutar     si la expresión es igual al valor, se ejecutará este codigo.
    break                   Y con el break le decimos que se detenga (solo pasa esto si la condición es TRUE y este codigo se ejecuta).
case valor2:                      Podemos tener diferentes casos o CASE, y se pasa al siguiente y al siguiente si no se cumples
    código a ejecutar
    break
default:                                     Esto es para cuando ninguno de los casos sea verdad
    codigo a ejecutar                      
}                               
*/

let expresion = 'fresas'  /*Por debajo se utiliza la comparación === si es igual a valor y tipo, para que de TRUE o no
                           Se utiliza un comparador estricto*/
switch (expresion) {
    case 'Naranjas':
        console.log('Las naranjas cuestan $2000 el kilo')
        break
    case 'Manzanas':
        console.log('Las manzanas cuestan $5000 el kilo')
        break
        case 'Plátanos':
            console.log('El plátano cuesta $3000 el kilo')
            break
            case 'Mangos':
            case 'Papayas':
                console.log('Los mangos y las papayas cuestan $5500 el kilo')
                break
                default:
                    console.log(`Lo siento no contamos con ${expresion}`)
}

console.log('¿Hay algo mas que desees?')