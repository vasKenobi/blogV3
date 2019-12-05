import React from 'react'
import CartTotal from '../../../Components/Favourites/CartTotal'
import FavouritesPostList from '../../../Components/Favourites/FavouritesPostList'
import CartProductListItemExtended from '../../../Components/Favourites/CartProductListItemExtended'

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
                CartItem={CartProductListItemExtended}
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