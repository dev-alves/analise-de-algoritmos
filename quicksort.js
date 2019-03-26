const particionar = ( inicio, array ) => ({
    selecionarPivo: ( pivo ) => {
        for( let i = inicio; i < pivo; i++ ) {
            if( array[ i ] <= array[ pivo ] ) {
                swap( array, inicio++, i);
            }
        }
        swap( array, inicio, pivo );
        return inicio;
    }
});


const swap = ( array, elementoEsquerdo, elementoDireito ) => {
    const auxElementoEsquerdo = array[ elementoEsquerdo ];

    array[ elementoEsquerdo ] = array[ elementoDireito ];
    array[ elementoDireito ] = auxElementoEsquerdo;

    return auxElementoEsquerdo;
};


const quicksort = ( array ) => ({
    inicioEFim: ( inicio, fim )  => {
    
        if( inicio >= fim ) {
            return;
        }

        inicio = particionar( inicio, array ).selecionarPivo( fim );

        quicksort( array ).inicioEFim( 0, inicio - 1 );        
        quicksort( array ).inicioEFim( inicio + 1, fim );
    }
});

module.exports = quicksort;