const shellsort = require('./shellsort');
const quickSort = require('./quicksort');
const random = require('./random');

const iniciarArray = ( array ) => ({
    algoritmoDeOrdenacao: ( algortimo ) => algortimo( array ) 
});

console.log( 'Array [Shell Sort] => ', iniciarArray( random() )
    .algoritmoDeOrdenacao( shellsort ) );


const arrayRandom = random();
quickSort( arrayRandom ).inicioEFim( 0, arrayRandom.length - 1);
console.log( 'Array [Quick Sort] => ', arrayRandom );