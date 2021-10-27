import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletePokemon, setActivePokemon, startPokemonDeleting } from '../actions/pokemonActions';

import { listaPokes } from '../helpers/listaBorrar'
import { AddEditPokemon } from './AddEditPokemon';

export const PokemonsTable = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const { pokemons, searchWord } = useSelector( state => state.pokemonState );


    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(startPokemonDeleting(id))
        console.log(id, " eliminado");
    }


    const handleEdit = (id) => {
        const activePokemon = pokemons.find(pokemon=>pokemon.id===id)
        dispatch(setActivePokemon(activePokemon))
        setModalIsOpen(true)
    }


    const handleOpenModal = ()=>{
        setModalIsOpen(true)
    }
    return (
        <div className="pokemontable__container mt-5">
            <div className="d-flex justify-content-between">
                <h5>Lista de Pokemones</h5>
                <button className="btn btn-primary" onClick={handleOpenModal}>
                    Añadir Nuevo
                </button>
                {/* <i class="fas fa-plus"></i> */}
            </div>



            <table className="table mt-2">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Ataque</th>
                        <th scope="col">Defensa</th>
                        <th scope="col">Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    {pokemons.map(({ id, name, image, type, attack, defense }) => (
                        (searchWord.toLowerCase() ==="" || name.toLowerCase().includes(searchWord.toLowerCase())) &&
                        <tr key={id}>
                            <td>{name}</td>
                            <td>
                                <img 
                                    src={image} 
                                    alt={name} 
                                    className="img-thumbnail d-flex align-items-center" 
                                    width="100"
                                    />
                                
                                </td>
                            <td>{type}</td>
                            <td>{attack}</td>
                            <td>{defense}</td>
                            <td>
                                <i
                                    className="fas fa-edit cursor mr-4"
                                    onClick={() => handleEdit(id)}
                                ></i>

                                <i
                                    className="fas fa-trash-alt cursor"
                                    onClick={() => handleDelete(id)}
                                ></i>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        <AddEditPokemon modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </div>
    )
}
