import { types } from "../types/types";
import { fetchPokemon } from "./../helpers/fetchPokemonApi";

export const startPokemonsLoading = () => {
    return async(dispatch) => {

        // try {
            
            const resp = await fetchPokemon( '?idAuthor=1' );
            const body = await resp.json();
            console.log(body);
            dispatch( getPokemons( body ) );

        // } catch (error) {
        //     console.log(error)
        // }

    }
}

const getPokemons = (events) => ({
    type: types.getPokemons,
    payload: events
})