import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchWord } from './../actions/pokemonActions';

export const Search = () => {

    const [textSearch, setTextSearch] = useState("")
    const dispatch = useDispatch();
    
    const handleInputSearch = (e)=>{
        setTextSearch(e.target.value)
        dispatch(setSearchWord(textSearch))
    }
    // useEffect(() => {
    //     console.log(textSearch);
    // }, [textSearch])
    return (
        <div className="search__main-container mt-4">
            <h5>Buscar Pokemon</h5>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </span>
                </div>
                <input 
                    type="text" 
                    className="form-control search__input" 
                    placeholder="Ingrese el nombre del Pokemon"
                    value={textSearch}
                    onChange={handleInputSearch}
                />
            </div>

        </div>
    )
}
