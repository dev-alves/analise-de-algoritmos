const shellsort = require('./shellsort');
const quickSort = require('./quicksort');
const random = require('./random');

const melhorCaso = ( array ) => array.sort( ( a, b ) => {
    if( a < b )
        return -1;
    if( a > b )
        return 1;
});

const medioCaso = ( array ) => {
    let primeiraMetade = array.slice(0, Math.floor( array.length / 2 ));
    let segundaMetade = array.slice(Math.floor( array.length / 2 ));

    primeiraMetade.sort( ( a, b ) => {
        if( a < b )
            return -1;
        if( a > b )
            return 1;
    });

    return [ ...primeiraMetade, ...segundaMetade ];
}

const iniciarArray = ( array ) => ({
    algoritmoDeOrdenacao: ( algortimo ) => algortimo( array ) 
});

const arrayShellSortMelhorCaso = melhorCaso( random() );
console.log( 'vetor melhor caso => ', arrayShellSortMelhorCaso );
const arrayShellSortMedioCaso = medioCaso( random() );
console.log( 'vetor medio caso => ', arrayShellSortMedioCaso );

console.time('shellsort-melhorCaso');
const arrayShellSortOrdenadoMelhorCaso = iniciarArray( arrayShellSortMelhorCaso ).algoritmoDeOrdenacao( shellsort );
console.timeEnd('shellsort-melhorCaso');

console.time('shellsort-medioCaso');
const arrayShellSortOrdenadoMedioCaso = iniciarArray( arrayShellSortMedioCaso ).algoritmoDeOrdenacao( shellsort );
console.timeEnd('shellsort-medioCaso');

console.log( 'Array [Shell Sort Melhor Caso] => ',  arrayShellSortOrdenadoMelhorCaso );
console.log( 'Array [Shell Sort Medio Caso] => ',  arrayShellSortOrdenadoMedioCaso );

const arrayRandom = random();

/*console.time('quicksort');
quickSort( arrayRandom ).inicioEFim( 0, arrayRandom.length - 1);
console.timeEnd('quicksort');

console.log( 'Array [Quick Sort] => ', arrayRandom );*/