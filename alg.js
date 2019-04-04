const shellsort = require('./shellsort');
const quickSort = require('./quicksort');
const randomA = require('./randomA')( 9000 ); // a última chamada, é o tamanho do vetor
const randomB = require('./randomB')( 9000 ); // a última chamada, é o tamanho do vetor

/* Array para testes de melhor, medio e pior caso

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
}*/

const iniciarArray = ( array ) => ({
    algoritmoDeOrdenacao: ( algortimo ) => algortimo( array ) 
});

console.time('shellsortA');
const arrayShellSortA = iniciarArray( randomA ).algoritmoDeOrdenacao( shellsort );
console.timeEnd('shellsortA');

console.log( 'Array [Shell SortA] => ',  arrayShellSortA );

console.time('shellsortB');
const arrayShellSortB = iniciarArray( randomB ).algoritmoDeOrdenacao( shellsort );
console.timeEnd('shellsortB');

console.log( 'Array [Shell SortB] => ',  arrayShellSortB );

const quickA = randomA;
console.time('quicksortA');
quickSort( quickA ).inicioEFim( 0, quickA.length - 1);
console.timeEnd('quicksortA');

console.log( 'Array [Quick Sort A] => ', quickA );

const quickB = randomB;
console.time('quicksortB');
quickSort( quickB ).inicioEFim( 0, quickB.length - 1);
console.timeEnd('quicksortB');

console.log( 'Array [Quick Sort B] => ', quickB );