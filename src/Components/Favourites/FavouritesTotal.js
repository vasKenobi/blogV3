import React from "react"
import {keys} from 'lodash'
import posts, { getPostsMap } from "../../App/Main/Posts/posts"


const PostRating = ({
    postsInFavourites,
    productsMap=getPostsMap(posts)
}) => {
    return (
        <div>
            Total : {
                keys(postsInFavourites).reduce((total,postId)=>(
                    total + (postsInFavourites[postId] * productsMap[postId].price)
                ),0)
            } $
        </div>
    )
}

export default PostRating