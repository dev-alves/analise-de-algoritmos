const array = [1, 29234,123, 9, 180];

const shellsort = ( array ) => {
    
    let h = 1, temp, indice, j;
 
    do {
        h = 3 * h + 1;
    } while( h < array.length);

    do {
        h = Math.round( h / 3 );
        for(indice = h; indice < array.length; indice++) {
            temp = array[ indice ];
            j = indice;
            while( array[ j - h ] > temp ) {
                array[ j ] = array[ j - h ];
                j = j - h;
                if( j < h ) break;
            }
            array[ j ] = temp;
        }
    } while( h !== 1 );

    return array;
}

console.log('shellsort => ', shellsort( array ) );

module.exports = shellsort;