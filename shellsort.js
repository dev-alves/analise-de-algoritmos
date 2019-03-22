const shellsort = ( array ) => {
    
    let novoArray = [...array ];

    let h = 1, temp;
    do {
        h = 3 * h + 1;
    } while( h < array.length);

    do {
        h = Math.round( h / 3 );
        novoArray.map( function( elemento, indice = h, novoArray ) {
            temp = novoArray[ indice ];
            j = indice;
            while( novoArray[ j - h ] > temp ) {
                novoArray[ j ] = novoArray[ j - h ];
                j = j - h;
                if( j < h ) break;
            }
            novoArray[ j ] = temp;
        });
    } while( h !== 1 );

    return novoArray;
    
}

module.exports = shellsort;