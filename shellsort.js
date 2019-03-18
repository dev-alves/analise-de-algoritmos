const shellsort = ( array ) => {

    const tamanhoArray = array.length;
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

    console.log('shellsort => ', array );
}

module.exports = shellsort;