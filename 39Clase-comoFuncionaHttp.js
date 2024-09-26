/*
Hablando de HTTP
el la parte del front se hacen ciertas peticiones, se utilizan APIs para pedir, enviar o borrar información
esto se hace gracias a ciertos métodos de HTTP. Cuando ocupamos fetch le estamos pidiendo a HTTP atráves de un servidor
que nos envie cierta información para tomarla e inyectarla en el DOM
Aprender de:
- Inicio en la consola del navegador. 
- Cómo entender el tipo de método utilizado. 
- Entender qué tipo de información trae.
-Entender mas profundamente como estamos manejando HTTP através del front para manipular las llamadas del API, para pedir info 
o para enviarla...

Aprender como se utiliza HTTP desde la parte del front-end
*/

fetch('https://jsonplaceholder.typicode.com/posts')  //con fetch hago la petición del API que esta entre mocillas
.then((response) => response.json())                 //convierte la respuesta en .json un formato organizado de claves:valores
.then((data) => console.log(data))                   // aquí tomamos ese nuevo formato y lo imprimimos. 