import React from 'react'

const FavouritesPostListItem = ({
    productsCount,
    product
}) => {
    return (
        <div>{product.name} : {productsCount}</div>
    )
}

export default FavouritesPostListItem