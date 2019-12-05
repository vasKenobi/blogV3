import React from 'react'
import {Link} from 'react-router-dom'
import './Favourites.css'
import CartTotal from '../../../Components/Favourites/CartTotal'
import CartProductList from '../../../Components/Favourites/CartProductList'


const Favourites = ({
    productsInCart,
}) => {
    return (
        <div className="cart text-center">
            <CartProductList
                productsInCart={productsInCart}
            />           
            <CartTotal
                productsInCart={productsInCart}
            />
            <Link to="/cart">Show cart</Link>
        </div>
    )
}


export default Favourites