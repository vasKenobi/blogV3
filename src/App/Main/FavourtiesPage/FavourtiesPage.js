import React from 'react'
import CartTotal from '../../../Components/Favourites/CartTotal'
import CartProductList from '../../../Components/Favourites/CartProductList'
import CartProductListItemExtended from '../../../Components/Favourites/CartProductListItemExtended'

const FavourtiesPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity
}) => {
    return (
        <div>
            <h1 className="page-title">Cart</h1>
            <CartProductList
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