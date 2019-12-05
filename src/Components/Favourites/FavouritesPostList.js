import React from 'react'
import {keys} from 'lodash'
import posts, { getPostsMap } from '../../App/Main/Posts/posts'
import FavouritesPostListItem from './FavouritesPostListItem'

const FavouritesPostList = ({
    postsInFavourites,
    postsMap = getPostsMap(posts),
    FavouritesItem = FavouritesPostListItem,
    removePostFromFavourites,
    changePostRating
}) => {
    return (
        <div>
            {
                keys(postsInFavourites).map((postId)=>(
                    <FavouritesItem
                        product = {postsMap[postId]}
                        postsRating = {postsInFavourites[postId]}
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