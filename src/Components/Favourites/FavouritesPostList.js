import React from 'react'
import {keys} from 'lodash'
import posts, { getPostsMap } from '../../App/Main/Posts/posts'
import FavouritesPostListItem from './FavouritesPostListItem'
//comments
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
                        post = {postsMap[postId]}
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