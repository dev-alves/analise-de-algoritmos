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