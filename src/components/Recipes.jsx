import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pushToFavourites } from '../features/favouritesSlice'

export default function Recipes() {
    const recipes = useSelector(state => state.recipes)
    const dispatch = useDispatch()

    const addToFavourites = (item) => {
        dispatch(pushToFavourites(item))
    }

    return (
        <>
            <h1>Recipes</h1>
            {recipes.status === 'loaded' && recipes.recipesList.hits.map((item, index) => {
                return (
                    <div key={index}>
                        <div>{item.recipe.label}</div>
                        <div><img src={item.recipe.image} alt={item.recipe.label} width="100" /></div>
                        <div>
                            {item.recipe.ingredients.map((ingredient, i) => {
                                return <span key={item.recipe.image + ingredient.food}>{ingredient.food}, </span>
                            })}
                        </div>
                        <div>
                            <p>Time needed:  {item.recipe.totalTime} min</p>
                        </div>
                        <div>
                            <button onClick={() => addToFavourites(item)}>Add to Favourites</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
