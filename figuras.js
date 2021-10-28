//Codigo para la figura geométrica del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

//Codigo para la figura geométrica del triangulo
console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

//Codigo para la figura geométrica del círculo
console.group("Circulos");
function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();

//Aquí interactuamos con el html
function calcularPerimetroCuadrado() {
    const input = document.getElementById("input_cuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("input_cuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input_lado1 = document.getElementById("input_lado1_triangulo");
    const value_lado1 = parseInt(input_lado1.value);
    const input_lado2 = document.getElementById("input_lado2_triangulo");
    const value_lado2 = parseInt(input_lado2.value);
    const input_base = document.getElementById("input_base_triangulo");
    const value_base = parseInt(input_base.value);
    const perimetro = perimetroTriangulo(value_lado1, value_lado2, value_base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input_altura = document.getElementById("input_altura_triangulo");
    const value_altura = input_altura.value;
    const input_base = document.getElementById("input_base_triangulo");
    const value_base = input_base.value;
    const area = areaTriangulo(value_base, value_altura);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input_radio = document.getElementById("input_circulo");
    const value_radio = parseInt(input_radio.value);
    const perimetro = perimetroCirculo(value_radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input_radio = document.getElementById("input_circulo");
    const value_radio = parseInt(input_radio.value);
    const area = areaCirculo(value_radio);
    alert(area);
}