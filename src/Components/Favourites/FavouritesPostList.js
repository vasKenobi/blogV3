import React from 'react'
import {keys} from 'lodash'
import posts, { getProductsMap } from '../../App/Main/Posts/posts'
import FavouritesPostListItem from './FavouritesPostListItem'

const FavouritesPostList = ({
    postsInFavourites,
    productsMap = getProductsMap(posts),
    CartItem = FavouritesPostListItem,
    removePostFromFavourites,
    changeProductQuantity
}) => {
    return (
        <div>
            {
                keys(postsInFavourites).map((productId)=>(
                    <CartItem
                        product = {productsMap[productId]}
                        productsCount = {postsInFavourites[productId]}
                        key={productId}
                        removePostFromFavourites={removePostFromFavourites}
                        changeProductQuantity={changeProductQuantity}
                    />
                ))
            }
        </div>
    )
}

export default FavouritesPostList