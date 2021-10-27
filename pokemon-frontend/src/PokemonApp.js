import React from 'react';
import './App.css';
import './Custom.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { PokemonScreen } from './components/PokemonScreen';

export const PokemonApp = () => {
  return (
    <Provider store={store}>
      <PokemonScreen />
    </Provider>
  );
}

