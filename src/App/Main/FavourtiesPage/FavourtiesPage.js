import React from 'react'
import CartTotal from '../../../Components/Favourites/CartTotal'
import FavouritesPostList from '../../../Components/Favourites/FavouritesPostList'
import FavouritesPostListItemExtended from '../../../Components/Favourites/FavouritesPostListItemExtended'

const FavourtiesPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity
}) => {
    return (
        <div>
            <h1 className="page-title">Cart</h1>
            <FavouritesPostList
                productsInCart={productsInCart}
                CartItem={FavouritesPostListItemExtended}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
            />     
            <CartTotal
                productsInCart={productsInCart}
            />
                    
                
        </div>
    )
}
export default FavourtiesPage