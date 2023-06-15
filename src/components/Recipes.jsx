import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pushToFavourites } from '../features/favouritesSlice'
import styles from '../styles/Recipes.module.css';
import { Link } from 'react-router-dom';

export default function Recipes() {
    const recipes = useSelector(state => state.recipes)
    const dispatch = useDispatch()

    const addToFavourites = (item) => {
        dispatch(pushToFavourites(item))
    }

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h2>Recipes</h2>
                <div className={styles.line}></div>
                {recipes.recipesList.length === 0 && <div>Waiting for your ideas...</div>}
                {recipes.status == 'loading' && <p>loading...</p>}
                {recipes.status == 'error' && <p>Something went wrong. Try again later.</p>}
                {recipes.status == 'loaded' && recipes.recipesList.hits.map((item, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <div className={styles.cardTitle}>
                                <h4 className={styles.h4}>{item.recipe.label}</h4>
                            </div>

                            <div className={styles.cardBody}>
                                <div className={styles.imgContainer}>
                                    <img src={item.recipe.image} alt={item.recipe.label} />
                                </div>
                                <div className={styles.textArea}>
                                    <div>
                                        <span className={styles.textAreaTitle}>Meal type:</span>  {item.recipe.mealType}
                                    </div>
                                    <div className={styles.ingredientsWrapper}>
                                        <p>
                                            <span className={styles.textAreaTitle}>Ingredients: </span>
                                            {item.recipe.ingredients.map((ingredient, i) => {
                                                return <span key={item.recipe.image + ingredient.food}>{ingredient.food} {(i !== item.recipe.ingredients.length - 1) && ','} </span>
                                            })}
                                        </p>
                                    </div>
                                    <div>
                                        <span className={styles.textAreaTitle}>Time needed:</span>  {item.recipe.totalTime != 0 ? (item.recipe.totalTime + " min") : "n.a."}
                                    </div>
                                    <div>
                                        <span className={styles.textAreaTitle}>Cautions:</span>  {item.recipe.cautions}
                                    </div>
                                    <div className={styles.instructionsWrapper}>
                                        <span className={styles.textAreaTitle}>Instrucions:</span>
                                        <Link to={item.recipe.url} target='_blank'>read the instructions</Link> 
                                    </div>
                                </div>
                            </div>
                            <div className={styles.favouritesBtn}>
                                <button onClick={() => addToFavourites(item)}>Add to Favourites</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}
