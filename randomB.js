const randomB = ( tamanhoDoArray ) => {
    const TAM = tamanhoDoArray;
    let vetor = new Array( TAM );
    
    const randomIndice = () => Math.floor( Math.random( ) * ( TAM ) );
    const randomValue = () => Math.round( Math.random() * 100000 );
    
    const n = randomIndice();

    for( let i = 0; i <= TAM; i ++ ) {
        let valorRandomico = randomValue();
        if(vetor[ i ] === undefined ) {
            while( vetor.some( ( element ) => element === valorRandomico ) ) {
                valorRandomico = randomValue();
            }
            vetor[ i ] = valorRandomico;
        }
    }

    return vetor;
}

module.exports = randomB;