/*Capacidades de las funciones al igual que otros objetos: 
Cuando creamos una función con su estructura habitual se le conoce como --> declaración de función
1. Pasar funciones como argumentos --> callbackv*/
function a () {}
function b (a) {}       // callback pasar una función como argumento de otra función 
b(a) 

//2. Retornar funciones 
function a () {
function b () {}          //tenemos la función b dentro de la función a y podemos retonar la función b 
return b 
}

//3. Asignar funciones a variables --> expresión de función
const a = function () {}     //A esta función no se le pone nombre, porque ya esta 'asignado' dejandolo acargo de la variable

//4. Tener propiedades y métodos
function a () {}
const obj = {}               //Creamos un objeto
a.call(obj)                 //.call es un metodo y las funciones también pueden tener metodos asociados para diferentes fines. 

//5. Anidar funciones --> Nested functions
function a () {
    function b () {
        function c () {   /*De esta forma se pueden llamar funciones dentro de ellas mismas, acceder a las variables que tienen las funciones
                        que son grandes, por ejemplo, desde c puedo acceder a propiedades de a, desde b puedo acceder a las de a....*/
        }
        c()
    }
    b()
}
a()

//6. Es posible almacenar funciones en objetos?
const rocket = {          //tenemos un objeto seguido de 
   name: 'Falcon 9',                // las propiedades de ese objeto        
   lauchMessage: function lauchMessage () {  //dentro de las propiedades colocamos una función 
    console.log('Fueguito🔥')                //Y pudimos ejecutar esas función. A esto se le conoce como MÉTODO
   }
}

rocket.lauchMessage()