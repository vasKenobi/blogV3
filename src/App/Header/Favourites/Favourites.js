import React from 'react'
import {Link} from 'react-router-dom'
import FavouritesTotal from '../../../Components/Favourites/FavouritesTotal'
import FavouritesPostList from '../../../Components/Favourites/FavouritesPostList'


const Favourites = ({
    postsInFavourites,
}) => {
    return (
        <div className="col-lg-3 favouritesTopBarPositon">
            <div>
            <FavouritesPostList
                postsInFavourites={postsInFavourites}
            />
             </div>
            <div>           
            <FavouritesTotal
                postsInFavourites={postsInFavourites}
            />
            </div>
            <div>
            <Link to="/favourites">Go to Favourites</Link>
            </div>
        </div>
    )
}


export default Favourites