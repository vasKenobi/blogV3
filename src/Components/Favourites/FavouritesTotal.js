import React from "react"
import {keys} from 'lodash'
import posts, { getProductsMap } from "../../App/Main/Posts/posts"


const PostRating = ({
    postsInFavourites,
    productsMap=getProductsMap(posts)
}) => {
    return (
        <div>
            Total : {
                keys(postsInFavourites).reduce((total,productId)=>(
                    total + (postsInFavourites[productId] * productsMap[productId].price)
                ),0)
            } $
        </div>
    )
}

export default PostRating