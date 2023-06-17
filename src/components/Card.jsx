import React from 'react'
import styles from '../styles/Card.module.css'
import { Link } from 'react-router-dom';
import BtnOnCard from './BtnOnCard';

export default function Card({ isItHome, item, index, handleClick }) {

    const showCautions = (arr) => {
        if (arr.length > 0) {
            return arr.map((item, index) => {
                if (arr.length - 1 != index) {
                    return item.toLowerCase() + ", "
                } else {
                    return item.toLowerCase()
                }
            })
        } else {
            return "none"
        }
    }

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
                        <h6 className={styles.textAreaTitle}>Meal type:</h6>
                        <p>{item.recipe.mealType}</p>
                    </div>
                    <div>
                        <p>
                            <h6 className={styles.textAreaTitle}>Ingredients: </h6>
                            <p>
                                {item.recipe.ingredients.map((ingredient, i) => {
                                    return <span key={item.recipe.image + ingredient.food}>{ingredient.food}{(i !== item.recipe.ingredients.length - 1) && ','} </span>
                                })}
                            </p>
                        </p>
                    </div>
                    <div>
                        <h6 className={styles.textAreaTitle}>Time needed:</h6>
                        <p>{item.recipe.totalTime != 0 ? (item.recipe.totalTime + " min") : "n.a."}</p>
                    </div>
                    <div>
                        <h6 className={styles.textAreaTitle}>Cautions: </h6>
                        <p>{showCautions(item.recipe.cautions)}</p>
                    </div>
                    <div className={styles.instructionsWrapper}>
                        <h6 className={styles.textAreaTitle}>Instrucions:</h6>
                        <p>
                            <Link to={item.recipe.url} target='_blank'>read the instructions</Link>
                        </p>
                    </div>
                </div>
            </div>
            
            <BtnOnCard isItHome={isItHome} item={item} handleClick={handleClick}/>
        </div>
    )
}
