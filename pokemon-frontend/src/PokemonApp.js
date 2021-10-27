import React from 'react';
import './App.css';
import './Custom.css';
import { NavBar } from './components/NavBar';
import { PokemonsTable } from './components/PokemonsTable';
import { Search } from './components/Search';

export const PokemonApp = ()=>{
  return (
    <div className="App">
      <NavBar />
      <div className="container pokemonapp__container">
        <Search />
        <PokemonsTable />
      </div>
    </div>
  );
}

