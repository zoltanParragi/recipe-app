import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function () {
    const favourites = useSelector(state => state.favourites)
    return (
        <div>
            <div>
                <span>Logo</span>
                <span><Link to='/'>Home</Link></span>
            </div>
            <div>
                <Link to='/favourites'>Favourites {favourites ? favourites.length : "0"}</Link>
            </div>
        </div>
    )
}
