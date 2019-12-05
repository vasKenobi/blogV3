import React from "react"
import {keys} from 'lodash'
import posts, { getPostsMap } from "../../App/Main/Posts/posts"


const FavouritesTotal = ({
    postsInFavourites,
    postsMap=getPostsMap(posts)
}) => {
    return (
        <div>
            Total : {
                keys(postsInFavourites).reduce((total,postId)=>(
                    total + (postsInFavourites[postId] * postsMap[postId].initRating)
                ),0)
            } $
        </div>
    )
}

export default FavouritesTotal