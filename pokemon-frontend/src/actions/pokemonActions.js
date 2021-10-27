import { types } from "../types/types";
import { fetchPokemon } from "./../helpers/fetchPokemonApi";

export const startPokemonsLoading = () => {
    return async (dispatch) => {

        try {

            const resp = await fetchPokemon('?idAuthor=1');
            const body = await resp.json();
            console.log(body);
            dispatch(getPokemons(body));

        } catch (error) {
            console.log(error)
        }

    }
}

export const startPokemonUpdating = (pokemonObject) => {
    return async (dispatch) => {

        try {
            const resp = await fetchPokemon(pokemonObject.id, pokemonObject, 'PUT');
            const body = await resp.json();
            console.log(body);
            dispatch(updatePokemon(pokemonObject));

        } catch (error) {
            console.log(error)
        }

    }
}


export const startPokemonAdding = (pokemonObject) => {
    return async (dispatch) => {

        try {
            console.log(pokemonObject);
            const resp = await fetchPokemon('?idAuthor=1', {...pokemonObject, idAuthor:1}, 'POST');
            const body = await resp.json();
            console.log(body)
            dispatch(addPokemon(pokemonObject));
        } catch (error) {
            console.log(error);
        }



    }
}


export const startPokemonDeleting = (id) => {
    return async (dispatch) => {

        try {
            const resp = await fetchPokemon(id, [],'DELETE');
            const body = await resp.json();
            console.log(body);
            dispatch(deletePokemon(id));

        } catch (error) {
            console.log(error)
        }

    }
}


const getPokemons = (pokemonsList) => ({
    type: types.getPokemons,
    payload: pokemonsList
})

export const setSearchWord = (word) => ({
    type: types.setSearchWord,
    payload: word
})

export const setActivePokemon = (pokemonObject) => ({
    type: types.setActivePokemon,
    payload: pokemonObject
})

export const updatePokemon = (pokemonObject) => ({
    type: types.updatePokemon,
    payload: pokemonObject
})
export const addPokemon = (pokemonObject) => ({
    type: types.addPokemon,
    payload: pokemonObject
})

export const deletePokemon = (id) => ({
    type: types.deletePokemon,
    payload: id
})