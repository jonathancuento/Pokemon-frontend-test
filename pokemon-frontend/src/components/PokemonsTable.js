import React from 'react'

import { listaPokes } from '../helpers/listaBorrar'

export const PokemonsTable = () => {

    const handleDelete = (id) => {
        console.log(id, " eliminado");
    }
    const handleEdit = (id) => {
        console.log(id, " actualizado");
    }
    return (
        <div className="pokemontable__container mt-5">
            <div className="d-flex justify-content-between">
                <h5>Lista de Pokemones</h5>
                <button className="btn btn-primary">
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
                    {listaPokes.map(({ id, name, image, type, attack, defense }) => (
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


        </div>
    )
}
