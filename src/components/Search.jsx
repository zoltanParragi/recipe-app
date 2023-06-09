import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRecipes } from '../features/recipesSlice'
import styles from '../styles/Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Search() {
    const dispatch = useDispatch()
    const [searchTerm, setSearchterm] = useState("")

    const handleChange = (ev) => {
        ev.preventDefault()
        setSearchterm(ev.target.value)
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <h1 className={styles.h1}>Let's make something delicious</h1>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className={styles.searchArea}>
                    <input className={styles.inputField} type="text" onChange={(e) => handleChange(e)} placeholder="Search"/>
                    <button className={styles.searchBtn} onClick={() => dispatch(fetchRecipes(searchTerm))}>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{color: "#ffffff",}} />
                    </button>
                </div>
            </div>
        </header>
    )
}
