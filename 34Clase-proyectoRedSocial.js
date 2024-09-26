/*
Requerimiento del reto:
1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario exiten en la base de datos. 
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario. 
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningún timeline.
*/

const userDatabase = [
    {
        user: 'Camila',
        password: '1234'
    },
    {
        user: 'Paty',
        password: '5678'
    },
    {
        user: 'Paquito',
        password: '9876'    
    }]
const usersTimeline = [
    {
        user: 'Camila',
        timeline: 'JavaScript es un gran reto'
    },
    {
        user: 'Paty',
        timeline: 'Ser QA es genial'
    },
    {
        user: 'Paquito',
        timeline: 'Estudiar programación es muy chimba' 
    }
]

const user = prompt('Ingresa tu nombre de usuario')
const password = prompt('Ingresa tu contraseña')

console.log(user)

const comprobarUser = userDatabase.find(posicion => posicion.user === user && posicion.password === password) //se busca con .find en el array y este devuleve un elemento, en este caso un objeto que cumpla la condición
                                  //el.find devuelve el primer elemento u objeto que cumpla la condición si no, entonces devuleve undefined
if (comprobarUser) {     //se verifica que este valor no sea undefined, si no lo es, hace lo que esta dentro del if

    const welcome = usersTimeline.find(posicion => posicion.user === comprobarUser.user)
    console.log(`Bienvenide ${comprobarUser.user}: ${welcome.timeline}`)

}else {
    console.log('Usuario o contraseña son incorrectos, intentelo de nuevo')
}

/*
OTRA SOLUCIÓN

const username = prompt('Cuál es tu usuario?')
const password = prompt('Cuál es tu contraseña?')

function usuarioExistente(username, password){
 for (let i = 0; i < usersDatabase.length; i++) {
  if (
    userDatabase[i].username === username &&
    userDatabase[i].password === password
  )}
    console.log('es correcto')
    break
}else {
   console.log('No es correcto')
}

usuarioExistente(username, password)
___________________________________________________________________________________________

SOLUCIÓN COMPLETA

const username = prompt('Cuál es tu usuario?')
const password = prompt('Cuál es tu contraseña?')

function usuarioExistente(username, password){
 for (let i = 0; i < usersDatabase.length; i++) {
  if (
    userDatabase[i].username === username &&
    userDatabase[i].password === password
  ){
    return true
    break
}
} return false
} 

function signIn (username, password) {
    if (usuarioExistente(username, password)) {
       alert(`Bienvenido a tu cuenta ${username}`)
       console.log(usersTimeline)
    } else {
      alert('Uuups, usuario o contraseña incorrectos!') 
    }
}

signIn(username, password)
*/



