/*
Para entender la programación sincrona y asincrona es importante entender como funciona JS Engine en el navegador. 
Hay dos puntos importantes:
1. Memory heap: es el espacio donde se guardan variables, funciones y objetos que se construyen en JS y se guardan de forma random. 
2. Call stack: Es la pila donde se van a llamar cada una de las funciones para ejecutar el programa. Por ejemplo: tengo una función que 
   se llama  'Hola mundo' y esa función manda a llamar a otra que se llama 'Mi nombre es Diego', el Call stack lo que haces es, manda a 
   llamar la primer función, ejecuta 'Hola mundo' y se manda a llamar la segunda unción y ejecuta 'Mi nombre es Diego' 
   A ESTA FUNCIÓN SE LE CONOCE COMO PROGRAMACIÓN SINCRONA: quiere decir que se esta trabajando una tarea a la vez.

   Así funciona JavaScript, trabajandouna tarea a la vez, esto funciona practicamente en el Call stack.
   Stack overflow: Esto es cuando llevamos nuestro stack de tareas a un punto donde excede el numero o la memoria que tiene permitida
   para poder ejecutar las tareas. Practicamente el navegador deja de funcionar (crashea)

   SI hay forma de que JavaScript pueda hacer ciertas tareas de forma asíncrona quiere decir en simultaneo. A continuación un ejemplo: 

                                           IMAGINAR UN RESTAURANTE

Call Stack (Pila de Llamadas):
Piensa en el call stack como un chef en una cocina. Este chef puede hacer solo una cosa a la vez. Cuando le das una receta, la pone en 
la pila de trabajo y la cocina. Si hay una receta más sencilla, como hacer una ensalada, la cocina primero, y cuando termine, pasa a 
la siguiente receta en la pila.

Queue (Cola):
Imagina que hay una mesa en el restaurante donde se colocan los pedidos que el chef aún no ha visto. Estos pedidos están en una cola 
esperando ser cocinados. Cada vez que el chef termina una receta, va a la mesa y agarra el siguiente pedido en la cola.

Event Loop (Bucle de Eventos):
El event loop es como el encargado del restaurante que está observando la cocina y la mesa de pedidos. Su trabajo es asegurarse de que el
 chef siempre tenga algo que hacer. Si el chef está libre, el event loop le pasa el siguiente pedido de la mesa de pedidos. Si no hay 
 nada en la mesa, el event loop espera a que lleguen más pedidos.

Web API (API de la Web):
Las web APIs son como los proveedores que traen ingredientes especiales para el chef. Por ejemplo, si necesitas un ingrediente especial 
que no está en la cocina, el chef lo pide a un proveedor (la web API). Mientras el proveedor trae el ingrediente, el chef sigue trabajando 
en otras cosas. Cuando el proveedor llega con el ingrediente, el chef lo agrega a la receta cuando esté listo.

Output (Salida):
La salida es el plato terminado que el chef pone en la mesa para los clientes. Es el resultado final que ves cuando todo ha terminado.

Cómo Funciona Juntos
- El call stack hace una tarea a la vez, como el chef que cocina una receta.
- Las tareas que no se pueden hacer inmediatamente se ponen en la queue, como pedidos esperando en la mesa.
- El event loop asegura que el chef siempre tenga algo que hacer, pasando los pedidos de la mesa de pedidos al chef cuando esté libre.
- Las web APIs traen ingredientes especiales cuando se necesitan, permitiendo al chef hacer recetas más complejas.
- El output es el resultado final que ves cuando el chef ha terminado de preparar todo.

*/