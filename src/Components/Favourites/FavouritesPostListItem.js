import React from 'react'

const FavouritesPostListItem = ({
    postsRating,
    product
}) => {
    return (
        <div>{product.name} : {postsRating}</div>
    )
}

export default FavouritesPostListItem