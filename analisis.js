// Helpers
function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de Mediana
function calcularMedianaSalarios(listaSalarios) {
    const mitad = parseInt(listaSalarios.length / 2);
    let mediana;
    if(esPar(listaSalarios.length))
    {
        const elemento1 = listaSalarios[mitad];
        const elemento2 = listaSalarios[mitad - 1];
        mediana = calcularMediaAritmetica([elemento1, elemento2]);

    } else {
        mediana = listaSalarios[mitad];
    }
    return mediana;
}

// Mediana General
const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA -salaryB;
    }
);

const medianaGeneralCol = calcularMedianaSalarios(salariosColSorted);

// Mediana del top 10%
const longitudSalariosColSorted = salariosColSorted.length;
const spliceStart = (longitudSalariosColSorted * (100 - 10)) / 100;
const spliceCount = longitudSalariosColSorted - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Col = calcularMedianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
})