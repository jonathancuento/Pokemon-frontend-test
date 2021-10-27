import React from 'react'
import { useState } from 'react'

export const AddEditPokemon = () => {

    const [infoPokemon, setInfoPokemon] = useState({
        pokeAttack: 50,
        pokeDefense: 50,
        pokeName: '',
        pokeImage: '',
        pokeType: 'water'
    })

    const {pokeAttack, pokeDefense, pokeName, pokeImage, pokeType} = infoPokemon;

    const handleInputChange = (e) => {
        setInfoPokemon({
            ...infoPokemon,
            [e.target.name]: e.target.value
        });
    }
    return (
        <form>
            <div className="adddelete__container container">
                <div className="adddelete__container-col">
                    <div className="form-group">
                        <label>Nombre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="pokeName" 
                            value={pokeName} 
                            placeholder="Pikachu" 
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Imagen</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="pokeImage" 
                            value={pokeImage} 
                            placeholder="https://imagenes.com/imagen-pikachu.jpg" 
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tipo</label>
                        <select 
                            className="form-control" 
                            onChange={handleInputChange} 
                            name="pokeType" 
                            value={pokeType}
                            >
                            <option value="water" select="true">Water</option>
                            <option value="fire">Fire</option>
                            <option value="normal">Normal</option>
                            <option value="bug">Bug</option>
                            <option value="poison">Poison</option>
                        </select>
                    </div>


                </div>
                <div className="adddelete__container-col">
                    <div className="form-group">
                        <label className="form-label mr-2">Ataque: </label>
                        <span className="mr-1">0</span>
                        <input 
                            type="range" 
                            className="form-range adddelete__range-custom mr-2" 
                            name="pokeAttack" value={pokeAttack} 
                            onChange={handleInputChange} 
                            min="0" 
                            max="100" 
                            step="1" 
                        />
                        <span className="form-label mr-4">100</span>
                        <span className=" mr-2 adddelete__range-value">{pokeAttack}</span>
                    </div>
                    <div className="form-group">
                        <label className="form-label mr-2">Defensa: </label>
                        <span className="mr-1">0</span>
                        <input 
                            type="range" 
                            className="form-range adddelete__range-custom mr-2" 
                            name="pokeDefense" 
                            value={pokeDefense} 
                            onChange={handleInputChange} 
                            min="0" 
                            max="100" 
                            step="1" 
                        />
                        <span className="form-label mr-4">100</span>
                        <span className=" mr-2 adddelete__range-value">{pokeDefense}</span>
                    </div>

                </div>
            </div>
        </form>
    )
}
