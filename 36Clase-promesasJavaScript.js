/*
Las promesas es lo que nos ayuda a que nuestro código pase de ser sincrono a ser asíncrono, es la forma en la que le decimos al navegardo
que esta función en particular tienes que trabajarla de forma separada y cuando este resuelta me la puedes regresar para que yo la pueda 
agregar al call stack y me de un resultado. 

Las promesas tienen tres estados: 
1. Pending: que es el estado de pendiente, es cuando la promesa se va a crear. 
2. Fulfilleed: Este estado viene cuando la promesa esta resulta.
3. Rejected: Es cuando la promesa no se resolvió.

Las promesas manejan dos tipos de callback:
1. Resolve: cuando la promesa se resuelve. 
2. Reject: Cuando la promesa no se puede resolver. 

También se tienen dos métodos en las promesas que son importantes.
Generamos una función como una promesa pero también podemos utilizar el 
1. then: que es un método, se ejecuta cuando la promesa resuelve. Una vez que la promesa esta en estado fulfill y con un callback de 
resolve, entonces entra a ejecutarse el then. 
2. catch: cuando la promesa no se resulve y en el catch obtenemos el error para poder imprimirlo y nos diga que hace que la promesa no se 
resuelva. 
*/

//Aquí, estamos creando una nueva promesa. Promise es una clase en JavaScript que se usa para manejar operaciones asíncronas. 
//La promesa acepta una función con dos parámetros: resolve y reject.
//resolve: Se llama cuando la operación se completa con éxito. reject: Se llama cuando la operación falla.
const promise = new Promise((resolve, reject)=> {
    setTimeout(()=>{         //Dentro de la promesa, setTimeout, es una función que retrasa la ejecución de un bloque de código.
        let operationSuccessful = true //Esta variable simula el resultado de una operación. Puedes imaginar que esta variable es el 
                                        //resultado de alguna acción que estamos esperando (como cargar datos de un servidor).
    if (operationSuccessful) {            //Si operationSuccessful es true, llamamos a resolve
        resolve('La operación fue exitosa!')
    } else {
        reject('Falló la operación') //Si operationSuccessful fuera false, llamaríamos a reject
    }
    }, 2000) //n este caso, queremos que el código dentro de setTimeout se ejecute después de 2000 milisegundos (2 segundos).
})
//Cuando uses esta promesa en tu código, puedes añadir .then() para manejar el caso de éxito y .catch() para manejar el caso de error.

promise.then((message) => {   //then y catch se utilizan para ejecutar la promesa
    console.log(message)
}).catch((message) => {
    console.log(message)
})