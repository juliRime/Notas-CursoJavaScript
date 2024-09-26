/*Las FUNCIONES son como piezas de lego o arma todo, cuando tenemos estas piezas se puede armar un 'sinfin' de figuras
 edificios, casas , carros y cuantas creaciones se deseen una y otra vez con las mismas fichas. Así son las funciones
 fragmentos de código que permiten escribir funcionalidades genericas que se pueden utilizar una y otra vez.
 EJEMPLOS:
function suma (a, b){  La palabra clave es function, así JS entiende la creación de una función. Seguido del nombre y luego los parámetros, 
                        estos son opcionales, no todas las funciones requieren de parámetros. 
return a +  b           cuerpo de la función, aquí se puede retornar algo o ejecutar un código, puede tenerlo o no tenerlo, es opcional.
}
suma(3, 5)         este es el llamado, la forma en que traigo o ejecuto ese fragmento de código, se hace con el nombre de la función y 
                    si tiene parámetros se le agregan, a esto se le conoce como argumento.
*/

function calculateDiscountedPrice (price, discountPercentage){
    const discount = (price * discountPercentage)/100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log('Original Price: $' + originalPrice)
console.log('Discount: ' + discountPercentage + '%')
console.log('Price with discount: $' + finalPrice)