/*
Async and await es otra forma de trabajar código de forma asincrona.
esto devuelve una promesa, el código que este en el async and await se pasa a la sección de web API, cuando esta resuelta regresa con 
el even loop directamente al call stack para que se ejecute la respuesta de la promesa, el call back. 
La diferencia que tiene el async n´await es que tiene una forma las legible de leer los pasos. 
FETCH es otra web API, nos regresa uunna promesa, trabaja por su cuenta  


function fetchDate () {
    fetch('https://rickandmortyapi.com/api/character') //fetch es la promesa
    .then((Response) => Response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}
*/
//async n await.

async function fetchDate() {   //esta función ya esta esperando que sea una promesa
    try {                     // Esto es o que tiene que pasa es como el (then)
      let response = await fetch('https://rickandmortyapi.com/api/character')  //await indica que esperamos que se resuleva la promesa. 
      let data = await response.json()    //es 'lo mismo' solo que se le asigna el resultado a una valor. 
      console.log(data)                  //.json es una forma de guardar información de manera ordenada de tipo clave-valor
    } catch (error) {
        console.log(error)
    }
}

/*
Si hay que hacer mas de una petición es posible hacerlo utilizando un bucle llamado FOR AWAIT OFF que va a utilizar un async n await para 
pasar esas peticiones, trae las peticiones en un array de forma asincrona, cuando se resulven vuelven al call stack y tener respuesta de 
esos datos. 
*/
 
const urls = [          //construir nuestro array, en este caso de diferentes urls
   'https://rickandmortyapi.com/api/character',
   'https://rickandmortyapi.com/api/location',
   'https://rickandmortyapi.com/api/episode'
]

async function fetchNewData() {
    try {
        for await (let url of urls)  {  //por cada urls que exista en urls has lo siguiente
           let response = fetch (url)  //esto nos va a traer una url del arrable anterior. 
           let data = await (await response).json()
           console.log(data)
        } 
    }catch (error) {
        console.log(error)
    }
}