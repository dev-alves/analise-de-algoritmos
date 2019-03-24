const shellsort = require('./shellsort');
const quickSort = require('./quicksort');
const random = require('./random');

const array = [ 2000, 2, 10, 1000, 9, 274, 28, 98]
const arrayQuickSort = [ 5, 1, 4, 2, 3, 10, 9 ];

const iniciarArray = ( array ) => ({
    algoritmoDeOrdenacao: ( algortimo ) => algortimo( array ) 
});

console.log( 'Array [Shell Sort] => ', iniciarArray( random() )
    .algoritmoDeOrdenacao( shellsort ) );


const arrayRandom = random();
quickSort( arrayRandom ).inicioEFim( 0, arrayRandom.length - 1);
console.log( 'Array [Quick Sort] => ', arrayRandom );