const randomizar = () => {
    const TAM = 100;
    let vetor = new Array( TAM );
    
    const media = Math.round( TAM * 0.90 );
    
    const randomIndice = () => Math.floor( Math.random( ) * ( TAM ) );
    const randomValue = () => Math.round( Math.random() * 100000 );
    
    const n = randomIndice();
    
    let indice = 0;
    do {
        const indiceRandom = randomIndice();
        if( vetor[ indiceRandom ] === undefined ) {
            vetor[ indiceRandom ] = n;
            indice++;
        }
    } while( indice <= media );
    
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


module.exports = randomizar;