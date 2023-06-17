import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pushToFavourites } from '../features/favouritesSlice'
import styles from '../styles/Recipes.module.css';
import Card from './Card';

export default function Recipes() {
    const recipes = useSelector(state => state.recipes)
    const dispatch = useDispatch()

    const handleClick = (item) => {
        dispatch(pushToFavourites(item))
    }

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h2>Recipes</h2>
                {recipes.recipesList.length === 0 && <div>Waiting for your ideas...</div>}
                {recipes.status == 'loading' && <p>loading...</p>}
                {recipes.status == 'error' && <p>Something went wrong. Try again later.</p>}
                {recipes.status == 'loaded' && recipes.recipesList.hits.map((item, index) => {
                    return (
                        <Card
                            isItHome = {true}
                            item={item}
                            index={index}
                            handleClick={handleClick}
                        />
                    )
                })}

            </div>
        </section>
    )
}

