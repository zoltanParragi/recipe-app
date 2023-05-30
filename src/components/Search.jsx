import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRecipes } from '../features/recipesSlice'

export default function Search() {
    const dispatch = useDispatch()
    const [searchTerm, setSearchterm] = useState("")

    const handleChange = (ev) => {
        ev.preventDefault()
        setSearchterm(ev.target.value)
    }

    return (
        <div>
            <p>Type in a searchterm to find the recipes you wish:</p>
            <input type="text" onChange={(e) => handleChange(e)} />
            <button onClick={() => dispatch(fetchRecipes(searchTerm))}>Find</button>
        </div>
    )
}
