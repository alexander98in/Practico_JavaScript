const lista = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
    5,
    7,
    7,
    5
];

const listaCount = {};

lista.map(
    function(elemento) {
        if(listaCount[elemento])
        {
            listaCount[elemento] += 1;
        }else {
            listaCount[elemento] = 1;
        }
    }
);

const listaArray = Object.entries(listaCount).sort(
    function(elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

const moda = listaArray[listaArray.length-1];