/* 
CLOSURE:  función que tiene acceso a variables de un ámbito externo, incluso después de que esa función haya terminado de ejecutarse. 

Ámbito léxico: cada vez que se declara una función, crea su propio ámbito léxico y puede acceder a las variables dentro de ese ámbito 
y a las variables en ámbitos superiores. 
*/ 
 
//Al crear esta función se crea un ámbito léxico y la función que tiene adentro también tiene un ámbito léxico, esta segunda función puede 
//acceder a a todo lo que tenga por dentro y también lo que tenga por fuera, en este caso, a lo que tiene la función que la contiene. 
function outerFunction (){                          //Una función que tiene una variable y adentro 
    let outerVariable = 'I am from outer function'

    function innterFunction () {                    //tiene otra función 
        console.log(outerVariable)
    }
    return innterFunction
}

const closureExample = outerFunction()
closureExample()

//Hay que tener cuidado con los closure, a continuación veremos por qué:

function createCounter () {
    let count = 0 

    return function(){
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()
//la respuesta es: 1,2,1  Aquí se empieza a tener problemas porque en la linea 34 y 35 almacena unos valores y en la linea 38 almacena otros 
//valores, empezamos a tener problemas en la memoria. Por eso hay que tener cuidado con los CLOSURE para no excedernos en el uso de la 
//memoria

//Se puede tener diferentes tipos de contextos en los closures:

function outer () {
    let message = 'Hello, '

    function inner (name) { 
        let message2 = 'Hola Carola ' + name   //este mensaje se 'crea' en cada llamado porque esta dentro de inner
        message += name           //Aquí toma el mensaje creado fuera de la función y este mensaje no cambia y el += concatena
        console.log(message)
        console.log(message2)
    }
    return inner //cuando pongo el llamado sin (paréntesis) se hace referencia a su construcción
}

const closureA = outer()   //cuando le pongo (paréntesis) estoy ejecutando  
const closureB = outer()  //cada uno de estos closure crea su propio contexto o ámbito léxico 

closureA ('Alicia')     //aquí paso el parámetro a la función. 
closureB ('Bob')
closureB('carlos')

/* 
En otras palabras, un closure es una función que encapsula un dato (que puede ser una variable o un objeto) 
y recuerda el estado del entorno en el que se definió. Esto permite que la función interna acceda y utilice 
variables o valores de la función externa, incluso después de que esta haya finalizado.
*/