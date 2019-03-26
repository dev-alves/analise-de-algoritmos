const shellsort = require('./shellsort');
const quickSort = require('./quicksort');
const random = require('./random');

const iniciarArray = ( array ) => ({
    algoritmoDeOrdenacao: ( algortimo ) => algortimo( array ) 
});

console.time('random');
const arrayShellSortTest = random()
console.timeEnd('random');

console.time('shellsort');

const arrayShellSortOrdenado = iniciarArray( arrayShellSortTest ).algoritmoDeOrdenacao( shellsort );
console.timeEnd('shellsort');

console.log( 'Array [Shell Sort] => ',  arrayShellSortOrdenado );

const arrayRandom = random();

console.time('quicksort');
quickSort( arrayRandom ).inicioEFim( 0, arrayRandom.length - 1);
console.timeEnd('quicksort');

console.log( 'Array [Quick Sort] => ', arrayRandom );