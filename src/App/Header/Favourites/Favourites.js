import React from 'react'
import {Link} from 'react-router-dom'
import './Favourites.css'
import FavouritesTotal from '../../../Components/Favourites/FavouritesTotal'
import FavouritesPostList from '../../../Components/Favourites/FavouritesPostList'


const Favourites = ({
    postsInFavourites,
}) => {
    return (
        <div className="cart text-center">
            <FavouritesPostList
                postsInFavourites={postsInFavourites}
            />           
            <FavouritesTotal
                postsInFavourites={postsInFavourites}
            />
            <Link to="/cart">Show cart</Link>
        </div>
    )
}


export default Favourites