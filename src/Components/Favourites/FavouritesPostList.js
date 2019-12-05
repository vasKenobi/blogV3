import React from 'react'
import {keys} from 'lodash'
import posts, { getPostsMap } from '../../App/Main/Posts/posts'
import FavouritesPostListItem from './FavouritesPostListItem'

const FavouritesPostList = ({
    postsInFavourites,
    productsMap = getPostsMap(posts),
    CartItem = FavouritesPostListItem,
    removePostFromFavourites,
    changePostRating
}) => {
    return (
        <div>
            {
                keys(postsInFavourites).map((postId)=>(
                    <CartItem
                        product = {productsMap[postId]}
                        productsCount = {postsInFavourites[postId]}
                        key={postId}
                        removePostFromFavourites={removePostFromFavourites}
                        changePostRating={changePostRating}
                    />
                ))
            }
        </div>
    )
}

export default FavouritesPostList