import React from 'react'
import styles from '../styles/BtnOnCard.module.css'

export default function BtnOnCard({isItHome, item, handleClick}) {
    return (
        <>
            <div className={isItHome ? styles.favouritesBtn : styles.removeFavouritesBtn}>
                <button onClick={() => handleClick(item)}>
                    {isItHome ? "Add to Favourites" : "Remove this recipe"}
                </button>
            </div>
        </>
    )
}
