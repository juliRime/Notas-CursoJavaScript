/*
For in se utiliza para iteral objetovs enumerables. Ejemplo: objeto--> los objetos son una estructua de datos diferentes
      a lo que son las Arrays o Strings para guardar infomración. Los objetos tienen algo llamado propiedades. La
      propiedad tiene un valor a diferencia del Array que solo se genera una lista de valores, el objeto tiene que tener
      la propiedad y su valor. 

      for (variable in objeto)   { la variable es la que hará la iteración el in y el OBJETO que vamos a iterar.
       código a ejecutar
      }     */    

       const listaDeCompras = {
        Piña: 5,             //propiedades del objeto
        melon: 3,
        banano: 2,
        uva: 1
       }

       for (fruta in listaDeCompras){
        console.log(fruta)
       } 

       for(fruta in  listaDeCompras){   //en este caso fruta es una variable numerica que al hacer el loop se esta iterando, devuelve el indice
                                      //de las propiedades que existe en el objeto.  de la listaDeCompras traeme el indice 0 que sería 'piña'
        console.log(`${fruta}--> ${listaDeCompras[fruta]}`) //al hacer esta ultima expresión le estoy diciendo que me traiga el valor del 
                                                              //indice 0 que sería '5'. trae la propiedad y el valor
       }