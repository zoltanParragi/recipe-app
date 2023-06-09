import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '../styles/NavBar.module.css';

export default function () {
    const favourites = useSelector(state => state.favourites)
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link to='/'>My Recipes</Link>
            </div>
            <div className={styles.logoMobile}>
                <Link to='/'>
                    <img src="tabicon.jpg" width="30" alt="logo" />
                </Link>
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>
                    <Link to='/favourites'>Favourites: {favourites ? favourites.length : "0"}</Link>
                </li>
            </ul>
        </nav>
    )
}
