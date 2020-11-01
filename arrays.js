const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n*2);

//const suma=(a,b) => a+b;

//let resultad=suma(3,4);
//console.log(resultad);


//let hello=(nombre) =>{
    //let respuesta="hello "+ nombre;
    //return respuesta;

//};
    


//console.log(hello("carlos"));

//if(condicion)


//<
//> [3,4,5,6,7]
//<=
//>=

//=
//==

// vamos a crear una funcion que haga lo siguiente:
//le vamos a pasar un arreglo y un numero
//la funcion debe devolver la posicion donde se encuentre el numero





let numero;
let array=[2,3,76,34,-3,22,10,44,-5];

let buscar=(arreglo,numero) =>{

    let respuesta=1000;

    /// Este for lo que hace es recorrer todos los elementos en el arreglo 
    for(let contador=0;contador<=8;contador++){

        //Esto lo que hace es comparar
        if(arreglo[contador]==numero){

            respuesta=contador;

        }

    }
    if(respuesta==1000){
        respuesta="No lo encontre";

    }




    //
    //
    //
    


    return respuesta;
}

console.log(buscar(array,0));






