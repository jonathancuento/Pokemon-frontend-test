import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal';
import { customStyles } from '../helpers/stylesModal';
import { setActivePokemon, startPokemonAdding, startPokemonUpdating} from '../actions/pokemonActions';



const emptyPokemon = {
    attack: 50,
    defense: 50,
    name: '',
    image: '',
    hp:50,
    type: 'water'
}


export const AddEditPokemon = ({ modalIsOpen, setModalIsOpen }) => {
    const dispatch = useDispatch()
    const { activePokemon } = useSelector(state => state.pokemonState);

    const [nameValid, setNameValid] = useState(true);
    const [imageValid, setImageValid] = useState(true);

    const addEditText = activePokemon == null ? "Añadir nuevo" : "Guardar cambios";


    const [infoPokemon, setInfoPokemon] = useState(emptyPokemon);
    const { attack, defense, name, image, type, hp } = infoPokemon;



    useEffect(() => {
        if (activePokemon != null) {
            setInfoPokemon(activePokemon);
        } else {
            setInfoPokemon(emptyPokemon);
        }
    }, [activePokemon, setInfoPokemon])



    const handleInputChange = (e) => {
        setInfoPokemon({
            ...infoPokemon,
            [e.target.name]: e.target.value
        });
    }

    const closeModal = () => {
        setModalIsOpen(false);
        if (activePokemon != null) {
            dispatch(setActivePokemon(null))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( name.trim().length < 2 ) {
            return setNameValid(false);
        }
        if ( image.trim().length < 2 ) {
            return setImageValid(false);
        }

        if ( activePokemon != null) {
            dispatch( startPokemonUpdating( infoPokemon ) )
        } else {
            dispatch( startPokemonAdding(infoPokemon) );
        }
        setNameValid(true);
        setImageValid(true);
        closeModal();
    }


    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
        >
            <form>
            <div className="container d-flex justify-content-between">

                <h3 className="ml-3">{addEditText}</h3>
                <span onClick={closeModal}><h2 className="cursor">&times;</h2></span>
            </div>
                <div className="adddelete__container container">
                    <div className="adddelete__container-col">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className={ `form-control ${ !nameValid && 'is-invalid' } `}
                                name="name"
                                value={name}
                                placeholder="Pikachu"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Imagen</label>
                            <input
                                type="text"
                                className={ `form-control ${ !imageValid && 'is-invalid' } `}
                                name="image"
                                value={image}
                                placeholder="https://imagenes.com/imagen-pikachu.jpg"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Tipo</label>
                            <select
                                className="form-control"
                                onChange={handleInputChange}
                                name="type"
                                value={type}
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
                                name="attack" value={attack}
                                onChange={handleInputChange}
                                min="0"
                                max="100"
                                step="1"
                            />
                            <span className="form-label mr-2">100</span>
                            <span className=" mr-2 adddelete__range-value">{attack}</span>
                        </div>
                        <div className="form-group">
                            <label className="form-label mr-2">Defensa: </label>
                            <span className="mr-1">0</span>
                            <input
                                type="range"
                                className="form-range adddelete__range-custom mr-2"
                                name="defense"
                                value={defense}
                                onChange={handleInputChange}
                                min="0"
                                max="100"
                                step="1"
                            />
                            <span className="form-label mr-2">100</span>
                            <span className="adddelete__range-value">{defense}</span>
                        </div>
                        <div className="form-group">
                            <label className="form-label mr-2">Puntos por golpe: </label><br/>
                            <span className="mr-1">0</span>
                            <input
                                type="range"
                                className="form-range adddelete__range-custom mr-2"
                                name="hp"
                                value={hp}
                                onChange={handleInputChange}
                                min="0"
                                max="100"
                                step="1"
                            />
                            <span className="form-label mr-2">100</span>
                            <span className="adddelete__range-value">{hp}</span>
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
        </Modal>
    )
}
