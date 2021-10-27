export const fetchPokemon = ( endpoint, data, method = 'GET' ) => {
    const baseUrl = "https://pokemon-pichincha.herokuapp.com/pokemons";
    const url = `${ baseUrl }/${ endpoint }`;
    console.log(url);
    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}
