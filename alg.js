const shellsort = require('./shellsort');
const quickSort = require('./quicksort');

const array = [ 2000, 2, 10, 1000, 9, 274, 28, 98];

const iniciarArray = ( array ) => ({
    algoritmoDeOrdenacao: ( algortimo ) => algortimo( array ) 
});

const arrayOrdenadoComShellSort = iniciarArray( array )
    .algoritmoDeOrdenacao( shellsort );

console.log('arrayOrdenadoComShellSort => ', arrayOrdenadoComShellSort);
