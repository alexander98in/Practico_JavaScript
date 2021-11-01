function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numero) {
    if(numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) 
{
    const mitadLista = parseInt(lista.length / 2);
    let mediana;

    if (esPar(lista.length)) 
    {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista-1];
        mediana = calcularMediaAritmetica([elemento1, elemento2]);
    }
    else
    {
        mediana = lista[mitadLista];
    }

    return mediana;
}
