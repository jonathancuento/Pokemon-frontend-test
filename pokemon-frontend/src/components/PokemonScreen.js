import React, { useEffect } from 'react';
import { NavBar } from './../components/NavBar';
import { PokemonsTable } from './../components/PokemonsTable';
import { Search } from './../components/Search';
import { startPokemonsLoading } from './../actions/pokemonActions';
import { useDispatch } from 'react-redux';

export const PokemonScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(startPokemonsLoading());
    }, [dispatch])
    return (
        <div className="App">
          <NavBar />
          <div className="container pokemonapp__container">
            <Search />
            <PokemonsTable />
          </div>
        </div>
    )
}

