import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavourites } from '../features/favouritesSlice'
import styles from '../styles/Favourites.module.css';
import Card from './Card';

export default function Favourites() {
    const favourites = useSelector(state => state.favourites)
    const dispatch = useDispatch()

    const handleClick = (item) => {
        const id = item.recipe.shareAs
        dispatch(removeFromFavourites(id))
    }
    console.log(favourites)
    return (
        <>
            <header className={styles.header}>
                <h1>Favourites</h1>
            </header>

            <section className={styles.section}>
                <div className={styles.wrapper}>

                    {favourites && favourites.map((item, index) => {
                        return (
                            <Card
                                isItHome={false}
                                item={item}
                                index={index}
                                handleClick={handleClick}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    )
}
