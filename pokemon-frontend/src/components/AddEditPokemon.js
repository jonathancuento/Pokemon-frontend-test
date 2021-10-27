import React from 'react'
import { useState } from 'react'
import { closeModal } from '../helpers/closeModal'

export const AddEditPokemon = () => {

    const addEditText = "Guardar"

    const [infoPokemon, setInfoPokemon] = useState({
        pokeAttack: 50,
        pokeDefense: 50,
        pokeName: '',
        pokeImage: '',
        pokeType: 'water'
    })

    const { pokeAttack, pokeDefense, pokeName, pokeImage, pokeType } = infoPokemon;

    const handleInputChange = (e) => {
        setInfoPokemon({
            ...infoPokemon,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        closeModal();
    }
    return (
        <div className="modal fade" id="pokeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">{addEditText} Pokemon</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

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
                                        <option value="water" select="true">Agua</option>
                                        <option value="fire">Fuego</option>
                                        <option value="normal">Normal</option>
                                        <option value="bug">Bicho</option>
                                        <option value="poison">Veneno</option>
                                    </select>
                                </div>


                            </div>
                            <div className="adddelete__container-col">
                                <div className="form-group">
                                    <label className="form-label mr-2">Ataque: </label>
                                    <span className="mr-1">0</span>
                                    <input
                                        type="range"
                                        className="form-range adddelete__range-custom mr-3"
                                        name="pokeAttack" value={pokeAttack}
                                        onChange={handleInputChange}
                                        min="0"
                                        max="100"
                                        step="1"
                                    />
                                    <span className="form-label mr-2">100</span>
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
                                    <span className="form-label mr-2">100</span>
                                    <span className="adddelete__range-value">{pokeDefense}</span>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary mt-5 btn-block"
                                    onClick={handleSubmit}
                                >
                                    {addEditText}
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
