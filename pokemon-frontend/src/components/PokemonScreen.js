import React, { useEffect } from 'react';
import { NavBar } from './../components/NavBar';
import { PokemonsTable } from './../components/PokemonsTable';
import { Search } from './../components/Search';
import { startPokemonsLoading } from './../actions/pokemonActions';
import { useDispatch, useSelector } from 'react-redux';

export const PokemonScreen = () => {
  const {searchWord} = useSelector(state => state.pokemonState)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(startPokemonsLoading());
    }, [])
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

