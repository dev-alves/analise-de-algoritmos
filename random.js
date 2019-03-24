const TAM = 20;
let vetor = new Array( TAM );

const media = Math.round( TAM * 0.90 );

const randomIndice = () => Math.floor( Math.random( ) * ( TAM + 1 ) );
const randomValue = () => Math.round( Math.random() * 10 );

const n = randomIndice();

let indice = 0;
const randomizar = () => {
    do {
        const indiceRandom = randomIndice();
        if( vetor[ indiceRandom ] === undefined ) {
            vetor[ indiceRandom ] = n;
            indice++;
        }
    } while( indice <= media );
    
    for( let i = 0; i < TAM; i ++ ) {
        if(vetor[i] === undefined ) {
            vetor[i] = randomValue();
        }
    }

    return vetor;
}


module.exports = randomizar;