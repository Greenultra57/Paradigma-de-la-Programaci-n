// Función Pura

function Suma(x) {
    let accion = x + 5;
    return accion; 
};

console.log(Suma(7));


// Reto 1

function Division(x) {
    let dividir = x / 10;
    return dividir;
};

console.log(Division(50));

// Función Impura

let resultado = 0;
function SumarPrecio(a, b) {
    return resultado = resultado + a * b;
};

console.log(SumarPrecio(4, 6));
console.log(SumarPrecio(2, 3));
console.log(SumarPrecio(5, 8));

// Reto 2

let mensaje = "";
function Mensaje(a) {
    return mensaje = mensaje + a;
};

console.log(Mensaje("Hola mundo"))
console.log(Mensaje(", prestame cinco mil pesos"))

//  Composición funcional

function Multiplicar(a){
    return a * a;
};

function SumaDeLaMultiplicacion(num1, num2) {
    return Multiplicar(num1) + Multiplicar(num2);
};

console.log(SumaDeLaMultiplicacion(3, 4));