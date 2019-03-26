const shellsort = require('./shellsort');
const quickSort = require('./quicksort');
const random = require('./random');

const iniciarArray = ( array ) => ({
    algoritmoDeOrdenacao: ( algortimo ) => algortimo( array ) 
});

console.time('random');
const arrayShell = random()
console.timeEnd('random');

console.time('shellsort');

iniciarArray( arrayShell ).algoritmoDeOrdenacao( shellsort );
console.timeEnd('shellsort');

console.log( 'Array [Shell Sort] => ',  arrayShell );

const arrayRandom = random();

console.time('quicksort');
quickSort( arrayRandom ).inicioEFim( 0, arrayRandom.length - 1);
console.timeEnd('quicksort');

console.log( 'Array [Quick Sort] => ', arrayRandom );