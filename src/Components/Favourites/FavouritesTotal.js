import React from "react"
import {keys} from 'lodash'
import posts, { getPostsMap } from "../../App/Main/Posts/posts"


const PostRating = ({
    postsInFavourites,
    postsMap=getPostsMap(posts)
}) => {
    return (
        <div>
            Total : {
                keys(postsInFavourites).reduce((total,postId)=>(
                    total + (postsInFavourites[postId] * postsMap[postId].price)
                ),0)
            } $
        </div>
    )
}

export default PostRating