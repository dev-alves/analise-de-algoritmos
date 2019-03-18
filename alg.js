const shellsort = require('./shellsort');
const quickSort = require('./quicksort');

const iniciarArray = ( array ) => ({
    algoritmoDeOrdenacao: ( algortimo ) => algortimo( array ) 
});

iniciarArray( [ 1, 2, 10, 1000, 9, 274, 28, 98] ).algoritmoDeOrdenacao( shellsort );