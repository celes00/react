/* 
EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
UTILIZAMOS SWITCH
 */


let eleccion = prompt("Recomendaciones de Peliculas, series o libros. \n Escribe el numero correspondiente a tu eleccion \n 1.libro \n 2.serie \n 3.pelicula ");

switch (eleccion) {
    case "1":{
        alert("La torre oscura_Stephen King")
    }
        break;
    case "2": {
        alert("Stranger Things")
    }
        break;
    case "3": {
        alert("La historia sin Fin.")
    }
        break;
    default:{
        alert("numero invalido");
    }
        break;
}


// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;



function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
console.log(str)
}
devolverString("Cadena de texto")


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let suma = x + y;
  return(suma);
}
suma(4,8);

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  let resta = x - y;
  return(resta);
}
resta(10,3);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  let multiplicar = x * y;
  return(multiplicar);
}
multiplica(2,6)

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let dividir = x / y;
  return(dividir);
}
divide(25,5);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  if(x===y){
    return("true");
  }
  else {
    return("false");
  }
};
sonIguales(2,5)

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(str1.length===str2.length){
    return("true");
  }
  else {
    return("false");
  }
}
tienenMismaLongitud("hola","bye");

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
    if(num < 90){
      return("true");
    }
    else {
      return("false");
    }
  };
  menosQueNoventa(80);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num > 50){
    return("true");
  }
  else {
    return("false");
  }

}
mayorQueCincuenta(65);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let resto = x % y;
  return(resto);
}
obtenerResto(25,3);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 === 0){
    return("true");
  }
  else {
    return("false");
  }
}
esPar(8)

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 === 1){
    return("true");
  }
  else {
    return("false");
  }
}
esImpar(9);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let cuadrado = num * num; // o Math.pow(n,n)
  return(cuadrado); 
}
elevarAlCuadrado(3);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let cubo = Math.pow(num,3);
  return(cubo);
}
elevarAlCubo(3);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let resultado = Math.pow(num,exponent);
  return(resultado);
}
elevar(2,3);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
    let resultado = Math.round(num);
    return(resultado);
  }
  redondearNumero(2.33);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
      let resultado = Math.ceil(num);
      return(resultado);
    }
    redondearHaciaArriba(2.33);

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
        let resultado = Math.random();
        return(resultado);
      }
      numeroRandom();

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if(numero > 0){
    return("Es positivo");
  }
  else if (numero < 0 ){
    return("Es negativo ")
  }
  else {
    return("false");
  }

}
esPositivo(23);

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  let nuevoString = str + "!";
  return(nuevoString);
}
agregarSimboloExclamacion("Hola");

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  let nombreCompleto = nombre + " " + apellido;
  return(nombreCompleto);
}
combinarNombres("Maria Celeste", "Antelo");

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
    let saludo = "Hola " + nombre ;
    return(saludo);
  }
  obtenerSaludo("Celeste");

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  let areaRectangulo = alto * ancho;
  return(areaRectangulo);
}
obtenerAreaRectangulo(4,6);

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
    let perimetroCuadrado = lado * 4;
    return(perimetroCuadrado);
  }
  retornarPerimetro(3);


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
      let areaTriangulo = (base*altura)/2;
      return(areaTriangulo);
    }
   areaDelTriangulo(3,4);

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  let euros =Number(prompt("Cuantos euros quiere convertir"));
  let eruroADolar = euros * 1.2;
  return(euros + " euros. Al cambio de hoy, equivalen a "+ eruroADolar + " dolares.");
}
deEuroAdolar(20);

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
let datoVocal = prompt("Sabes cual es una vocal?. Ingresa una.");
let vocal = ["a", "e", "i", "o", "u"]
if ((datoVocal.length > 1) || ((vocal.indexOf(datoVocal) === -1))){
     return("Dato incorrecto")
     ;}
else {
    return("Es vocal");
}
}
esVocal();

