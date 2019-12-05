import React from 'react'
import {keys} from 'lodash'
import posts, { getProductsMap } from '../../App/Main/Posts/posts'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productsInCart,
    productsMap = getProductsMap(posts),
    CartItem = CartProductListItem,
    removeProductFromCart,
    changeProductQuantity
}) => {
    return (
        <div>
            {
                keys(productsInCart).map((productId)=>(
                    <CartItem
                        product = {productsMap[productId]}
                        productsCount = {productsInCart[productId]}
                        key={productId}
                        removeProductFromCart={removeProductFromCart}
                        changeProductQuantity={changeProductQuantity}
                    />
                ))
            }
        </div>
    )
}

export default CartProductList