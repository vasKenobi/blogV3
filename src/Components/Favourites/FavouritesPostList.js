import React from 'react'
import {keys} from 'lodash'
import posts, { getPostsMap } from '../../App/Main/Posts/posts'
import FavouritesPostListItem from './FavouritesPostListItem'

const FavouritesPostList = ({
    postsInFavourites,
    postsMap = getPostsMap(posts),
    CartItem = FavouritesPostListItem,
    removePostFromFavourites,
    changePostRating
}) => {
    return (
        <div>
            {
                keys(postsInFavourites).map((postId)=>(
                    <CartItem
                        product = {postsMap[postId]}
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