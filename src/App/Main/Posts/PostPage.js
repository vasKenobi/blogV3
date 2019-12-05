import React from 'react'
import posts, { getProductsMap } from './posts'

const PostPage = ({
    match,
    productsMap = getProductsMap(posts)
}) => {
    console.log(match)
    return (
        <div>
            <h1 className="page-title">{productsMap[match.params.productId].name} </h1>
        </div>
    )
}

export default PostPage