import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavourites } from '../features/favouritesSlice'


export default function Favourites() {
    const favourites = useSelector(state => state.favourites)
    const dispatch = useDispatch()

    const removeRecipe = (id) => {
        dispatch(removeFromFavourites(id))
    }
    console.log("ok: ")
    console.log(favourites)

    return (
        <>
            <div>Favourites</div>
            {favourites && favourites.map((item, index) => {
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
                            <button onClick={() => removeRecipe(item.recipe.shareAs)}>Remove this recipe</button>
                        </div>
                    </div>
                )
            })}

        </>
    )
}
