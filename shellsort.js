const shellsort = ( array ) => {
    
    let novoArray = [...array ];

    let h = 1, temp;
    do {
        h = 3 * h + 1;
    } while( h < array.length);

    do {
        h = Math.round( h / 3 );
        novoArray.map( function( elemento, indice = h, arrayAux ) {
            temp = arrayAux[ indice ];
            j = indice;
            while( arrayAux[ j - h ] > temp ) {
                arrayAux[ j ] = arrayAux[ j - h ];
                j = j - h;
                if( j < h ) break;
            }
            arrayAux[ j ] = temp;
        });
    } while( h !== 1 );
    return novoArray;
}

module.exports = shellsort;


/**
 * const tamanhoArray = array.length;
    let indice, j, h, temp;

    h = 1;

    do {
        h =  3 * h + 1;
    } while( h < tamanhoArray );

    do {
        h = Math.round(h / 3);
        for( indice = h; indice < tamanhoArray; indice++ ) {
            temp = array[indice];
            j = indice;

            while( array[ j - h] > temp ) {
                array[ j ] = array[ j -h ];
                j = j - h;

                if( j < h ) break;
            }

            array[ j ] = temp;
        }
    } while( h !== 1 );
 */