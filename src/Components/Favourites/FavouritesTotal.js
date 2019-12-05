import React from "react"
import {keys} from 'lodash'
import posts, { getProductsMap } from "../../App/Main/Posts/posts"


const PostRating = ({
    productsInCart,
    productsMap=getProductsMap(posts)
}) => {
    return (
        <div>
            Total : {
                keys(productsInCart).reduce((total,productId)=>(
                    total + (productsInCart[productId] * productsMap[productId].price)
                ),0)
            } $
        </div>
    )
}

export default PostRating