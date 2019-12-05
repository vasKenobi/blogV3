import React from 'react'
import {Link} from 'react-router-dom'
import './Favourites.css'
import CartTotal from '../../../Components/Favourites/CartTotal'
import FavouritesPostList from '../../../Components/Favourites/FavouritesPostList'


const Favourites = ({
    productsInCart,
}) => {
    return (
        <div className="cart text-center">
            <FavouritesPostList
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