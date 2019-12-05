import React from 'react'
import FavouritesTotal from '../../../Components/Favourites/FavouritesTotal'
import FavouritesPostList from '../../../Components/Favourites/FavouritesPostList'
import FavouritesPostListItemExtended from '../../../Components/Favourites/FavouritesPostListItemExtended'

const FavourtiesPage = ({
    postsInFavourites,
    removePostFromFavourites,
    changeProductQuantity
}) => {
    return (
        <div>
            <h1 className="page-title">Cart</h1>
            <FavouritesPostList
                postsInFavourites={postsInFavourites}
                CartItem={FavouritesPostListItemExtended}
                removePostFromFavourites={removePostFromFavourites}
                changeProductQuantity={changeProductQuantity}
            />     
            <FavouritesTotal
                postsInFavourites={postsInFavourites}
            />
                    
                
        </div>
    )
}
export default FavourtiesPage