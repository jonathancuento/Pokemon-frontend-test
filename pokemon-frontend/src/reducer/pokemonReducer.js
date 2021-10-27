import { types } from "../types/types";

const initialState = {
    pokemons: [],
    activePokemon: null,
    searchWord: ""
};


export const pokemonReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.getPokemons:
            return {
                ...state,
                pokemons: [...action.payload]
            }
        case types.setSearchWord:
            return {
                ...state,
                searchWord: action.payload
            }
        case types.setActivePokemon:
            return {
                ...state,
                activePokemon: action.payload
            }
        case types.updatePokemon:
            return {
                ...state,
                pokemons: state.pokemons.map(
                    pokemon => (pokemon.id === action.payload.id) ? action.payload : pokemon
                )
            }
        case types.addPokemon:
            return {
                ...state,
                pokemons: [
                    ...state.pokemons,
                    action.payload
                ]
            }

        case types.deletePokemon:
            return {
                ...state,
                pokemons: state.pokemons.filter(
                    pokemon => (pokemon.id !== action.payload)
                )
            }
        default:
            return state;
    }
};