let nombre = "Daniel";
let edad = 15;
let apellido = "Caicedo";
let numero = 219847342;

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    let operación = a - b;
    return operación; 
}


console.log("El resultado de la suma es: " + sumar (numero, edad));
let ResultadoResta = restar(numero, edad);

console.log("Resultado de la resta es: " + ResultadoResta);
console.log("Nombre completo: " + nombre + " " + apellido + ", Edad: " + edad);
