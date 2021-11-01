function calcularMediaAritmetica(lista) {
    //let sumaLista = 0;
    //for (let iterador = 0; iterador < lista.length; iterador++)
    //{
    //    sumaLista = sumaLista + lista[iterador];
    //}

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}