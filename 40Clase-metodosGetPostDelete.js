const listElement = document.querySelector(".posts")
const postTemplate = document.getElementById("single-post")
const form = document.querySelector("#new-post form")
const fetchButton = document.querySelector("#available-posts button")
const postList = document.querySelector("#posts-container")



//se puede considerar que esta función es la plantilla 
function sendHTTPRequest(method, url, data) {
    return fetch(url, {                   //fetch es una promesa (hago un pedido en la pizzería)
        method: method,
        body: JSON.stringify(data),  //estamos cambiando el formato de Json a string
        headers: {                   //esto es todas las caracteristicas o info  de la petición en general.
            'Content-Type': 'application/json',     //Aquí estamos enviando solo el json
        },
    })
    .then((paquete) => {         //me llega el paquete
        console.log(paquete);
        
        return paquete.json()       //saco la pizza del paquete
    })
}



async function fetchPosts() {
    const responseData = await sendHTTPRequest(
        'GET',                                       // Método HTTP. En este caso método GET 
        "https://jsonplaceholder.typicode.com/posts" // Endpoint. Es decir la "puerta" por la que voy a entrar al servidor
    )

    console.log(responseData)
    const listOfPosts = responseData                           //esta constante me permite mantener limpia la respuesta que me trae el servidor

    for (const post of listOfPosts) {                           //por cada post que este en la listOfPosts hacer lo siguiente
        const postContainer = document.createElement("article")     //estamos generando un nuevo elementollamado 'article'
        postContainer.id = post.id                            //al nuevo elemento le generamos un id 
        postContainer.classList.add("post-item")       //al nuevo elemento le generamos una clase para que haga match con el css que tenemos
    
        const title = document.createElement("h2")    //estamos creando un titulo
        title.textContent = post.title   //poniendole el titulo con el contenido de texto que viene en el post
    
        const body = document.createElement("p");    //creamos un body que hace referencia al body del  objeto
        body.textContent = post.body
    
        const button = document.createElement("button"); //creamos un botón que va a borrar contenido
        button.textContent = "DELETE Content"
    
        postContainer.append(title)  //esto que acabamos de generar lo pueda inyectar en un append en listElement
        postContainer.append(body) //postCoontainer es como el contenedor de una tarjeta y esa tarjeta la agregamos a nuestra lista de elementos
        postContainer.append(button)
    
        listElement.append(postContainer)  //hace referencia a un contenedor que viene en nuestro
      }
    
}

// function fetchPostsThen() {                   otra forma de hacerlo, pero no es asincrona
//     sendHTTPRequest('GET', "https://jsonplaceholder.typicode.com/posts")
//         .then(responseData => {
//             console.log(responseData);
//         });
//     console.log("Terminé el método fetch");
// }



fetchButton.addEventListener("click", fetchPosts) 

//MÉTODO POST

async function createPost (title, content){
    const userId= Math.random() // Me va a generar un numero de manera aleatoria que se va a convertir en este userId
    const post = {              //creamos el pequeño objeto que vamos a enviar al servidor.
      title : title,
      body : content,
      userId : userId
    }
    sendHTTPRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post)
}

form.addEventListener('submit', (event) => {
    event.preventDefault() //para prevenir el comportamiento de refrescar 
    const title = event.currentTarget //para tener acceso a los elementos que tiene el formulario para obtener los valores de title y content
    .querySelector('#title').value     //que busque si el target actual tenga el Id de title y si sí, que me traiga el value
    const content = event.currentTarget
    .querySelector('#content').value  //valor de nuestros inputs

    createPost (title, content)
})


//MÉTODO DELETE

postList.addEventListener('click', (event) =>{
    console.log(event)
    if (event.target.tagName === 'BUTTON') {   //si el target al que le di click tiene de nombre BUTTON
       const postId = event.target.closest('article').id //para sacar el Id de ese post y tener acceso a el con .id

       sendHTTPRequest('DELETE',
        `https://jsonplaceholder.typicode.com/posts/${postId}`)  //la función que genera el fetch o la promesa. tercer parametro se pone 
                                                               //así /${postId} utilizando la variable que hace referencia al Id de post
                                                            //le estamos diciendo que el post que tiene este Id se borre
                                                                                      
    } 
})

//El Id que se utiliza para identificar que elemento se va a borrar viene en el Get que se hace, viene en la respuesta del servidor